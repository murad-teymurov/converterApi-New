const baseInput = document.querySelector('#baseInput');
const toInput = document.querySelector('#toInput');
const firstLi = document.querySelectorAll('.buying-azn ul li')
const secondLi = document.querySelectorAll('.selling-azn ul li')
const fromValue = document.querySelector("#fromValue");
const toValue = document.querySelector("#toValue");

let base = 'RUB';
let symbol = 'USD';
let html = "";

// var baseInput = IMask(baseText, {//baseinput
//     mask: "num",
//     blocks: {
//         num: {
//             // nested masks are available!
//             mask: Number,
//             thousandsSeparator: " ",
//             radix: ".",
//             scale: 4,
//             max: Number.MAX_VALUE,
//             padFractionalZeros: false,
//             normalizeZeros: true
//         },
//     },
// });

// var toInput = IMask(toText, {//toinput
//     mask: "num",
//     blocks: {
//         num: {
//             // nested masks are available!
//             mask: Number,
//             thousandsSeparator: " ",
//             radix: ".",
//             scale: 4,
//             max: Number.MAX_VALUE,
//             padFractionalZeros: false,
//             normalizeZeros: true
//         },
//     },
// });

function defalutExchange() {
    fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=USD`)
        .then(response => response.json())
        .then(data => (
            fromValue.innerHTML = `1 RUB = ${(Object.values(data.rates)[0])} USD`,
            toValue.innerHTML = `1 USD = ${1 / (Object.values(data.rates)[0])} RUB`
            // toValue.innerHTML = html
        ))
}
baseInput.addEventListener("keyup", function () {
    fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=USD`)

        .then(response => response.json())
        .then(data => (
            toInput.value = (baseInput.value * (Object.values(data.rates)[0])).toFixed(4)
        ))
})
for (let i = 0; i < firstLi.length; i++) {
    firstLi[i].addEventListener("click", function () {
        base = (firstLi[i].textContent)
        fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbol}`)
            .then(response => response.json())
            .then(data => (
                toInput.value = (baseInput.value * (Object.values(data.rates)[0])).toFixed(4),
                fromValue.innerHTML = `1${base} = ${Object.values(data.rates)[0]} ${symbol}`,
                toValue.innerHTML = `1${symbol} = ${1 / Object.values(data.rates)[0]} ${base}`
            ))
    })
}
for (let i = 0; i < secondLi.length; i++) {
    secondLi[i].addEventListener("click", function () {
        symbol = (secondLi[i].textContent)
        fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbol}`)
            .then(response => response.json())
            .then(data => (
                toInput.value = (baseInput.value * (Object.values(data.rates)[0])).toFixed(4),
                fromValue.innerHTML = `1${base} = ${Object.values(data.rates)[0]} ${symbol}`,
                toValue.innerHTML = `1${symbol} = ${1 / Object.values(data.rates)[0]} ${base}`
            ))
    })
}
defalutExchange();
