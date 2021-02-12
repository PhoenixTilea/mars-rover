import { Direction } from "./types";
import type { Point, PointWithHead } from "./types";

class Rover {
	private _x: number;
	private _y: number;
	private _facing: Direction;
	
	constructor(pos: PointWithHead) {
		this._x = pos.x;
		this._y = pos.y;
		this._facing = pos.facing;
	}
	
	get position() : PointWithHead {
		return {x: this._x, y: this._y, facing: this._facing };
	}
	
	/* Moves the rover 1 space in the direction it is facing */
	move() {
		switch (this._facing) {
			case Direction.N:
				this._y++;
			break;
			case Direction.E:
				this._x++;
			break;
			case Direction.S:
				this._y--;
			break;
			case Direction.W:
				this._x--;
			break;
		}
	}
	
	turnLeft() {
		this._turn(-1);
	}
	
	turnRight() {
		this._turn(1);
	}
	
	/* Turns the rover 90 degrees
	* dir: -1 to turn left, 1 to turn right
	*/
	private _turn(dir: -1|1) {
		const currDir: number = this._facing;
		let newDir = currDir + dir;
		if (newDir < Direction.N) {
			newDir = Direction.W;
		} else if (newDir > Direction.W) {
			newDir = Direction.N;
		}
		this._facing = newDir;
	}
}

export default Rover;