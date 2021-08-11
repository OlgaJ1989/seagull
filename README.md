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
6. Game controls: Jump button and spacebar
    * Spacebar - main means of controlling the game. When pressed, the seagull jumps in the air, being able to avoid obstacles. 
    * Jump button - introduced to make the game playable on a touchscreen device, such as a mobile phone or tablet. However, it can also be used on a computer as an alternative to spacebar.

    ![Game features](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/game1.PNG)

7. Modal
    * The modal comes up when the Start button is pressed and displays short instructions on how to play the game. Once read, it can be closed by clicking/tapping the red cross.

    ![Modal](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/modal.png) 

8. Game Over warning/message
    * When the seagull finally collides with an obstacle, the game is stopped and the user is greated with a 'Game Over!' announcement. They can then press the Restart button and start the game again.

    ![Game Over](https://raw.githubusercontent.com/OlgaJ1989/seagull/main/docs/over.PNG)  

9. Header 
    * The sole role of the header in this project is to display the name of the game. There are no clickable elements or navigation as the project consists of only one page.

10. Footer
    * Present solely for semantic markup purposes, the footer contains a short sentence stating that the game was created by me for educational purposes. 

### Features left to implement

I am considering adding more obstacles to make the game more interesting and varied, possibly placing some of the obstacles in the air.  

## Technologies

* HTML has been used to structure the website.
* CSS has been used to style the website.
* [Font Awesome](https://fontawesome.com/) icons have been used on the Walking Tips page and for social media links in the Footer.    
* [Google Fonts](https://fonts.google.com/) have been used to import Amatic SC and Josefin Slab fonts. 
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

* Check that the links in the navigation bar navigate to correct pages. 
    * Test:
        1. Open the website in a browser.
        1. Click on all navigation items (Home, Walking Tips, Gallery, Contact Us) one by one to make sure the attached links are correct and that they lead the user to the correct parts of the website.
    * Result:
        * All links working and directing user to the correct pages.

* Check that the links to social media pages in the Footer work and open in new tabs.
    * Test:
        1. Open the website in a browser.
        1. Click on all social media links (Facebook, Twitter, YouTube, Instagram) one by one to make sure that the links are in working order and that they all open in a separate tab.
    * Result:
        * All links are working and all of them open in separate / new tabs.

* Check that the name of the page user is currently on is highlighted (underlined) in the navigation bar.
    * Test:
        1. Open the website.
        1. Open each of the pages in the navigation bar to see whether the active page is underlined in the menu.
    * Result:
        * Each of the navigation bar elements becomes underlined when the page is active.
    
* Check that each of the navigation bar elements displays as underlined when hovered over.
    * Test:
        1. Open the website.
        1. Hover over each of the navigation bar elements with the cursor to make sure that they display and underline when hovered over. 
    * Result:
        * Each element becomes udenrlined when hovered over with a mouse cursor.
                
* Check validation of the Contact Us form.
    * Test:
        1. Open the website in a browser and navigate to the Contact Us page.
        1. Fill in the form leaving different input areas empty each time to make sure there is a warning message displayed each time you leave any of the fields empty. 
    * Result: 
        * The form cannot be submitted until each of the input fields has been filled in correctly so the validation is working.

### Validator testing

* HTML - when the code was passed through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html) I have received the following error notification: "Element h3 not allowed as child of element label in this context." referring to all input labels in the Contact Us form. To fix this, I have changed all h3 elements to span elements as per the advice found in [this Stackoverflow post](https://stackoverflow.com/questions/50068995/element-h3-not-allowed-as-child-of-element-label-in-this-context-html). No further errors have been found after I applied this fix and passed the code through the validator again.
* CSS - no errors were found when code was passed through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)
* Accessibility - when using the [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org) to test the site's accessibility, I received 2 errors:
    * There was not enough contrast between the background and font of the 'Submit' button in the Contact Us form. I have corrected this by changing the background color #559e79 to #32644b. No further errors have been found after I applied this fix and passed the site through the validator again.
    * Two of the aria-labels in the Gallery page were identical. I have corrected this by changing the name of one of them. No further errors have been found after I applied thise fix and passed the site through the validator again.

### Unfixed bugs

No other bugs found.

## Deployment

Sussex Walks was deployed to GitHub Pages by following the below steps:
1. Navigate to the ['sussex-walks' repository](https://github.com/OlgaJ1989/sussex-walks) on GitHub.
1. Navigate to the 'Settings' tab.
1. Navigate to 'Pages' from the menu on the left. 
1. Select 'master' branch in the source drop-down.
1. Click 'Save'.
1. A link to the live deployed page is generated and can be found here: https://olgaj1989.github.io/sussex-walks/

## Credits

### Content 

The written content has been developed by me, Olga Jasinska, using my past experience of walking in and around of Brighton. 

### Media 

All photos have been taken from my private collection or provided by my partner Ben Butler with his permission. 

### Code

When creating flexbox and media queries I used tutorials and some base code from [W3Schools](https://www.w3schools.com/css/css3_flexbox.asp) modules on CSS Flexbox and CSS Flex Responsive.  

### Acknowledgements

I'd like to thank my mentor Daisy McGirr for her guidance throughout this project.