## Validation Project

### Installation
Clone the repository or download the project files.
Navigate to the project directory.

### Backend
Running the Backend
Install the required dependencies by running the following command:

```npm install```
Start the backend server by running the following command:


```node .src/app.js``` 

The server will start running on http://localhost:3000.

return:
http://localhost:3000/passwords
http://localhost:3000/commands


#### Running the Backend Tests
Run the unit tests for the backend by executing the following command:

#### I added a wrong test to see how it works if the back end data comes wrong

paste /backend

``` npx jest passwordUtils.test.js ```
```npx jest commandProcessor.test.js```
The test results will be displayed in the console.

front test :  ```npx jest front_commands.test.js  &&  npx jest front_password.test.js```

### Frontend
Running the Frontend
Open the index.html file in your preferred web browser.
The frontend will fetch data from the backend API and display the password statistics.
Contributing
Contributions to this project are welcome. If you find any issues or would like to suggest improvements, please open an issue or submit a pull request.
