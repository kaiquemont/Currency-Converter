
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueToConverted = document.querySelector(".currency-value") // outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5.30
    const euroToday = 5.77
    const libraToday = 6.77
    const bitcoinToday = 372.00

    
    if(currencySelect.value == "dolar"){ // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    
    }

    if(currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

   
    console.log(convertValues) 


}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".dolar")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar ameicano"
        currencyImage.src = "./assets/dolar.png"
    }


     if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    } 

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    } 

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    } 
    
    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)