/// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById("addEmployeeForm");
const table = document.getElementById("employeeTable");
const countDisplay = document.getElementById("employeeCount");

let employeeCount = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    e.preventDefault(); // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES
    const employeeID = document.getElementById("employeeID").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const department = document.getElementById("department").value;
    const email = document.getElementById("email").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const newRow = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const cellID = newRow.insertCell();
    const cellFirstName = newRow.insertCell();
    const cellLastName = newRow.insertCell();
    const cellDepartment = newRow.insertCell();
    const cellEmail = newRow.insertCell();
    const cellDelete = newRow.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(employeeID));
    cellFirstName.appendChild(document.createTextNode(firstName));
    cellLastName.appendChild(document.createTextNode(lastName));
    cellDepartment.appendChild(document.createTextNode(department));
    cellEmail.appendChild(document.createTextNode(email));

    // CREATE THE DELETE BUTTON
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteEmployee);
    cellDelete.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("employeeID").focus();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    updateEmployeeCount();
});

// DELETE EMPLOYEE
function deleteEmployee() {
    if (confirm("Are you sure you want to delete this employee?")) {
        const row = this.parentNode.parentNode; // Get the row containing the delete button
        table.deleteRow(row.rowIndex); // Delete the row
        employeeCount--;
        updateEmployeeCount();
    }
}

// Update the employee count displayed next to the header
function updateEmployeeCount() {
    countDisplay.textContent = employeeCount;
}
