# MySQL + Node.js Company/Employee Tracker [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This is a Node.js-driven CLI application built as a project for my fullstack coding bootcamp. It allows the user to create, view, and update company departments, employees, or roles within the company. It mainly utilizes mySQL connections to draw from and write to a database of information about the company via the Node.js CLI. It is not deployed but the functionality can be viewed by watching the video linked below!

## Table of Contents

[User Story & Acceptance Criteria](#user-story-acceptance-criteria) 

[Installing/Dependencies](#installingdependencies)  

[Usage Information](#usage-information)

[Walkthrough](#walkthrough)  

[Contributing to this project](#contributing-to-this-project)  

[Questions?](#questions)  

[License](#license)

## User Story & Acceptance Criteria
#### User Story
I was given the following user story to guide my development:

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

#### Acceptance Criteria
As a part of this project, I was also provided with the following minimum requirements for my project:

- The command-line application should allow users to:

    -> Add departments, roles, employees

    -> View departments, roles, employees

    -> Update employee roles


## Installing/Dependencies
```npm i inquirer```
```npm i mySQL```

## Usage Information
Clone this project, install the required dependencies, and run 'node server.js' in your terminal.

## Walkthrough

### How It's Working

The main function of this application comes from the server.js file. It first establishes a connection with a mySQL database. This database has been created, along with its tables, from the schema.sql file included in the repository, with the initial data being fed to it from the seeds.sql file. Once the connection has been established to this database via our CLI, the application allows users to choose between updating, viewing, or adding employees, roles, or departments within your company. I hope to expand the functionality of this app in the future to include more options including deleting, viewing join tables, and more!

The app uses mainly await/async promises which contain connection queries. These queries are triggered through a series of if/else statements determined by the answers of the user via the inquirer prompts from the main menu. These if/else statements then determine the who/what of the action that needs to be completed, calls to the database for information, asks the user further information if needed, and then either adds, updates, or lists the query of information the user has requested.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing to this project
Pull requests are welcome! Find my contact information below to reach out about collaborating with me.

## Questions?
[Laura Baumann](https://github.com/thelbaumann) -- You can reach me anytime for questions or collaboration at l.bmann@yahoo.com.
## License
This project is licensed under [MIT](LICENSE) - 2020 Laura Baumann
