window.addEventListener('DOMContentLoaded', () => {
    const executeButton = document.getElementById('execute-button');
    executeButton.addEventListener('click', executeCommands);
  });
  
  function executeCommands() {
    const commandInput = document.getElementById('command-input');
    const commands = commandInput.value.trim().split('\n').map(Number);
  
    const queryParams = new URLSearchParams();
    queryParams.append('commands', JSON.stringify(commands));
  
    // Make a GET request to the backend API
    fetch(`http://localhost:3000/commands?${queryParams}`)
      .then(response => response.json())
      .then(data => {
        const resultElement = document.getElementById('result');
        const userInput = commandInput.value.trim();
        const apiResult = data.address.toString();
  
        if (data.error) {
          resultElement.textContent = `Error: ${data.error}`;
          resultElement.classList.add('error');
        } else {
          resultElement.classList.remove('error');
  
          if (userInput === apiResult) {
            resultElement.textContent = `You are correct! The address is ${apiResult}.`;
          } else {
            resultElement.textContent = `Wrong value! The correct address is ${apiResult}.`;
          }
        }
      })
      .catch(error => {
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'An error occurred while processing the commands.';
        resultElement.classList.add('error');
        console.error(error);
      });
  }
  