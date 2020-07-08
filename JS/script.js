{
    //variables
    const topValue = document.querySelector(".js-price1");
    const bottomValue = (document.querySelector(".js-price2"));
    const changeCurrencyButton = document.querySelector(".js-changeIcon");

    const currencyEuro = ((Math.random() / 5) + 4.3).toFixed(4);
    const currencyPLN = (1 / currencyEuro).toFixed(4);
    const currencyTopSign = document.querySelector(".js-currencyTop");
    const currencyBottomSign = document.querySelector(".js-currencyBottom");




    const disablingInput = () => {
        bottomValue.setAttribute("disabled", "")
    }
    const countingCurrency = () => {
        let currencyResult;
        if (currencyTopSign.innerText === "EUR") {
            currencyResult = +topValue.value * currencyEuro;
        } else {
            currencyResult = +topValue.value * currencyPLN;
        }
        bottomValue.value = currencyResult.toFixed(2);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const currencyTop = document.querySelector(".js-currency1");
        const currencyBottom = document.querySelector(".js-currency2");

        currencyTop.innerHTML = currencyEuro;
        currencyBottom.innerHTML = currencyPLN;

        topValue.addEventListener("input", disablingInput);
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            countingCurrency();
        });
    }
    init()



    //action after clicking on arrows
    changeCurrencyButton.addEventListener("click", () => {
        if (currencyTopSign.innerText === "EUR") {
            currencyTopSign.innerText = "PLN";
        } else {
            currencyTopSign.innerText = "EUR";
        };
        if (currencyBottomSign.innerText === "PLN") {
            currencyBottomSign.innerText = "EUR";
        } else {
            currencyBottomSign.innerText = "PLN";
        };
        topValue.value = "";
        bottomValue.value = "";
    });

    
}