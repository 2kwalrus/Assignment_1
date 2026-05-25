
// PAGE TITLE

const title = document.createElement("h1");

title.innerText = "Staff Page";
title.style.textAlign = "center";
title.style.fontFamily = "Arial";

document.body.appendChild(title);


// BUTTONS

const buttonContainer = document.createElement("div");

buttonContainer.style.textAlign = "center";
buttonContainer.style.marginBottom = "20px";

document.body.appendChild(buttonContainer);

// NAME SORT BUTTON
const nameButton = document.createElement("button");

nameButton.innerText = "Sort By Name";

nameButton.style.margin = "10px";
nameButton.style.padding = "10px";

buttonContainer.appendChild(nameButton);

// SALARY SORT BUTTON
const salaryButton = document.createElement("button");

salaryButton.innerText = "Sort By Salary";

salaryButton.style.margin = "10px";
salaryButton.style.padding = "10px";

buttonContainer.appendChild(salaryButton);


// STAFF CONTAINER

const container = document.createElement("div");

container.style.width = "500px";
container.style.margin = "auto";

document.body.appendChild(container);


// STAFF ARRAY

let staffArray = [];

let nameAscending = true;
let salaryAscending = true;


// DISPLAY FUNCTION

function displayStaff() {

    container.innerHTML = "";

    for (let i = 0; i < staffArray.length; i++) {

        const card = document.createElement("div");

        card.style.border = "2px solid black";
        card.style.padding = "15px";
        card.style.marginBottom = "10px";
        card.style.backgroundColor = "#f2f2f2";
        card.style.fontFamily = "Arial";

        card.innerHTML =
            "<strong>Name:</strong> " + staffArray[i].name +
            "<br><strong>Salary:</strong> $" + staffArray[i].salary;

        container.appendChild(card);
    }
}


// LOAD TEXT FILE

fetch("staff.txt")
.then(function(response) {
    return response.text();
})

.then(function(data) {

    // RUN THE FILE CONTENT
    eval(data);

    // dataSet now exists
    for (let i = 0; i < dataSet.length; i++) {

        // REMOVE $ AND COMMAS
        let salary = dataSet[i][5]
            .replace("$", "")
            .replace(/,/g, "");

        staffArray.push({
            name: dataSet[i][0],
            salary: Number(salary)
        });

    }

    displayStaff();

});


// SORT BY NAME

nameButton.addEventListener("click", function () {

    staffArray.sort(function (a, b) {

        if (nameAscending) {
            return a.name.localeCompare(b.name);
        }
        else {
            return b.name.localeCompare(a.name);
        }

    });

    nameAscending = !nameAscending;

    displayStaff();

});


// SORT BY SALARY

salaryButton.addEventListener("click", function () {

    staffArray.sort(function (a, b) {

        if (salaryAscending) {
            return a.salary - b.salary;
        }
        else {
            return b.salary - a.salary;
        }

    });

    salaryAscending = !salaryAscending;

    displayStaff();

});