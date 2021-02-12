type Command = "L"|"R"|"M";

enum Direction {
	N = 0,
	E,
	S,
	W,
};

interface Point {
	x: number;
	y: number;
}
interface PointWithHead extends Point {
	facing: Direction;
}

export { Direction, Command, Point, PointWithHead };