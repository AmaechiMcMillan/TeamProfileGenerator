const fs = require("fs");
const inquirer = require("inquirer");

const htmlPage = ({ name, location, github, linkedin }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`



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
    type: "list",
    message: "Would you like to add an engineer/intern or finish building your team?",
    name: "addEngineerOrIntern",
    choices: ["Engineer", "Intern", "Finish Team"],
    when: (response) => {
        if (response.role === 'engineer') return true
        else return false 
    }
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
    name: "engineerEmail",
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
  let htmlPage = (response) => {
    return ;
  };

  fs.writeFile("TeamProfile.html", htmlPage(response), (error) =>
    error ? console.log(error) : console.log("Congrats! You made a readMe!")
  );
});