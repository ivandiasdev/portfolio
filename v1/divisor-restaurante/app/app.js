let customers = [];
let products = {};
let consumption = {};

function addCustomer() {
    customers.push(document.getElementById('customer').value);
    document.getElementById('customer').value = '';
    updateSelects();
}
function addProduct() {
    products[document.getElementById('product').value] = Number(document.getElementById('price').value);
    document.getElementById('product').value = '';
    document.getElementById('price').value = '';
    updateSelects();
}
function addConsumedProduct() {
    const productSelect = document.getElementById('product-consumed');
    const product = productSelect.value;
    const sharedCustomers = Array.from(document.querySelectorAll('#shared input:checked')).map(input => input.value);
    sharedCustomers.forEach(customer => {
        if (!consumption[customer]) {
            consumption[customer] = [];
        }
        consumption[customer].push({ product, shared: sharedCustomers.length });
    });
    createConsumptionModal(sharedCustomers, product, sharedCustomers.length);
}
function updateSelects() {
    const productSelect = document.getElementById('product-consumed');
    const sharedDiv = document.getElementById('shared');
    productSelect.innerHTML = Object.entries(products).map(([product, price]) => {
        return `<option value="${product}">${product} - R$ ${price.toFixed(2)}</option>`;
    }).join('');
    sharedDiv.innerHTML = customers.map(customer => {
        return `<label><input type="checkbox" value="${customer}"> ${customer}</label>`;
    }).join('');
}
function calculateBill() {
    let bills = {};
    const taxa = parseFloat(document.getElementById('taxa-consumed').value);

    customers.forEach(customer => {
        if (!bills[customer]) {
            bills[customer] = 0;
        }
        if (consumption[customer]) {
            consumption[customer].forEach(consumption => {
                bills[customer] += (products[consumption.product] / consumption.shared) * taxa;
            });
        }
    });
    displayBills(bills);
}
function displayBills(bills) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = Object.keys(bills).map(customer => {
        return '<p>' + customer + ': R$ ' + bills[customer].toFixed(2) + '</p>';
    }).join('');
}
function resetApp() {
    customers = [];
    products = {};
    consumption = {};
    const elementIds = ['customer', 'product', 'price', 'shared', 'result'];
    elementIds.forEach(id => {
        document.getElementById(id).value = '';
    });
    updateSelects();
}