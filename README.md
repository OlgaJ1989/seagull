# Chip Raider

Chip Raider is a game in which the user takes a form of a seagull jumping over obstacles on the beach. Its aim is to survive as long as possible, with the speed increasing almost constantly. This simple game is targeted at casual players of any age but it may appeal especially to lovers of classic arcade games.

The game can be accessed [here](https://olgaj1989.github.io/seagull/).

![Mockup](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/mockup.png)

## Features

### Existing features

1. Start button
    * When clicked, the button opens a modal with instructions on how to play the game. After getting acquainted with the instructions, the user can close the modal and start the game as per the instructions (by pressing spacebar on a computer or the Jump button on a touchscreen device). 
2. Restart button
    * When a user hits an obstacle and looses the game, they can press the Restart button to refresh the page and be able to start the game from the beginning. 
3. Score 
    * The score increases by 1 point with every iteration of the game loop which happens faster the longer the player survives. The score is showing increments of 10 to prevent it becoming too distracting. For every obstacle jumped, the user gets 50 points extra added to the score.
4. Seagull (player avatar)
    * The hero of the game is a seagull which the user can control by pressing the spacebar or the Jump button. The sole action of the seagull is a jump.
5. Obstacle
    * There are two obstacles that the seagull needs to jump over: a deck chair and a beach hut. The obstacles appear at random intervals, making it harder for the user to predict their next move, especially with the speed increasing.
6. Game controls: spacebar, Jump button and touch / tap event 
    * Spacebar - main means of controlling the game. When pressed, the seagull jumps in the air, being able to avoid obstacles. 
    * Jump button - introduced to make the game playable on a touchscreen device, such as a mobile phone or tablet. However, it can also be used on a computer as an alternative to spacebar.
    * touch / tap - works solely on a touchscreen device. You can tap anywhere on the page to start the game an make the seagull jump.

    ![Game features](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/game1.PNG)

7. Modal
    * The modal comes up when the Start button is pressed and displays short instructions on how to play the game. Once read, it can be closed by clicking/tapping the red cross.

    ![Modal](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/modal.png) 

8. Game Over warning/message
    * When the seagull finally collides with an obstacle, the game is stopped and the user is greeted with a 'Game Over!' announcement. They can then press the Restart button and start the game again.

    ![Game Over](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/over.PNG)  

9. Header 
    * The sole role of the header in this project is to display the name of the game. There are no clickable elements or navigation as the project consists of only one page.

10. Footer
    * Present solely for semantic markup purposes, the footer contains a short sentence stating that the game was created by me for educational purposes. 

11. Favicon
    * A favicon has been added to make it easier for users to find the Sussex Walks page if multiple tabs are open.

    ![Favicon](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/favicon.PNG)

### Features left to implement

I am considering adding more obstacles to make the game more interesting and varied, possibly placing some of the obstacles in the air.  


## Technologies

* HTML has been used to structure the website.
* CSS has been used to style the website.
* JavaScript was used to create the game and all its interactive elements.    
* [Google Fonts](https://fonts.google.com/) have been used to import Indie Flower and Open Sans fonts. 
* [Colormind](http://colormind.io) was used to determine the color pallette for the website.
* [Hex Color Tool](https://www.hexcolortool.com/) was used to convert Hex to RGBA.
* [Favicon](https://favicon.io/) was used to create the favicon for the website.
* [Techsini](http://techsini.com/multi-mockup/index.php) mockup generator was used to create the mockup image for the readme.md file. 
* [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) were used to inspect elements of the website and test different styles. 
* [GitHub](https://github.com/) has been used to store the code, images, and other contents of the website. 
* [Git Pages](https://pages.github.com/) was used to deploy the website to the web.
* [Git](https://git-scm.com/) was used to track changes made to the project and to commit and push code to the repository.
* [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org) was used to test the website's accessibility.
* [Lighthouse](https://developers.google.com/web/tools/lighthouse#devtools) was used to run an audit of the website. 


## Testing

* Check the responsiveness of the website on different screen sizes across different browsers (Chrome, Firefox, Opera).
    * Test:
        1. Open the website in each of the aforementioned browsers.
        1. Right-click on the screen and choose 'Inspect' ('Inspect element' on Opera).
        1. Grab and drag the responsive window slowly down to 300px and then back again, checking that everything is displayed correctly in each size / breakpoint.
    * Result:
        * All elements are responsive and display correctly in each of the browsers and in each of the window sizes.

* Check that the Start button displays the instructions modal when pressed. 
    * Test:
        1. Open the website in a browser.
        1. Click on the Start button to make sure that it correctly opens up the modal and its content. 
    * Result:
        * The button is working as expected.

* Check that the Restart button works as expected by refreshing the page when clicked.
    * Test:
        1. Open the website in a browser.
        1. Press spacebar to start the game and collide with an obstacle on purpose to trigger a Game Over event.
        1. Press the Restart button to see if it refreshes the page correctly, allowing the user to play again.
    * Result:
        * The page refreshes as expected and the player can play again.

* Check that the seagull jumps when spacebar clicked.
    * Test:
        1. Open the website.
        1. Start the game by pressing spacebar and play for a while to make sure spacebar responds to every click.
    * Result:
        * Spacebar works as intended by launching the seagull into the air every time it is pressed.

* Check that the seagull jumps when Jump button clicked on a computer / laptop.
    * Test:
        1. Open the website.
        1. Start the game by pressing the Jump button and play for a while to make sure the button responds to every click.
    * Result:
        * The Jump button works as intended by launching the seagull into the air every time it is pressed.

* Check that the seagull jumps when Jump button clicked on a touchscreen device.
    * Test:
        1. Open the game on a Samsung S8 smartphone and a Samsung tablet.
        1. Start the game by pressing the Jump button and play for a while to make sure the button responds to every click.
    * Result:
        * The Jump button works as intended on both device types / screen sizes. 

* Check that the seagull jumps when screen tapped (only touchscreen devices).
    * Test:
        1. Open the game on a Samsung S8 smartphone and a Samsung tablet.
        1. Start the game by tapping anywhere on the screen and play for a while to make sure the screen responds to every tap / touch. 
    * Result:
        * The tap/touch event works as intended on both touchsecreen device types / screen sizes. 

* Check that the score increases while the game progresses.
    * Test:
        1. Open the game and press spacebar or Jump button to launch it.
        1. While playing, have an eye on the score counter to make sure it increases accordingly (including extra 50 points being added for each jump over an obstacle).
    * Result:
        * The score increases as expected.
        
* Check that the game speed increases gradually .
    * Test:
        1. Open the game and press spacebar or Jump button to launch it.
        1. Play for as long as possible to see if the speed changes.  
    * Result:
        * Speed increases as expected. 


### Validator testing

* HTML - no errors were found when code was passed through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html) 

![HTML Validation](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/html-validation.PNG)

* CSS - no errors were found when code was passed through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

![CSS Validation](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/css-validation.PNG)

* JavaScript - when running the code through [JShint](jshint.com) linter I received the following error message referring to every single let variable I have: "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).". After doing some research, I have learnt that this has nothing to do with my code being faulty but rather a glitch caused by JShint. I followed advice from [this Stackoverflow post](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const) and copied /*jshint esversion: 6 */ into the linter window to override this. After I did this, no more errors appeared.  

![JS Validation](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/js-validation.PNG)

* Accessibility - no errors were found when code was passed through the [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org) 
    
![Accessibility](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/accessibility.PNG)

### Unfixed bugs

No other bugs found.


## Deployment

Chip Raider was deployed to GitHub Pages by following the below steps:
1. Navigate to the ['seagull' repository](https://github.com/OlgaJ1989/seagull) on GitHub.
1. Navigate to the 'Settings' tab.
1. Navigate to 'Pages' from the menu on the left. 
1. Select 'master' branch in the source drop-down.
1. Click 'Save'.
1. A link to the live deployed page is generated and can be found here: https://olgaj1989.github.io/seagull/

## Credits

### Content 

The written content has been developed and coded by me, Olga Jasinska. 

### Media 

The canvas background photo of Brighton beach has been taken from my private collection.
The PNG seagull image used for the game sprite / player object has been taken from [Pngaaa.com](https://www.pngaaa.com/detail/821664). 
The deck chair PNG has been taken from [Pngaaa.com](https://www.pngaaa.com/detail/2411025).
The beach hut PNG has been taken from [SubPGN.com](https://www.subpng.com/png-ssdmom/download.html)
I do not own rights to any of the above-mentioned content - I have used it solely for educational purposes.

### Code

When creating media queries and the modal, I used tutorials and some base code from [W3Schools](https://www.w3schools.com/css/css3_flexbox.asp) modules on CSS Flexbox and Modal Boxes.  

I have used advice and some base code from [this Stackoverflow post](https://stackoverflow.com/questions/1828613/check-if-a-key-is-down) to work out how to implement the onkeyup / onkeydown events (lines 282-288). 

I have used advice and code from [this TeamTreehouse post](https://teamtreehouse.com/community/any-one-know-how-to-make-a-restart-button) to implement the Restart Game function (lines 305-309).

### Acknowledgements

As usual, I'd like to thank my mentor Daisy McGirr for her guidance throughout this project.