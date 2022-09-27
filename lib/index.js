const fs = require("fs");
const inquirer = require("inquirer");


inquirer
.prompt([
    //team manager’s name, employee ID, email address, and office number
    //I am presented with a menu with the option to add an engineer or an intern or to finish building my team
  {
    type: "input",
    message: "What is the team managers name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the team managers employee ID?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is the team managers email address?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the team managers office number",
    name: "officeNumber",
  },
  {
    type: "input",
    message: "Would you like to add an engineer/intern or finish building your team?",
    name: "addEngineerOrIntern",
  },
//   enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
  {
    type: "input",
    message: "What is the engineers name?",
    name: "engineerName",
  },
  {
    type: "Input",
    message: "What is the engineers employee ID?",
    name: "engineerId",
  },
  {
    type: "input",
    message: "What is the engineers Github username?",
    name: "engineerGithub",
  },
  {
    type: "input",
    message: "What is the engineers email address?",
    name: "",
  },
//   intern’s name, ID, email, and school, and I am taken back to the menu
  {
    type: "input",
    message: "What is the interns name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is the interns employee ID?",
    name: "interId",
  },
  {
    type: "input",
    message: "What is the interns email address?",
    name: "interEmail",
  },
  {
    type: "input",
    message: "What is the interns school?",
    name: "internSchool",
  },
])
.then((response) => {
  console.log(response);
  let readMeText = (response) => {
    return `
# ${response.title}
    
## Table Of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## License 
${generateBadgeForLicense(response.license)}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
${response.questions2}
[Github](https://github.com/${response.questions})
    
    `;
  };

  fs.writeFile("ReadMe.md", readMeText(response), (error) =>
    error ? console.log(error) : console.log("Congrats! You made a readMe!")
  );
});