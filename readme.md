# Mars Rover Command

A console application built with Node and TypeScript to simulate controlling a rover on a rectangular grid.

## To Run...

1.	Clone this repository
2.	Run the following commands:
	```
	npm install
	npm start
	```

## Usage

1.	You will first be prompted for the size of the grid by giving the x, y coordinate for its northeastern corner. The southwestern corner is always 0, 0. This input should be two positive integers separated by a space character.
	```
	Mars Rover Command is now online
	Please enter the northeastern boundary: [x y] > 5 5
	```
3. Next, you'll be prompted to input the rover's starting position in the format "x y DIR" where x and y are integers within the bounds of the grid and DIR is one of the characters "N", "E", "S", "W", representing the 4 cardinal directions:
	```
	Enter the rover's starting position: [x y DIR] > 1 2 N
	```
3. Last, enter a string of letters that represent commands for the rover: "L" turns the rover 90 degrees left, "R" turns the rover 90 degrees right, and "M" moves the rover 1 unit forward in the direction it is facing:
	```
	Please enter the commands without spaces. Invalid commands will be ignored: [RMMLM] > LMLMLMLMM
	```
4. The rover will output its position to the console, and you will be asked wheather you wish to control another rover:
	```
	The rover is at 1 3 N
	Would you like to control a new rover? [y/n] > y
	```
5.	If you choose "y", you will be prompted for a new rover starting position. Otherwise, you will be asked wheather you would like to start at a new plateau, which will then start the app over, asking for new boundaries. If you instead type "n" here, the program will exit
	```
	Would you like to move to a new plateau? [y/n] > n
	Mars Rover Command is now offline
	```

## Built With

NodeJS, TypeScript, readline-sync, and Jest. (To run unit tests, enter ```npm run test```)