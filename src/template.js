const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const rosterPage = require("../lib/TeamProfile");

const teamPage = (rosterData) => {
  let rosterCards = "";
  rosterData.forEach(function (classes) {
    if (classes.getRole() === "Manager") {
      rosterCards += `
            <div class="card-container">
      <div class="card">
        <div class="card-title">
          <h3>${classes.getName()}</h3>
          <h3><i class="fa-solid fa-person"></i>${classes.getRole()}</h3>
        </div>
        <div class="attribute">Office number: <a href="tel:${classes.getOfficeNumber()}">${classes.getOfficeNumber()}</a></div>
      </div>`;
    } else if (classes.getRole() === "Engineer") {
      rosterCards += `
            <div class="card-container">
      <div class="card">
        <div class="card-title">
          <h3>${classes.getName()}</h3>
          <h3><i class="fa-solid fa-person"></i>${classes.getRole()}</h3>
        </div>
        <div class="attribute">Email: <a href="mailTo:${classes.getEmail()}">${classes.getEmail()}</a></div>
        <div class="attribute">Github: <a href="tel:${classes.getGithub()}">${classes.getGithub()}</a></div>
      </div>`;
    } else if (classes.getRole() === "Intern") {
      rosterCards += `<div class="card">
          <div class="card-title">
            <h3>${classes.getName()}</h3>
            <h3><i class="fa-brands fa-dev"></i>${classes.getRole()}</h3>
          </div>
          <div class="attribute">ID: ${classes.getId()}</div>
          <div class="attribute">Email: <a href="mailTo:${classes.getEmail()}">${classes.getEmail()}</a></div>
          <div class="attribute">School: <a href="https://github.com/${classes.getSchool()}" target="_blank">${classes.getSchool()}</a></div>
          </div>`;
    }
  });

  return `
        <!DOCTYPE html>
      <html lang=en>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Roster</title>
        <script src="https://kit.fontawesome.com/5bae9e23d6.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" />
        
      </head>
      <body>
        <h1>My Team</h1>
        <div class="card-container">
          <div class="card">
            ${rosterCards}
          </div>
    </div>
    </body>
    </html>`;
};

module.exports = teamPage;
