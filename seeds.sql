USE company;

INSERT INTO departments (name)
VALUES ("Sales"), 
("Engineering"), 
("Finance"), 
("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", "100000", "1"), 
("Salesperson", "80000", "1"), 
("Lead Engineer", "150000", "2"), 
("Software Engineer", "120000", "2"), 
("Accountant", "125000", "3"), 
("Legal Team Lead", "250000", "4"), 
("Lawyer", "190000", "4");


INSERT INTO employees (first_name, last_name, role_id, manager_id, salary)
VALUES ("John", "Doe", "1", "3", "100000"), 
("Mike", "Chan", "2", "1", "80000"), 
("Ashley", "Rodriguez", "3", null, "150000"), 
("Kevin", "Tupik", "4", "3", "120000"), 
("Malia", "Brown", "5", null, "125000"), 
("Sarah", "Lourd", "6", null, "250000"), 
("Tom", "Allen", "7", "6", "190000");
