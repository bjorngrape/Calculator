const knappen = document.querySelector(".button");

// Variabel med konstant värde för listor
const inkomstLista = document.querySelector("#inkomstLista");
const kostnadsLista = document.querySelector("#kostnadsLista");

// Variabel med konstant värde för input
const inputValue = document.querySelector("#value");
const inputDescription = document.querySelector("#description");
const selector = document.querySelector(".selector");

// Variabel med konstant värde för totalsummor
const inkomstTotal = document.querySelector("#inkomstTotal");
const kostnadTotal = document.querySelector("#kostnadTotal");
const summaTotal = document.querySelector("#summaTotal");

// Funktion som kör addInfo när knappen klickas på
knappen.addEventListener("click" , addInfo);

// Funktionen addInfo
function addInfo() {
    const createLi = document.createElement("li");
    if (selector.selectedIndex == "0") {

        // Gör ett li-element i inkomstLista
        inkomstLista.appendChild(createLi);

        // Skriver in värde i li-elementet ovanför
        createLi.innerHTML = inputDescription.value + " " + inputValue.value;

        // Lägger till i inkomstTotal
        inkomstTotal.innerHTML = Number(inkomstTotal.innerHTML) + Number(inputValue.value);

        summaTotal.innerHTML = Number(inkomstTotal.innerHTML) - Number(kostnadTotal.innerHTML);

    } else {
        kostnadsLista.appendChild(createLi);
        createLi.innerHTML = inputDescription.value + " " + inputValue.value;
        kostnadTotal.innerHTML = Number(kostnadTotal.innerHTML) + Number(inputValue.value);
        summaTotal.innerHTML = Number(inkomstTotal.innerHTML) - Number(kostnadTotal.innerHTML);
    }
} 
