const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      name: 'name1',
      message: "What is your name?",
      type: "input"
    },
  ])
  .then(function (answer) {
    console.log(`Hello ${answer.name1}!`);
  });
    
/*
Part 2. Promises Playground
Tasks 5 - 12

To get used to using promises in a variety of scenarios, the second part of the sprints consists of some challenges based around using other popular promise-based libraries.

This section does not contain any tests, so you should use Node to run your code for each challenge, e.g.

node ./challenges/5-greet.js
Auto-greeter
Use inquirer to ask for a name and log a greeting.

You will need to install the inquirer npm package (npm install inquirer@8.0.0).

Note: You will need install version 8!

Once installed, require inquirer into the 5-greet.js file.

Use inquirer to ask for your name when you run the file with node, and then log "Hello <name>!" to the console.
*/