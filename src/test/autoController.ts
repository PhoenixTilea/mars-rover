import Controller from "../obj/Controller";
import Rover from "../obj/Rover";
import { Direction } from "../obj/types";
import type { Point, PointWithHead, Command } from "../obj/types";

interface RoverTest {
	bounds: Point;
	roverStart: PointWithHead;
	commands: Command[];
}
interface TestAndResult {
	test: RoverTest;
	expectedResult: PointWithHead;
}

const testCommands: TestAndResult[] = [
	{
		test: {
			bounds: {x: 5, y: 5},
			roverStart: {x: 1, y: 2, facing: Direction.N},
			commands: ("LMLMLMLMM".split("") as Command[])
		},
		expectedResult: {x: 1, y: 3, facing: Direction.N}
	},
	{
		test: {
			bounds: {x: 5, y: 5},
			roverStart: {x: 3, y: 3, facing: Direction.E},
			commands: ("MMRMMRMRRM".split("") as Command[])
		},
		expectedResult: {x: 5, y: 1, facing: Direction.E}
	},
	{
		test: {
			bounds: {x: 3, y: 3},
			roverStart: {x: 0, y: 0, facing: Direction.W},
			commands: ("MMRMMRMMLMM".split("") as Command[])
		},
		expectedResult: {x: 2, y: 3, facing: Direction.N}
	}
];

function controlRover(test: RoverTest) : PointWithHead {
	const controller = new Controller(test.bounds);
	controller.assignRover(new Rover(test.roverStart));
	test.commands.forEach(c => controller.sendCommand(c));
	return controller.getRoverPosition();
}

export { testCommands, controlRover };