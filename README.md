# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Nikhil Ramesh**

Time spent: **5** hours spent in total

Link to project: (https://glitch.com/~chip-hexagonal-beginner)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

[https://developer.mozilla.org/en-US/docs/Web/JavaScript]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

[One challenging feature that took me a couple of attempts to implement was increasing the playback speed throughout turns. I thought it would 
be a simple adjustment of decremented the clueWaitTime variable when incrementing the progress variable. However, after doing this small change
my entire project broke down and I couldn't figure out why. I ultimately decided on a different solution that involved calculating the wait time
in the call function for the playSingleClue() function. I attempted to speed up the playback time by calling the function with the line: 
clueWaitTime - progress*50. My thought process here was that the wait time would be decremented by 50 every step since progress is incremented by one.
However, this solution ran into some bugs when considering the length of each sound and resulted in some noises being played too soon and previous
clues getting cut off. After trying all of these makeshift solutions I finally took a step back and decided to look over the entire javascript page. 
Thats when I then realized that I had to change the clueWaitTime from a constant to a variable and then the game worked perfectly. While it was just
a simple mistake, it completely altered the functionality of the entire game and I think that those small fixes are what make programming satisfying,
despite being extremely frustrating in the moment.
(I also just scrolled past the README portion of the prework document and now see the tip that would have saved me a lot of time.)]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

[While I was working on my submission, I thought of keeping a leaderboard or challenge mode where users could compete with one another since I have always
been competitive in nature. However, I do not have enough knowledge of networking and website integration to implement a leaderboard system yet. This leads
me to the question that occurred to me during the web development process for my submission: How do websites integrate user interactions into live websites?
While I think that a simple application like the light and sound memory game could be entertaining on its own, I would definitely enjoy interaction with others
and seeing how my score would stack up against theirs. My main questions about web development right now would be how to learn back-end development principles
like connecting a website to a database of users in order to facilitate functions like a leaderboard.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

[If I had a few more hours to work on this project, I would have implemented all optional functions. Other than that, I would have liked to implement a function for keeping track
of scores and adding a separate page to hold a live leaderboard. I think that this function would be extremely interesting to program and would provide a great learning experience
as it involves the integration of databases and websites. I know that SQL and PHP are important languages and database manipulation is a core principle of web development. This 
additional feature would help me practice my web development skills. Another feature that I wanted to implement was a limitless mode where users could see just how long of a pattern
they could repeat. I think that this mode would be best executed by using an incremental function that would add on to the pattern after each correct guess. These two additional 
features would work great together resulting in a competitive leaderboard where users would feel challenged to attempt to reach a high score.]



## License

    Copyright [Nikhil Ramesh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.