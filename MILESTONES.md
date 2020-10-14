## Milestone 1
* Idea: Implement a DSL that allows users to easily edit and manipulate audio tracks such as looping, adjusting playback speed, combining multiple audio tracks, etc.  
   * DSL features:
      * Add/Remove Sounds
      * Clear all Sounds
      * Loop/Duration
      * Playback speed
      * Volume
    
   * UI features:
      * Buttons to display the pre-recorded sound effects
      * A panel where users can input their commands
      * A panel to see the commands after users input. Clears when user restarts.
      * A visual table of each sound effect's duration
      * Play/Pause button which plays/pauses the combined sound effects

* TA Feedback: Idea is good, focus more on the logic for the language rather than the other features. Consider looping functionality to make it more suitable to the criteria.

* Follow-up tasks: Decide on language and research appropriate API's and libraries that we can use for audio manipulation.

## Milestone 2
Division of tasks:  
Tasks: DSL creation (2), tokenization/parsing (3), Audio source/manipulation (3), Front-end design/implementation (5)
* Elvin: tokenization/parsing, Audio source/manipulation
* Jerry: Audio source/manipulation
* Jessica : Front-end design/implementation
* Ryan : Audio source/manipulation
* Vincent : Front-end design/implementation

###### Roadmap:  
Week Sept 21:
* Finalize DSL language draft and get feedback from TA on the language
* Start the skeleton implementation of front-end design, starting with user input
* Source in free sound effects and open source APIs

Week Sept 28:
* Mockup concrete DSL language and conduct user studies
* Implement our parser for the DSL language
* Implement our API for sound manipulation
* Continue the implementation of front-end functionalities

Week Oct 1: 
* Complete all our front-end design and implementation
* Reiterate on our implementation based on user feedback
* Conduct final user studies and record sample video.

Progress so far: 
* Created a DSL mockup
* Implemented a mock UI

Feedback from TA:
* Allow users to input multiple commands with usage of separators

## Milestone 3
DSL mockup
```
EXECUTE ::= COMMAND
COMMAND ::= ADD | REMOVE | CLEAR 
ADD ::= “Add” SOUND “at” SECONDS (“, EFFECT”)+
REMOVE ::= “Remove” SOUND
CLEAR ::= “Restart”

EFFECT ::= DURATION | LOOP | VOLUME | SPEED
DURATION ::= “length” SECONDS
LOOP ::= “interval” SECONDS
VOLUME ::= “volume” PERCENT
SPEED ::=  “speed” PLAYBACKRATE
SOUND ::= “sound_” IDENTIFIER
SECONDS ::= [0-5][0-9]
PERCENT ::= [0-9][0-9]
PLAYBACKRATE ::= 0.5 | 1 | 2 | 4
IDENTIFIER ::= [a-z]+
```
Feedback from User-Studies: https://forms.gle/CxyvHPP5GQ6rUPAV7
* I'm a little confused on what DURATION and LOOP means or how that would work together, could you clarify?
* Is there any way to put in more than one command at a time?
* It looks very cool, I'd love to try it once it's finished! But Is there also a command to play/pause the track at any time?
* I'm having a little trouble visualizing what this would look like, I'd have to try it to give some feedback, but the main thing I'm confused about is the definition of duration and loop.

Updated DSL from feedback
* Include ability to input more than one commands
* Add Play/Pause button to UX
* Modify definition of Duration/Loop
* Extended sound identifier to include capitalized alphabets

```
EXECUTE ::= COMMAND ("; " COMMAND)*
COMMAND ::= ADD | REMOVE | CLEAR 
ADD ::= “Add” SOUND as NAME “at” SECONDS (“," EFFECT)+
REMOVE ::= “Remove” NAME
CLEAR ::= “Restart”

EFFECT ::= REPEAT | VOLUME | SPEED
REPEAT ::= “length” SECONDS (INTERVAL)?
INTERVAL ::= "(interval " SECONDS ")"
VOLUME ::= “volume” PERCENT
SPEED ::=  “speed” PLAYBACKRATE
SOUND ::= “sound_” IDENTIFIER
SECONDS ::= [0-5][0-9]([\.][0-9])?
PERCENT ::= [0-2][0-9][0-9]
PLAYBACKRATE ::= ^[0-2][\.][0-9]+$
NAME ::= ^[A-Za-z0-9]+$
```
Sample Command:
* Add sound_china as sound1 at 5, length 20 (interval 4), volume 50, speed 1.5; Add sound_dance as sound2 at 10, length 15 (interval 4);
* Add sound_rich as sound3 at 0, volume 150, speed 0.5; Add sound_electro1 as sound 4 at 0, volume 50, speed 1.5; 
* Remove sound3
* Restart

Sample Music:   
Add sound_electro2 as backdrop at 0, volume 50, length 10;  
Add sound_snare as snare at 3, length 5 (interval 3);  
Add sound_rich as imrich at 3, volume 200;  
Add sound_dance as dance at 4, length 4;  
Add sound_bigger as bigga at 1, length 2, speed 1.7, volume 150;  
Add sound_ship as shippo at 7, speed 1.3;  
Add sound_china as chinaaa at 8, volume 200; 

Note:  
You can change an existing sound you've added simply by calling Add, with the same name of the sound you added.

## Milestone 4
Status of implementation:
* Tokenization/Parsing Complete
* UI/UX in progress, able to view/play individual sound effects, and able to input commands.
* Audio manipulation in progress, need some more research for a working implementation

Plans for final user study:
* We will have users open up the project in their web browser, and have them create a piece of music.  
We will ask them to record their screens for the purpose of the video.
* We will ask for any final feedback on usability and difficulty

Planned timeline for the remaining days:
* Working implementation for user studies compeleted by Oct 13th
* User studies, video production, final adjustments from 13th~19th.
