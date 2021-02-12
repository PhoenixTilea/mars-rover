import rl from "readline-sync";
import Controller from "./obj/Controller";
import Rover from "./obj/Rover";
import { getBounds, getRoverStart, getCommands } from "./command";
import { Direction } from "./obj/types";
import type { Command, Point, PointWithHead } from "./obj/types";

/* Gets the bounds from the user then allows the control of multiple rovers
* Takes a rover start position and command string for a rover then ouputs its position
* Prompts the user to control another rover or exit the loop
*/
function control() {
	const bounds: Point = getBounds();
	const controller = new Controller(bounds);
	
	let quit = false;
	do {
		const roverStart: PointWithHead = getRoverStart(bounds);
		controller.assignRover(new Rover(roverStart));
		const commands: Command[] = getCommands();
		commands.forEach(c => controller.sendCommand(c));
		const { x, y, facing } = controller.getRoverPosition();
		console.log(`The rover is at ${x} ${y} ${Direction[facing]}`);
		quit = rl.keyInYN("Would you like to control a new rover? ") !== true;
	} while (!quit);
}

/* Initiates the program
* If the user exits the loop to control rovers, prompts them to exit the application or start a new plateau, thus entering new bounds
*/
function main() {
	console.log("Mars Rover Command is now online");
	let quit = false;
	do {
		control();
		quit = rl.keyInYN("Would you like to move to a new plateau? ") !== true;
	} while (!quit);
	console.log("Mars Rover Command is now offline.");
}

main();