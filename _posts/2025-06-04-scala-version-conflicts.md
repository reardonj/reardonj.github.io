---
title: Identifying Scala Cross-Version Conflicts
description: A brief guide to isolating dependency conflicts in sbt projects when upgrading to Scala 3.
layout: post
---

You have just migrated your project to Scala 3, followed all the instructions, and run the build, only to be greeted with a cryptic message like this:

```
[error] Modules were resolved with conflicting cross-version suffixes in ProjectRef(uri("<path>"), "root"):
[error]    org.scala-lang.modules:scala-java8-compat _3, _2.13
```

`scala-java8-compat` isn't even in the sbt project's definition!? Where did it come from?

## Scala Dependencies

Scala packages are published with a suffix indicating which version of Scala the package is for. `_3` is for Scala 3, `_2.13` is for Scala 2.13. It is possible to use Scala 2.13 dependencies in a Scala 3 build, but depending on both the Scala 3 and Scala 2.13 version of the same library is not possible.

In this example, there must be a dependency that depends on `scala-java8-compat_2.13` and another that depends on `scala-java8-compat_3`. We need to figure out which ones, so we can upgrade or replace the ones causing the conflict.

## Listing Dependencies in sbt

sbt provides some tools to help us solve this problem, but they're not well documented. First up, the `dependencyTree` command will print out the entire tree of transitive dependencies for your project. If you have many dependencies, this will be a very large list, so let's pipe the output to a file for analysis:

```sh
sbt dependencyTree > deps.txt
```

This will give you output that looks like:

```
[info] root:root_3:0.1.0-SNAPSHOT
[info]   +-ch.qos.logback:logback-classic:1.5.18
[info]   | +-ch.qos.logback:logback-core:1.5.18
[info]   | +-org.slf4j:slf4j-api:2.0.17
[info]   | 
[info]   +-com.github.blemale:scaffeine_3:5.3.0
[info]   | +-com.github.ben-manes.caffeine:caffeine:3.1.8
[info]   | | +-com.google.errorprone:error_prone_annotations:2.21.1
[info]   | | +-org.checkerframework:checker-qual:3.37.0
[info]   | | 
[info]   | +-org.scala-lang.modules:scala-java8-compat_3:1.0.2
[info]   | | +-org.scala-lang:scala3-library_3:3.0.2 (evicted by: 3.3.6)
[info]   | | +-org.scala-lang:scala3-library_3:3.3.6
...
```

In this case, the project directly depends on `logback-classic`, and `scaffeine`, among a long list of others. In turn, `scaffeine` depends on `scala-java8-compat`! We could keep searching through this list to find the other one, but sbt has other commands that don't require us to write output to a text file.

## The Dependency Tree Plugin

sbt includes more powerful dependency analysis tools via a built-in plugin. Unfortunately, you need to enable it first by adding the following line to `project/plugins.sbt`

```scala
addDependencyTreePlugin
```

This provides several commands to explore the dependency tree:

* `dependencyBrowseGraph` loads a graph view of your dependencies in your browser. It's a cool visualization, but not very practical.
* `dependencyBrowseTree` loads a filterable tree view of your dependencies in your browser. This is a much more useful way to navigate the tree

But we actually just want to find out where `scala-java8-compat_3`, `scala-java8-compat_2.13` are used. We use the `whatDependsOn` command to perform this specific task:

```
sbt:root> whatDependsOn org.scala-lang.modules scala-java8-compat_3
[info] org.scala-lang.modules:scala-java8-compat_3:1.0.2
[info]   +-com.github.blemale:scaffeine_3:5.3.0
[info]     +-hello:hello_3:0.1.0-SNAPSHOT
[info]    
sbt:root> whatDependsOn org.scala-lang.modules scala-java8-compat_2.13
[error] Expected 'scala-java8-compat_3'
[error] whatDependsOn org.scala-lang.modules scala-java8-compat_2.13
[error]   
```

`whatDependsOn` takes the organization and the package name (including suffix) as two parameters. Confusingly, if you specify a package that the project doesn't depend on at all, it will try to suggest fixes.

In this case, the project doesn't depend on `scala-java8-compat_2.13` after all??

## Use the Scope

These dependencies are in a large project with many dependencies. Conveniently, dependency resolution is done before sbt tries to compile anything, so it is possible to just start deleting dependencies until it stops complaining about cross-version conflicts. In this project, the problem dependency turned out to be:

```scala
    "dev.zio" %% "zio-kafka-testkit" % "2.12.0" % Test
```

Yes, a Test scoped dependency, which the dependencyTree commands do not check by default. The scope needs to be included, or it will only look at the Compile scope. Looking at the Test scope instead, we see:

```
sbt:root> Test/whatDependsOn org.scala-lang.modules scala-java8-compat_2.13
[info] org.scala-lang.modules:scala-java8-compat_2.13:1.0.2 [S]
[info]   +-org.apache.kafka:kafka_2.13:3.9.0 [S]
[info]     +-io.github.embeddedkafka:embedded-kafka_2.13:3.9.0 [S]
[info]       +-dev.zio:zio-kafka-testkit_3:2.12.0
[info]         +-hello:hello_3:0.1.0-SNAPSHOT
```

Finally, we have found the culprit! 

## tl;dr

Using the dependency tree plugin's `whatDependsOn` command is the fastest way to find problem dependencies. But beware, you may need to check multiple scopes if you have, eg. Test-only dependencies.

