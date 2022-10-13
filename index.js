const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const rosterPage = require("./lib/TeamProfile");

let roster = [];
const askForInfo = () => {
  return inquirer
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

      //   enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    ])
    .then((managerData) => {
      console.log(managerData);
      const manager = new Manager(
        managerData.managerName,
        managerData.managerId,
        managerData.managerEmail,
        managerData.officeNumber
      );
      roster.push(manager);

      // let boat = new Engineer
      // // making a new object from the lib classes
      //   // some kind of conditional that checks to see what role the employee you just added was
      //   if (response.role === "engineer")
      //   {
      //     //making an employee
      //     let employee = new Engineer(response.employeeName, response.employeeEmail, param3, param4)
      //     roster.push(employee)
      //   }
      //   if (response.role === "manager")
      //   {
      //     let employee = new Manager(response.employeeName, response.employeeEmail, )
      //   } else {
      //     let intern = new Intern
      //   }
      // if (response.addingAnother === "yes") {
      //   askForInfo();
      // } else {
      //   console.log("done adding");
      // }
    });
};
const menu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message:
          "Would you like to add an engineer/intern or finish building your team?",
        name: "employee",
        choices: ["Engineer", "Intern", "Finish Team"],
      },
      {
        type: "input",
        message: "Please enter employees name:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter employees ID:",
        name: "ID",
      },
      {
        type: "input",
        message: "Enter employees email:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter engineers Github username:",
        name: "github",
        when: ({ employee }) => {
          if (employee === "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter interns school name:",
        name: "school",
        when: ({ employee }) => {
          if (employee === "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "list",
        message: "Would you like to add another employee?",
        name: "addEmployee",
        choices: ["Yes", "No"],
      },
    ])
    .then((menuData) => {
      if (menuData.employee === "Engineer") {
        const newEmployee = new Engineer(
          menuData.name,
          menuData.ID,
          menuData.email,
          menuData.github
        );
        roster.push(newEmployee);
      } else if (menuData.employee === "Intern") {
        const newEmployee = new Intern(
          menuData.name,
          menuData.ID,
          menuData.email,
          menuData.school
        );
        roster.push(newEmployee);
      }
      if (menuData.addEmployee === "Yes") return menu();
      else if (menuData.addEmployee === "No") return roster;

      const writeFile = (data) => {
        console.log(data);
        fs.writeFile("./lib/TeamProfile.html", data, (error) =>
          error ? console.log(error) : console.log("You created your team")
        );
      };
      const addEngineer = (objectData) => {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "engineerName",
              message: "What is your engineers name?",
            },
            {
              type: "input",
              name: "engineerId",
              message: "What is your engineers ID?",
              validate: (engineerId) => {
                engineerId = parseInt(engineerId);
                if (Number.isInteger(engineerId)) {
                  return true;
                } else {
                  console.log("Enter a valid number.");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "Enter your email",
            },
            {
              type: "input",
              name: "engineerGithub",
              message: "Enter your Github",
            },
          ])
          .then((engineerData) => {
            const { engineerName, engineerId, engineerEmail, engineerGithub } =
              engineerData;
            const engineerClass = new Engineer(
              engineerName,
              engineerId,
              engineerEmail,
              engineerGithub
            );
            objectData.roster.push(engineerClass);
            return menu(objectData);
          });
      };

      askForInfo()
        .then(menu)
        .then((roster) => rosterPage(roster))
        .then((pageHTML) => writeFile(pageHTML))
        .then((writeFileResponse) => {
          console.log(writeFileResponse);
        });
    });
};
