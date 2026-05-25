
// HEADER

const header = document.createElement("header");

header.style.backgroundColor = "#222";
header.style.padding = "20px";
header.style.textAlign = "center";

const title = document.createElement("h1");
title.innerText = "Mark To Grade Converter";
title.style.color = "white";

header.appendChild(title);
document.body.appendChild(header);


// MAIN SECTION

const main = document.createElement("main");

main.style.padding = "30px";
main.style.fontFamily = "Arial";
main.style.textAlign = "center";

// INPUT BOX
const input = document.createElement("input");

input.type = "text";
input.id = "mark-input-box";
input.placeholder = "Enter your mark";

input.style.padding = "10px";
input.style.fontSize = "18px";
input.style.width = "200px";

main.appendChild(input);

// LINE BREAK
main.appendChild(document.createElement("br"));
main.appendChild(document.createElement("br"));

// BUTTON
const button = document.createElement("button");

button.innerText = "Convert Grade";

button.style.padding = "10px 20px";
button.style.fontSize = "18px";
button.style.cursor = "pointer";

main.appendChild(button);


// VALIDATION MESSAGE

const validationMessage = document.createElement("p");

validationMessage.id = "validation-message";
validationMessage.style.fontSize = "20px";
validationMessage.style.marginTop = "20px";

main.appendChild(validationMessage);

document.body.appendChild(main);


// FUNCTION

function MarkToGrade() {

    try {

        // GET VALUE
        let value = input.value.trim();

        // EMPTY INPUT
        if (value === "") {
            throw "Please enter a mark.";
        }

        // CONVERT TO NUMBER
        let mark = parseInt(value);

        // NOT A NUMBER
        if (isNaN(mark)) {
            throw "Only numerical values are allowed.";
        }

        // NEGATIVE NUMBER
        if (mark < 0) {
            throw "Marks cannot be negative.";
        }

        // GREATER THAN 100
        if (mark > 100) {
            throw "Marks cannot be greater than 100.";
        }

        
        // GRADE CONVERSION
        
        let grade = "";

        if (mark >= 90) {
            grade = "A";
        }
        else if (mark >= 80) {
            grade = "B";
        }
        else if (mark >= 70) {
            grade = "C";
        }
        else if (mark >= 60) {
            grade = "D";
        }
        else if (mark >= 50) {
            grade = "E";
        }
        else {
            grade = "F";
        }

        validationMessage.style.color = "green";
        validationMessage.innerText =
            "Your grade is: " + grade;

    }

    catch(error) {

        validationMessage.style.color = "red";
        validationMessage.innerText = error;

    }

}

// BUTTON EVENT
button.addEventListener("click", MarkToGrade);

// =========================
// FOOTER
// =========================
const footer = document.createElement("footer");

footer.style.backgroundColor = "#222";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "15px";
footer.style.marginTop = "40px";

footer.innerText =
    "© 2026 Colby Kent | " + new Date().toDateString();

document.body.appendChild(footer);