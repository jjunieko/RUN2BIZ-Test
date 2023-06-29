class BaseCommandProcessor {
  processCommands(commands) {
    let address = 0;

    for (let i = 0; i < commands.length; i++) {
      const command = commands[i].toString();
      const commandType = parseInt(command.charAt(0));

      if (this.isIncrementCommand(commandType)) {
        address += this.processIncrementCommand(command.substr(1));
      } else if (this.isJumpCommand(commandType)) {
        const jumpIndex = parseInt(command.substr(1));
        i += this.processJumpCommand(jumpIndex);
      }
    }

    return address;
  }

  isIncrementCommand(commandType) {
    throw new Error('isIncrementCommand method not implemented');
  }

  processIncrementCommand(value) {
    throw new Error('processIncrementCommand method not implemented');
  }

  isJumpCommand(commandType) {
    throw new Error('isJumpCommand method not implemented');
  }

  processJumpCommand(jumpIndex) {
    throw new Error('processJumpCommand method not implemented');
  }
}

class CommandProcessor extends BaseCommandProcessor {
  isIncrementCommand(commandType) {
    return commandType === 2;
  }

  processIncrementCommand(value) {
    return parseInt(value);
  }

  isJumpCommand(commandType) {
    return commandType === 5;
  }

  processJumpCommand(jumpIndex) {
    return jumpIndex;
  }
}

module.exports = CommandProcessor;
