---
title: The Last Voyage
description: A React based initiative tracker for d20 based roleplaying games. 
links:
    - name: Repository
      link: https://github.com/reardonj/the-last-voyage
    - name: Launch
      link: https://jmreardon.itch.io/the-last-voyage
---
This is a game I wrote for the [2020 Github Game Off](https://itch.io/jam/game-off-2020). The last time I wrote a game was in Java, ~15 years ago, handling the double-buffering and the whole nine yards myself. These days there seems to be a game engine (or five) for every language. For these purposes of this exercise, I wanted to experiment with using Typescript, so after a bit of poking around, I settled on [Phaser](http://phaser.io/), a 2D javascript game engine, and got typing.

This competition ran for all of November and included a theme the games had to follow, announced at the start of our time: *moonshot*. To go with this theme I settled on making a game about space exploration, and started off spending the better part of a week playing with a gravity simulation. Unfortunately, this prototype wasn't very well set up to integrate with a game loop and this caused me some grief the whole month. 

Phaser was a pleasure to use, though it took a little bit to get used to. I had several issues with it's scenes seemingly not covering up lower ones. It turns out that I simply hadn't set any backgrounds. Since the game takes place in space, and doing nothing resulted in a black background.

## Tech Stack

- Typescript
- Phaser 3