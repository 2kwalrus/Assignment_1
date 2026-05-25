
// HEADER

const header = document.createElement("header");
header.style.backgroundColor = "#222";
header.style.padding = "20px";
header.style.textAlign = "center";

const title = document.createElement("h1");
title.innerText = "Colby Kent Profile";
title.style.color = "white";

header.appendChild(title);


// NAVIGATION BAR

const nav = document.createElement("nav");

const links = [];

for (let i = 0; i < links.length; i++) {
    const link = document.createElement("a");

    link.innerText = links[i];
    link.href = "#";

    link.style.color = "white";
    link.style.margin = "15px";
    link.style.textDecoration = "none";
    link.style.fontSize = "18px";

    nav.appendChild(link);
}


// GRADE PAGE LINK

const gradeLink = document.createElement("a");

gradeLink.innerText = "Grade Converter";
gradeLink.href = "MarkToGrade.html";

gradeLink.style.color = "white";
gradeLink.style.margin = "15px";
gradeLink.style.textDecoration = "none";

nav.appendChild(gradeLink);

header.appendChild(nav);

header.appendChild(nav);
document.body.appendChild(header);


// STAFF PAGE LINK

const staffLink = document.createElement("a");

staffLink.innerText = "Staff Page";
staffLink.href = "staff.html";

staffLink.style.color = "white";
staffLink.style.margin = "15px";
staffLink.style.textDecoration = "none";
staffLink.style.fontSize = "18px";

nav.appendChild(staffLink);

//TEMP PAGE

const tempLink = document.createElement("a");

tempLink.innerText = "Temperature Converter";
tempLink.href = "temperature.html";

tempLink.style.color = "white";
tempLink.style.margin = "15px";
tempLink.style.textDecoration = "none";
tempLink.style.fontSize = "18px";

nav.appendChild(tempLink);


// MAIN CONTENT

const main = document.createElement("main");
main.style.padding = "30px";
main.style.fontFamily = "Arial";

// PARAGRAPH 1
const paragraph1 = document.createElement("p");
paragraph1.innerText =
    "Hello! My name is Colby Kent, I enjoy mountain biking, snowboarding, and dancing! I also love playing video games aswell as streaming and building a name for myself online";
paragraph1.style.fontSize = "20px";

main.appendChild(paragraph1);

// PARAGRAPH 2
const paragraph2 = document.createElement("p");
paragraph2.innerText =
    "I also love doing unity design, game development, and character design!";
paragraph2.style.fontSize = "20px";

main.appendChild(paragraph2);

document.body.appendChild(main);


// IMAGE AFTER 10 SECONDS

setTimeout(function () {

    const image = document.createElement("img");

    image.src = "Mountain.jpg";

    image.style.width = "300px";
    image.style.display = "block";
    image.style.margin = "30px auto";

    main.appendChild(image);

}, 10000);


// FOOTER

const footer = document.createElement("footer");

footer.style.backgroundColor = "#222";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "15px";
footer.style.marginTop = "40px";

// CURRENT DATE
const currentDate = new Date();

footer.innerText =
    "© 2026 Colby Kent | " + currentDate.toDateString();

document.body.appendChild(footer);