
const CommandProcessor = require('../src/commands');

describe('CommandProcessor', () => {
  let commandProcessor;

  beforeEach(() => {
    commandProcessor = new CommandProcessor();
  });

  it('should return the correct address when processing commands', () => {
    const commands = [25, 52, 53, 202, 54, 402, 203, 510, 201];
    const address = commandProcessor.processCommands(commands);
    expect(address).toBe(5);
  });
});
