console.log("Cześć")
//variables
let cantor = document.querySelector(".js-form")
let priceTop = document.querySelector(".js-price1");
let priceBottom = document.querySelector(".js-price2");
let changeCurrency = document.querySelector(".js-changeIcon");
let currencyTop = document.querySelector(".js-currency1");
let currencyBottom = document.querySelector(".js-currency2");
let currencyEuro = ((Math.random()/5) + 4.3).toFixed(4);
let currencyPLN = (1 / currencyEuro).toFixed(4);
let euro = document.querySelector(".euro");
let pln = document.querySelector(".pln");


currencyTop.innerHTML = currencyEuro;
currencyBottom.innerHTML = currencyPLN;
//disabling the second input while filling in the first
priceTop.addEventListener("input", () => {
    priceBottom.setAttribute("disabled", "")
})
//counting the currency
cantor.addEventListener("submit", (e) => {
    e.preventDefault();
    let currencyResult = undefined;
    if (euro.innerText === "€") {
        currencyResult = +priceTop.value * currencyEuro;
    } else {
        currencyResult = +priceTop.value * currencyPLN;
    }
    priceBottom.value = currencyResult.toFixed(2);
});
//action after clicking on arrows
changeCurrency.addEventListener("click", () => {
    if (euro.innerText === "€") {
        euro.innerText = "PLN";
    } //doesn't work with &euro;, dunno why
    else {
        euro.innerText = "€";
    };
    if (pln.innerText === "PLN") {
        pln.innerText = "€";
    } else {
        pln.innerText = "PLN";
    };
    priceTop.value = "";
    priceBottom.value = "";
});