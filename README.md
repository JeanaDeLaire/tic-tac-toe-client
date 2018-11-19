# Tic-Tac-Toe by a Web Development Immersive Student

Live Game: https://jeanadelaire.github.io/tic-tac-toe-client/

Welcome to my web app verson of tic-tac-toe! Did you know variations of this game have been played for centuries across many cultures? Its catchy name is alleged to originate from some roman game involving moving a few stones across a 3 x 3 game board. Anyways! Let's stop thinking about what life was like before computers and talk more about the code behind this particular game.

This entire game consists of HTML5, CSS, as well as Javascript and Jquery. I utilized a css grid to create its responsive gameboard in HTML and CSS. Responsiveness was a consideration from the beginning, and media queries are used to ensure that users can have an engaging and bug-free experience across different platforms and screen sizes. The header image is a bootstrap hero image with a custom background png. Jquery and vanilla javascript make the game interactive with event listeners awaiting click alerts from the gameboard spaces as well as the buttons. The game logic is created through javascript and a 2D array for data organization is present.

There are numerous api requests including POST, PATCH, GET, and DELETE. For the user, this results in authentication steps including sign up, sign in, change password, and logout. Users also send a post request when they create a new game, a PATCH request when they update their game upon each move, and a GET request through viewing the history of the gameboard. I have the small gameboards (shown by clicking on get history) created by mapping all completed games into a new array and sending each index into a game cell making up the grid. 

The planning process for this project commenced with considering ways to make an online presentation of Tic-Tac-Toe still be an interactive game in digital form. I reviewed css grids as well as considered ways to make the appearance creative and engaging while clearly representing the game. Considering the user experience helped prioritize scope and features for deadline. 

### User stories include:
- Users should create accounts to save data.
- Users should be able to update passwords for security and convenience.
- Users should be able to interact with the gameboard.
- Users should clearly know if x, or o is up next through updating the server and presenting this information upon each move.
- Users should be able to retrieve their game history.
- Users should be informed of successful and failed api requests through either a visual representation (form hides), or a message in an obvious field (under the form they are filling out).

Original wireframes:
![Tic-Tac-Toe Wireframe](![tic-tac-toe wireframe](https://user-images.githubusercontent.com/41646757/47681811-d9324200-dba0-11e8-8669-5dbf83666160.jpg)

### Future Versions
I'd like to go back and eventually make each unique player token have a corresponding sound with a mute option. 

This project was created for the PVD 4 Cohort project for the Web Development Immersive
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
