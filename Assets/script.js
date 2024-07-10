// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
  let keepGoing = true;

  while (keepGoing) {
    const firstName = prompt("Please enter your first name");
    const lastName = prompt("Please enter your last name");
    let salary = prompt("Please enter your salary");

    if (isNaN(salary)) {
      salary = 0;
    }

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary),
    };

    employees.push(employee);

    // console.log(firstName)
    // console.log(lastName)
    // console.log(salary)
    keepGoing = confirm("Add more employees?");
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const numberOfEmployees = employeesArray.length;
  let totalSalary = 0;

  // this is a loop - calculates total salary
  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }

  console.log(`Total salary is ${totalSalary}!`)

  const averageSalary = totalSalary / numberOfEmployees;

  console.log("Here is the total number of employees is",numberOfEmployees,"Yay! So many!");
  console.log(`The average salary of all employees is ${averageSalary}. WOW!`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)];

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random winner!`)
  // how to get a random element from an array

};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
