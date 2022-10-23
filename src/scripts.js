const generateBody = (content) => {

  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="./stylesheet.css" />
    <title>Team Member Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-6">My Team</h1>
        </div>
      </div>
    <div id="employee">
    ${content}
    </div>
</body>
</html>
  `;
};


const generateIntern = (intern) => {

  return `
   <div class="card" style="width: 18rem;">
   <div class="card-header">
      <p>${intern.getName()}</p>
      <i class="fa fa-user-graduate mr-2"></i>${intern.getRole()}
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">Employee ID: ${intern.getId()}</li>
     <li class="list-group-item">Email Address: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
     <li class="list-group-item">School: ${intern.getSchool()}</li>
   </ul>
   </div>`
};

const generateManager = (manager) => {

  return `
            <div class="card" style="width: 18rem;">
            <div class="card-header">
                    <p>${manager.getName()}</p>
                    <i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID:${manager.getId()} </li>
                    <li class="list-group-item">Email Address: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
    `
};


const generateEngineer = (engineer) => {
  return `
      <div class="card" style="width: 18rem;">
      <div class="card-header">
        <p>${engineer.getName()}</p>
        <i class="fas fa-glasses mr-2"></i>${engineer.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email Address: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">Github Username: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
      </ul>
      </div>
      `;
};

module.exports = { generateEngineer, generateBody, generateIntern, generateManager }