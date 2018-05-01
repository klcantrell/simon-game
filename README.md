# Simon: Morph Edition
### Exercise your memory muscles with this game of tones, lights, and patterns.

This app is a browser based implementation of the original Simon game. The game creates a pattern of tones and lights, and challenges the user to repeat the pattern in exact sequence. This user interface features morphing text that reminds the user whose turn it is and whether they've succeeded or failed.

User can:

* See the same series of button presses but with an additional step each time they input the pattern correctly
* Hear a sound that corresponds to each button both when the series plays for them and when they press a button
* Get notified when they press a wrong button and the series of starts again to remind them of the pattern so they can try again
* See how many steps are in the current series of button presses
* Hit a button to restart the game to a single step
* Play in "strict" mode where if they get a button press wrong, it notifies them that they have done so and the game restarts with a new random series of button presses
* Win the game by getting a series of 20 steps correct

Tech Highlights:

* Used **async functions** for handling the flow of the game
* Composed the functionality of the CPU and player objects with small factory functions

#### Visit the site!
#### https://simon-morphedition.surge.sh/
