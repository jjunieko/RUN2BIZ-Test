const express = require('express');
const { countValidPasswordsPart1, countValidPasswordsPart2 } = require('./passwordUtils');
const  CommandProcessor  = require('./commands');

const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/passwords', (req, res) => {
  const min = 184759;
  const max = 856920;

  const validPasswordsCountPart1 = countValidPasswordsPart1(min, max);
  const validPasswordsCountPart2 = countValidPasswordsPart2(min, max);

  res.json({ validPasswordsCountPart1, validPasswordsCountPart2 });
});

app.get('/commands', (req, res) => {
  const commands = [25, 52, 53, 202, 54, 402, 203, 510, 201];

  // Create an instance of the CommandProcessor
  const commandProcessor = new CommandProcessor();

  // Process the commands and get the address
  const address = commandProcessor.processCommands(commands);

  res.json({ address });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
