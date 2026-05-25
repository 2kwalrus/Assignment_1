5
// HEADER

const header = document.createElement("header");

header.style.backgroundColor = "#222";
header.style.padding = "20px";
header.style.textAlign = "center";

const title = document.createElement("h1");

title.innerText = "Temperature Converter";
title.style.color = "white";

header.appendChild(title);

document.body.appendChild(header);


// MAIN CONTAINER

const main = document.createElement("main");

main.style.textAlign = "center";
main.style.marginTop = "40px";
main.style.fontFamily = "Arial";

document.body.appendChild(main);


// CELSIUS

const celsiusLabel = document.createElement("h2");
celsiusLabel.innerText = "Celsius";

const celsiusInput = document.createElement("input");

celsiusInput.type = "number";
celsiusInput.style.padding = "10px";
celsiusInput.style.fontSize = "18px";

main.appendChild(celsiusLabel);
main.appendChild(celsiusInput);


// FAHRENHEIT

const fahrenheitLabel = document.createElement("h2");
fahrenheitLabel.innerText = "Fahrenheit";

const fahrenheitInput = document.createElement("input");

fahrenheitInput.type = "number";
fahrenheitInput.style.padding = "10px";
fahrenheitInput.style.fontSize = "18px";

main.appendChild(fahrenheitLabel);
main.appendChild(fahrenheitInput);


// KELVIN

const kelvinLabel = document.createElement("h2");
kelvinLabel.innerText = "Kelvin";

const kelvinInput = document.createElement("input");

kelvinInput.type = "number";
kelvinInput.style.padding = "10px";
kelvinInput.style.fontSize = "18px";

main.appendChild(kelvinLabel);
main.appendChild(kelvinInput);


// CELSIUS CONVERSION

celsiusInput.addEventListener("input", function() {

    let celsius = Number(celsiusInput.value);

    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    fahrenheitInput.value = fahrenheit.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);

});


// FAHRENHEIT CONVERSION

fahrenheitInput.addEventListener("input", function() {

    let fahrenheit = Number(fahrenheitInput.value);

    let celsius = (fahrenheit - 32) * 5/9;
    let kelvin = celsius + 273.15;

    celsiusInput.value = celsius.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);

});


// KELVIN CONVERSION

kelvinInput.addEventListener("input", function() {

    let kelvin = Number(kelvinInput.value);

    let celsius = kelvin - 273.15;
    let fahrenheit = (celsius * 9/5) + 32;

    celsiusInput.value = celsius.toFixed(2);
    fahrenheitInput.value = fahrenheit.toFixed(2);

});


// FOOTER

const footer = document.createElement("footer");

footer.style.backgroundColor = "#222";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "15px";
footer.style.marginTop = "40px";

footer.innerText =
    "© 2026 Colby Kent | " + new Date().toDateString();

document.body.appendChild(footer);