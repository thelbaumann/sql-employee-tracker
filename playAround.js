const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

  password: 'root',

  database: 'company',
});

connection.connect((err) => {

  if (err) console.log(err);

  console.log('connected as id ' + connection.threadId);

  mainMenu();
});


async function mainMenu() {

    const action = await function() {

        inquirer.prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "action",
                choices: ["Add departments, roles, or employees", "View departments, roles, or employees", "Update employee roles"]
            }
        ]);

        console.log(action);
    };


    const action = await function(action) {
    
        if (action == "Add departments, roles, or employees") {

            const add = await function() {

                inquirer.prompt([
                    {
                        type: "list",
                        message: "What would you like to add?",
                        name: "add",
                        choices: ["Department", "Role", "Employee"]
                    }
                ]);
            };

            if (add == "Departments") {
                Departments(add);
            }
            else if (add == "Roles") {
                Roles(add);
            }
            else if (add == "Employees") {
                Employees(add);
            }
            
        }

        else if (action == "View departments, roles, or employees") {

            const view = await function() {

                inquirer.prompt([
                    {
                        type: "list",
                        message: "What would you like to view?",
                        name: "view",
                        choices: ["Departments", "Roles", "Employees"]
                    }
                ]);
            };

            if (view == "Departments") {
                Departments(view);
            }
            else if (view == "Roles") {
                Roles(view);
            }
            else if (view == "Employees") {
                Employees(view);
            }
            
        }

        else if (action == "Update employee roles") {

            Employees(update);
            
        }

        else {

            console.log("something went wrong! your connection will end now. please try restarting the program!");
            connection.end();
            
        }

    }


};

async function Departments(action) {
    if (action == "view") {
        
        console.log("You are viewing departments!");
        
    }

    else if (action == "add") {

        console.log("You are adding departments!");
        
    }

}

async function Roles(action) {

    if (action == "view") {

        console.log("You are viewing Roles!");
        
    }

    else if (action == "add") {

        console.log("You are adding Roles!");
        
    }
    
}

async function Employees(action) {

    if (action == "view") {

        console.log("You are viewing Employees!");
        
    }

    else if (action == "add") {

        console.log("You are adding Employees!");
        
    }

    else if (action == "update") {

        console.log("You are updating Employees!");

    }
    
}