const unitCalculator = (price, qty) => qty === 0 || qty === '' ? 'Qunatity cannot be zero!' : Math.round(price/qty*100)/100;

document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calculate-button');

    calcBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const inputPrice = document.getElementById('price').value;
        const inputQty = document.getElementById('qty').value;
        const inputUnit = document.getElementById('units').value;

        const result = unitCalculator(inputPrice, inputQty);
        result === 'Qunatity cannot be zero!' ? document.getElementById('result-container').innerHTML = result :
        document.getElementById('result-container').innerHTML = `The unit price: $ ${result} per ${inputUnit}`;
    })
})