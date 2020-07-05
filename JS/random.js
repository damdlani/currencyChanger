{
    function getRandomCurrency() {
        randomCurrency = Math.random().toFixed(4);
    }

    function checkIfCurrencyRealistic() {
        let currency = undefined;
        if (randomCurrency > 0.3 && randomCurrency < 0.5) {
            currency = (+randomCurrency + 4).toFixed(4);
            console.log(currency);//do usunięcia
        } else {
            getRandomCurrency();
            checkIfCurrencyRealistic();
        }
    }

    function init() {
        let randomCurrency = undefined;
        getRandomCurrency();
        checkIfCurrencyRealistic();
    }
    init()
}