# Stream Pets
---

## IDEA

- Each stream a new pet is created
- It has basic stats:
    1. Hunger
    2. Boredom
    3. Fitness
    4. Health
- Every X seconds a random stat depletes by random value
- The lifespan of the pet is 1 hour (could be changed), it will take 1 hour to go from a baby to old age.
- Players (or chat) can refil each stat by issuing a command in chat such as (!pet_feed, !pet_play, !pet_run, !pet_tablet)
- When a player refils the stat, it happens by a random amount (0%-100%), if it's over 60% then part of the players "DNA" is passed onto the pet
- The DNA is made the username and the colour of the username.
- When the animal dies, we will take all the "DNA" thats been made and use that to form a unique id (or DNA string) and take a image of the final form(or each stages form) and store that on a website as a keep sake.
- OR ANY OTHER IDEA THE STREAM COMES UP WITH.

## TODO

### First Release
    - Get a animated object on screen and be bound to a box.
        - Look at using (https://github.com/batiste/sprite.js)
    - Have a lifespan on the object
    - Have stat bars that randomly deplete
    - use chat commands to refil said bars
    - chances DNA implmentation
    - and then store in a database the pet image and DNA Strand and gnome.


## TO THINK ABOUT
    - ART https://dribbble.com/shots/6060235-Baby-Dino-Spritesheet-Overview
    - game idea :D https://sleepingpandagames.itch.io/baby-dino-adventures
    - TMI.JS for bot work
    - NEXT.JS and VERCEL for the website/overlay
    - Data Storage
        - Redis (Rawrsatbeards)
        - Monogo with a docker instance (Rawrsatbeards)
        - Or straight file system (Rawrsatbeards)
        - FaunaDB (Dr_dinomight)

