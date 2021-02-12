import { Direction } from "./types";
import { assert } from "../util";
import Rover from "./Rover";
import type { Command, Point, PointWithHead } from "./types";

/* Used to accept and pass on commands to its assigned Rover */
class Controller {
	private _rover: Rover|undefined;
	private _boundary: Point;
	
	/* Accepts the bounds of the plateau for this controller */
	constructor(boundary: Point) {
	this._boundary = boundary;
	}
	
	/* Assigns or replaces the assignment of a Rover to this controller */
	assignRover(rover: Rover) {
		this._rover = rover;
	}
	
	/* Returns the current position of this controller's assigned rover 
	* throws an acception if no rover has been assigned
	*/
	getRoverPosition() : PointWithHead {
		assert(this._rover instanceof Rover);
		return this._rover.position;
	}
	
	/* Checks the provided command and controls the rover appropriately 
	* throws an exception if no rover has been assigned
	*/
	sendCommand(c: Command) {
		assert(this._rover instanceof Rover);
		
		switch (c) {
			case "L":
				this._rover.turnLeft();
			break;
			case "R":
				this._rover.turnRight();
			break;
			case "M":
				if (this._canMoveRover()) {
					this._rover.move();
				}
			break;
		}
	}
	
	/* Checks whether the assigned rover can move, i.e. is not at the boundary of the plateau
	* Returns a true if the rover can move, false otherwise
	* Throws an exception if no rover has been assigned
	*/
	private _canMoveRover() : boolean {
		assert(this._rover instanceof Rover);
		const { x, y, facing } = this._rover.position;
		
		if (facing === Direction.N && y === this._boundary.y) {
			return false;
		} else if (facing === Direction.E && x === this._boundary.x) {
			return false;
		} else if (facing === Direction.S && y === 0) {
			return false;
		} else if (facing === Direction.W && x === 0) {
			return false;
		}
		return true;
	}
}

export default Controller;