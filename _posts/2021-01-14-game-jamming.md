---
title: "Autumn Game Jamming"
categories: [Coding]
---
This fall I wrote two small games for some game jams. Last time I wrote a game was in Java, ~15 years ago, handling the double-buffering and the whole nine yards myself. These days there seems to be a game engine (or five) for every language. For these purposes of this exercise, I wanted to experiment with using Typescript, so after a bit of poking around, I settled on [a 2D javascript game engine](http://phaser.io/) and got typing.

First up was the [Github Game Off](https://itch.io/jam/game-off-2020). This competition ran for all of November and included a theme the games had to follow, announced at the start of our time: *moonshot*. To go with this theme I settled on making a game about space exploration, and a month later I submitted [The Last Voyage](https://jmreardon.itch.io/the-last-voyage) to…[middling reviews](https://itch.io/jam/game-off-2020/rate/836515). 

Shortly after I worked with another participant from the Game Off to make [Summit](https://jmreardon.itch.io/summit) for a small game jam in December. No ratings for this one, but people seemed to like it in the comments.

But the point of the exercise wasn't winning -- the point was to write a real program with Typescript. Overall this exercise went well. Having a deadline forced me to just get it done instead of obsessing over the best way to implement features. Using Typescript over Javscript helped a few times when had to rework the game's data structures. Type-checking errors made it trivial for me find what I had to update.

Javascript's minimal standard library was occasionally irritating. I wrote a few chains of map/reduce calls that would be been much less verbose in other languages. Before my next Typescript project, I need to look into a library that provides better collection manipulation functions.

For the second project I had to deal with tilemaps, level loading and a physics engine. Working with the tilemaps and level loading in Phaser was a pleasure. Working with the physics engine gave me a new appreciation for games with broken physics. Getting the game's physics to work reasonably well took far longer than I expected. Most of these issues arose from the game's 'cling to walls' mechanic. It turns out that it is difficult to defy gravity.

I might do another game jam in the future, but probably not a month-long one, that was a bit too much of time commitment. 