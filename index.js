const inquirer = require("inquirer");
const { db } = require("./lib/answers");


function runPrompts() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "optionsList",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
        ],
      }
    ]).then(({ optionsList }) => {
      switch (optionsList) {
        case "View All Departments":
          // const department = new Department();
          db.findAllDepartments(runPrompts);
          break;
        case "View All Roles":
          db.findAllRoles(runPrompts);
          break;
        case "View All Employees":
          db.findAllEmployees(runPrompts);
          break;
        case "Add Department":
          db.makeNewDepartment(runPrompts);
          break;
        case "Add Role":
          db.makeNewRole(runPrompts);
          break;
        case "Add Employee":
          db.makeNewEmployee()
          break;
        case "Update Employee":
          db.updateEmployee();
          break;
        default:
      }
    });
}

runPrompts();
