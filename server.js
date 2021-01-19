const { clear } = require('console');
const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localHost',

  port: 3306,

  user: 'root',

  password: 'root',

  database: 'company'
});

connection.connect((err) => {

  if (err) console.log(err);

  console.log('connected as id ' + connection.threadId);

  mainMenu();

    async function mainMenu() {

        try {

            const actionChoice = await inquirer.prompt({
                type: "list",
                message: "What would you like to do?",
                name: "action",
                choices: ["Add departments, roles, or employees", "View departments, roles, or employees", "Update employee roles"]
            });

            let action = actionChoice.action;

            console.log(action);
        
            getSubject(action);


        } catch(err) {

            console.log(err);

        }

    };


async function getSubject(action) {

    if (action == "Add departments, roles, or employees") {
        
        const add = await inquirer.prompt([
            {
                type: "list",
                message: "What would you like to add?",
                name: "add",
                choices: ["Department", "Role", "Employee"]
            }
        ]);

        if (add.add == "Departments") {
            Departments("add");
        }
        else if (add.add == "Roles") {
            Roles("add");
        }
        else if (add.add == "Employees") {
            Employees("add");
        }
        
    }

    else if (action == "View departments, roles, or employees") {

        const view = await inquirer.prompt([
            {
                type: "list",
                message: "What would you like to view?",
                name: "view",
                choices: ["Departments", "Roles", "Employees"]
            }
        ]);

        if (view.view == "Departments") {
            Departments("view");
        }
        else if (view.view == "Roles") {
            Roles("view");
        }
        else if (view.view == "Employees") {
            Employees("view");
        }
        
    }

    else if (action == "Update employee roles") {

        console.log("updating employees");

        Employees("update");
        
    }

    else {

        console.log("something went wrong! your connection will end now. please try restarting the program!");
        connection.end();
        
    }


}

function Departments(action) {

    if (action == "view") {

        connection.query("SELECT * FROM departments", function(err, res) {
            if (err) throw err;
            console.table(res);
            returnEnd();
        });
        
    }

    else if (action == "add") {

        console.log("You are adding departments!");
        
    }

}

function Roles(action) {

    if (action == "view") {

        connection.query("SELECT * FROM roles", function(err, res) {
            if (err) throw err;
            console.table(res);
            returnEnd();
        });
        
    }

    else if (action == "add") {

        console.log("You are adding Roles!");
        
    }
    
}

function Employees(action) {

    if (action == "view") {

        connection.query("SELECT * FROM employees", function(err, res) {
            if (err) throw err;
            console.table(res);
            returnEnd();
        });
        
    }

    else if (action == "add") {

        console.log("You are adding Employees!");
        
    }

    else if (action == "update") {

        console.log("You are updating Employees!");

    }
    
}

function returnEnd() {

    inquirer.prompt({
        type: "input",
        message: "Return to main menu? Y/N",
        name: "mainMenu"
    }).then((response) => {

        let answer = response.mainMenu;

        answer = answer.toString().toLowerCase();

        if (answer == "y" || answer == "yes") {
            mainMenu();
        }
        else {
            console.log("Thanks for using the program!");
            connection.end();
        }

    });

}

});