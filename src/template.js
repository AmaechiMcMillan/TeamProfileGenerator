const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const rosterPage = require("../lib/TeamProfile");

const teamPage = (rosterData) => {
  // const { managerName, managerId, managerEmail, managerOfficeNumber } =
  //   rosterData;
  // const newManager = new Manager(
  //   managerName,
  //   managerId,
  //   managerEmail,
  //   managerOfficeNumber
  // );
  // for (let index = 0; index < array.length; index++) {

  // }
  return `
    <!DOCTYPE html>
  <html lang=en>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Roster</title>
    <script src="https://kit.fontawesome.com/5bae9e23d6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>My Team</h1>
    <div class="card-container">
      <div class="card">
        <div class="card-title">
          <h3>${rosterData[0].getName()}</h3>
          <h3><i class="fa-solid fa-person"></i>${rosterData[0].getRole()}</h3>
        </div>
        <div class="attribute">Office number: <a href="tel:${rosterData[0].getOfficeNumber()}">${rosterData[0].getOfficeNumber()}</a></div>
      </div>
      
      
      ${rosterData.forEach(function (classes) {
        if (classes.getRole() === "Engineer") {
          return `
            <div class="card-container">
      <div class="card">
        <div class="card-title">
          <h3>${rosterData[0].getName()}</h3>
          <h3><i class="fa-solid fa-person"></i>${classes.getRole()}</h3>
        </div>
        <div class="attribute">Office number: <a href="tel:${classes.getGithub()}">${classes.getGithub()}</a></div>
      </div>`;
        } else if (classes.getRole() === "Intern") {
          return `<div class="card">
          <div class="card-title">
            <h3>${classes.getName()}</h3>
            <h3><i class="fa-brands fa-dev"></i>${classes.getRole()}</h3>
          </div>
          <div class="attribute">ID: ${classes.getId()}</div>
          <div class="attribute">Email: <a href="mailTo:${classes.getEmail()}">${classes.getEmail()}</a></div>
          <div class="attribute">GitHub account: <a href="https://github.com/${classes.getSchool()}" target="_blank">${classes.getSchool()}</a></div>
          </div>`;
        }
      })}
    </div>
    </body>
    </html>`;
};

module.exports = teamPage;
