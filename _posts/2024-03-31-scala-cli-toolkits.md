---
title: Notes on Scala CLI Toolkits
description: Notes from testing out Scala CLI, the Scala Toolkit & and Typelevel toolkit.
layout: post
---

I spent some time this weekend testing out Scala CLI. Specifically, I was trying to set up a simple script to fetch XML from an API endpoint and process it. I ran into several gotchas while trying to do so.

## Scala Toolkit

I tried the [Scala Toolkit](https://docs.scala-lang.org/toolkit/introduction.html) first. It doesn't have XML parsing support built in but adding Scala XML is easy enough. However, trying to build using Scala Native revealed that Scala XML doesn't have native parsing support.

## Typelevel Toolkit
Next up, I tried the [Typelevel Toolkit](https://typelevel.org/toolkit/). It is also missing XML parsing support, but [http4s-fs2-data-xml-scala](https://http4s.github.io/http4s-fs2-data/#http4s-fs2-data-xml-scala) provides what I needed.

Running the script in resulted in [some unexpected SLF4J warnings](https://github.com/typelevel/toolkit/issues/164) that I needed to add another dependency to quiet.

Running http4s on Scala Native did not work out of the box either. This is supposed to be fixed in the next Cats Effect version, but until then Scala Native support requires either [epollcat](https://github.com/armanbilge/epollcat) or a prerelease fs2 build with native polling system support. I also had to install the `s2n` library via Homebrew since http4s links to it for TLS support on Scala Native.

With all of that out of the way, I had a simple JVM/Native script running!


```scala
//> using scala 3.3
//> using toolkit typelevel:0.1.25
//> using dep org.http4s::http4s-fs2-data-xml-scala::0.4.0
//> using dep co.fs2::fs2-io::3.10-365636d
//> using dep org.slf4j:slf4j-simple:2.0.12

import cats.effect.unsafe.implicits.global
import cats.effect.*
import org.http4s.ember.client.EmberClientBuilder
import scala.xml.*
import org.http4s.fs2data.xml.scalaxml.*

val ottawaWeather =
  "https://dd.weather.gc.ca/citypage_weather/xml/ON/s0000430_e.xml"

object CurrentTemp extends IOApp.Simple:
  def run = EmberClientBuilder
    .default[IO]
    .build
    .use(_.expect[Document](ottawaWeather))
    .map(_ \\ "currentConditions" \\ "temperature")
    .flatMap(temperature => IO.println(temperature.text))
```

## Takeaways

* Scala CLI mostly just works for the JVM!
* The lack of out-of-the-box XML support in both toolkits surprised me. I still think of it as a major format for web APIs.
* Scala Native is not quite ready for prime time, but may look more promising later this year when Cats Effect has better support.