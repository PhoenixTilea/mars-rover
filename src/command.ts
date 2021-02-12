import rl from "readline-sync";
import { Direction, Point, PointWithHead, Command } from "./obj/types";

/* Prompts the user for the northeastern corner of the plateau
* in the format "x y" (e.g. "5 5")
* Will continue to prompt the user for bounds if they do not enter two numbers separated by a space character
* Returns a point: {x: number, y: number}
*/
function getBounds() : Point {
	let bounds: Point;
	while (true) {
		const boundsStr = rl.question("Please enter the northeastern boundary: [x y] ");
		const coors = boundsStr.split(" ");
		let x = parseInt(coors[0]);
		let y = parseInt(coors[1]);
		if (Number.isNaN(x) || Number.isNaN(y)) {
			console.log("Invalid coordinates. Please try again.");
			continue;
		}
		bounds = {x, y};
		break;
	}
	return bounds;
}

/* Prompts the user for the rover's start position
* in the format "x y DIR" (e.g. "1 2 N")
* Will continue to prompt the user for the position if they do not enter two numbers separated by a space,
* followed by another space and one of the 4 letters "N, E, S, W" (case insensitive)
* Returns a PointWithHead: {x: number, y: number, facing: "N"|"E"|"S"|"W"}
*/
function getRoverStart(neBoundary: Point) : PointWithHead {
	let start: PointWithHead;
	while (true) {
		const startStr = rl.question("Enter the rover's starting position: (x y dir): ");
		const coors = startStr.split(" ");
		let x = parseInt(coors[0]);
		let y = parseInt(coors[1]);
		let f = coors[2];
		let valid = true;
		if (Number.isNaN(x) || x < 0 || x > neBoundary.x) {
			valid = false;
		} else if (Number.isNaN(y) || y < 0 || y > neBoundary.y) {
			valid = false;
		} else if (typeof f !== "string") {
			valid = false;
		} else {
			f = f.toUpperCase();
			if (!/^[NESW]$/.test(f)) {
				valid = false;
			}
		}
		if (valid) {
			let facing: Direction = Direction[(f as "N"|"E"|"S"|"W")];
			start = { x, y, facing };
			break;
		}
		console.log("Sorry, that entry was invalid. Please try again.");
	}
	return start;
}

/* Prompts the user for a string of commands consisting of the letters "L", "R", and "M" (case insensitive)
* Strips out all non-command characters
* Returns an array of those command characters in uppercase
*/
function getCommands() : Command[] {
	let commandStr = rl.question("Please enter the commands without spaces. Invalid commands will be ignored: [RMMLM] ");
	commandStr = commandStr.toUpperCase().replace(/[^LMR]/g, "");
	return (commandStr.split("") as Command[]);
}

export { getBounds, getCommands, getRoverStart };