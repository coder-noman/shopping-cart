//update product function
function updateProductNumber(productName, isIncresing, productPrice) {
// get input value
    const productInput = document.getElementById(productName + '-input');
    const productValue = productInput.value;
// increment and dicrement condition
    if (isIncresing) {
        productInput.value = parseInt(productValue) + 1;
    } else if (productValue > 1) {
        productInput.value = parseInt(productValue) - 1;
    }
// update product price
    const productTotal = document.getElementById(productName + '-total')
    productTotal.innerText = productInput.value * productPrice;
    productTotalPrice = productTotal.innerText;
// calculate total function
    calculateTotal();

}

function getInputValue(product) {
// get input value
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
// return input value
    return productNumber;
}

function calculateTotal() {
// get return input value
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
// get sub total
    const subTotal = phoneTotal + caseTotal;
// get tax
    const tax = subTotal/10;
// get total price
    const totalPrice = subTotal + tax;
// update sub total
    document.getElementById('sub-total').innerText = subTotal;
// update tax
    document.getElementById('tax-amount').innerText = tax;
// update total price
    document.getElementById('total-amount').innerText = totalPrice;
}
// click phone plus button
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1219);
})
// click phone minus button
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1219);
})
// click case plus button
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', true, 59);
})
// click case minus button
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', false, 59);
})