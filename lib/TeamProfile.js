const htmlPage = function (teamMembers) {
  return;

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
    ${teamMembers}
  </div>
</div>
</body>
</html>


`;
};

//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`

// let cards = `
// <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>

function appendManager(manager) {
  return `
    <div class="jumbotron jumbotron-fluid">
   <div class="container">
     <h1 class="display-4">Hi! My name is ${manager.name}</h1>
    <p class="lead">I am from ${manager.officeNumber}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${manager.email}</li>
      <li class="list-group-item">LinkedIn: ${manager.ID}</li>
    </ul>
  </div>`;
}

function appendEngineer(engineer) {
  return `
      <div class="jumbotron jumbotron-fluid">
     <div class="container">
       <h1 class="display-4">Hi! My name is ${engineer.name}</h1>
      <p class="lead">I am from ${engineer.github}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${engineer.email}</li>
        <li class="list-group-item">LinkedIn: ${engineer.ID}</li>
      </ul>
    </div>`;
}

function appendIntern(intern) {
  return `
      <div class="jumbotron jumbotron-fluid">
     <div class="container">
       <h1 class="display-4">Hi! My name is ${intern.name}</h1>
      <p class="lead">I am from ${intern.school}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${intern.email}</li>
        <li class="list-group-item">LinkedIn: ${intern.ID}</li>
      </ul>
    </div>`;
}

function rosterPage(roster) {
  const rosterCard = [];
  for (let i = 0; i < roster.length; i++) {
    const role = roster[i].getRole();
    const member = roster[i];
    if (role === "Manager") rosterCard.push(appendManager(member));
    else if (role === "Engineer") rosterCard.push(appendEngineer(member));
    else if (role === "Intern") rosterCard.push(appendIntern(member));
  }
  return htmlPage(rosterCard.join(""));
}
module.exports = rosterPage;
