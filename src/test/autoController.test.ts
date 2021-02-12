const { testCommands, controlRover } = require("./autoController");

for (let i = 0; i < testCommands.length; i++) {
	const t = testCommands[i];
	test("Test " + i, () => (
		expect(controlRover(t.test)).toEqual(t.expectedResult)
	));
}