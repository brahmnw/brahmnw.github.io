---
"title": "thaiOmes"
"year": 2026
"description": "thai inspired minecraft biomes mod"
"link": "/projects/thaiomes"
"image": "/images/projects/thaiomes/thumb.png"
"tags": 
    - "java"
    - "fabric"
    - "world gen"

hasPage: true
featured: true
featuredOrder: 2
---

#### inspiration
i was playing minecraft earlier, scouting for somewhere to build my base and i jokingly said that i'm going to build thailand in minecraft.

i quickly realized though, that none of the vanilla minecraft biomes really fit what i was building... 

so why don't i just build it myself?

i thought that this could be an incredibly fun project involving procedural world generation and working within the minecraft ecosystem!


#### (2026 aug 21) getting a biome in

oh my god. today i wanted to start working on noise maps to actually generate karsts but i realized that this project is a huge undertaking and today will just have to be figuring out how to even get a custom biome into the game.

for this, i used ***TerraBlender***. however, i made the mistake of using ***Minecraft 26.2***, which completely changed the modding architecture because of an update they did which deobfuscated their source code

renamed classes, changed method signatures, and outdated documentation made it incredibly difficult to follow. i ended up spending about four hours tracing API changes through VS Code.

the end result is this: (i used deepslate instead of my trash limestone texture)

![limestone karst worldgen test](/images/projects/thaiomes/2026-08-22-deepslate.png)

right now the terrain is all vanilla generation, placed with terrablender with 

- hot temperature
- humid → wet humidity
- coast → near inland continentalness
- erosion 0–1
- peak-normal weirdness

i definitely want to work on noise generation and other procedural terrain gen techniques in the future, but for now, this will do.

#### (2026 aug 20) my first block

i did not realize that pixel art was hard, because i tried to make limestone and it ended up being the ugliest texture i have ever seen in my life...

fabric and minecraft block registry is super finicky, so it took me a couple of hours just to get it into the game

here is "limestone". texture will change.

![i suck at making textures](/images/projects/thaiomes/2026-08-21-limestone.png)

glad to do this instead of study for my exam tomorrow





