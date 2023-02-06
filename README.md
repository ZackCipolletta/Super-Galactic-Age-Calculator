# Super Solar Age Calculator

#### A website showcasing JavaScript classes, arrays and loops and utilizing user input.

#### By Zachary Cipolletta

## Technologies Used

* CSS
* HTML
* JavaScript
* Node.js
* Jest
* Webpack
* npm
* ESLint

## Description
This website uses JS classes to perform math calculation using user input inorder to convert a persons age (present, past and future) then converting that into the equivalent age on other planets.  While 10 years may have passed on earth, how many revolutions around the sun has Mercury or Mars made?

I tried to reuse the methods I created earlier in the program to perform the calculations for later functionality instead of performing the same math again.  While it would have been quicker to simply find the difference between a user's current and younger age then use the same mathematical formula over and over to find the equivalent number of years on another planet, I tried to reuse as much code as possible instead of repeating myself.

I attempted to do the same with the UI, but ran into an issue with calling the methods to find the number of years since a persons younger age and future age.  The quick solution was to put all formulas into an array, but it is not an elegant or clean solution.


## Setup/Installation Requirements

* Clone repository to your desktop
* Navigate to the top level of the directory
* Install all packages with $ npm install.
* Build the project using webpack with $ npm run build
* If you wish to lint JS files in the src folder, run $ npm run lint
* All business logic should be tested and pass Jest using $ npm run test
* Start a development server with $ npm run start

## Known Bugs

* background image will nto display in live server.
* ugly solution for UI to call muliptle methods from an array.

## License
MIT

Copyright (c) 2/5/2023 Zachary Cipolletta