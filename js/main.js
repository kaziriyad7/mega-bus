// Grab the document first
// Input
const firstClassDocument = document.getElementById("first-class-input");
const economyClassDocument = document.getElementById("economy-class-input");

// First Class Btn
const firstClassPlusBtn = document.getElementById("first-plus-btn");
const firstClassMinusBtn = document.getElementById("first-minus-btn");

// Economy Class Btn
const economyClassPlusBtn = document.getElementById("economy-plus-btn");
const economyClassMinusBtn = document.getElementById("economy-minus-btn");

// Subtotal
const subtotalDocument = document.getElementById("subtotal");

// vat
const vatDocument = document.getElementById("vat");

// total
const totalDocument = document.getElementById("total");

// book Now
const bookNowBtnDocument = document.getElementById("booknow-btn");

// success
const successDocument = document.getElementById("success");

// Extract the value from the document
let firstClassValue = isEmptyAndSetDefault(firstClassDocument);
let economyClassValue = isEmptyAndSetDefault(economyClassDocument);

// Ticket Price
const firstClassTicketPrice = 150;
const economyClassTicketPrice = 100;

// Calculation
let totalFirstClassPrice = 0;
let totalEconomyClassPrice = 0;
let vat = 0;

// Increment the firstClassValue
firstClassPlusBtn.addEventListener("click", function () {
    firstClassValue++;

    // Total FirstClass Ticket Price
    totalFirstClassPrice = updatePriceCalculation(
        firstClassDocument,
        firstClassValue,
        firstClassTicketPrice
    );

    let totalTicketPrice = totalFirstClassPrice + totalEconomyClassPrice;

    // Calculate the vat
    vat = totalTicketPrice * 0.1;

    updatePriceSummary(totalTicketPrice, vat);
});

// Decrement the firstClassValue
firstClassMinusBtn.addEventListener("click", function () {
    if (firstClassValue > 0) {
        firstClassValue--;
    }

    // Total FirstClass Ticket Price
    totalFirstClassPrice = updatePriceCalculation(
        firstClassDocument,
        firstClassValue,
        firstClassTicketPrice
    );

    let totalTicketPrice = totalFirstClassPrice + totalEconomyClassPrice;

    // Calculate the vat
    vat = totalTicketPrice * 0.1;

    updatePriceSummary(totalTicketPrice, vat);
});

// Increment the economyClassValue
economyClassPlusBtn.addEventListener("click", function () {
    economyClassValue++;

    // Total economyClass Ticket Price
    totalEconomyClassPrice = updatePriceCalculation(
        economyClassDocument,
        economyClassValue,
        economyClassTicketPrice
    );

    let totalTicketPrice = totalFirstClassPrice + totalEconomyClassPrice;

    // Calculate the vat
    vat = totalTicketPrice * 0.1;

    updatePriceSummary(totalTicketPrice, vat);
});

// Decrement the economyClassValue
economyClassMinusBtn.addEventListener("click", function () {
    if (economyClassValue > 0) {
        economyClassValue--;
    }

    // Calculate the total price
    totalEconomyClassPrice = updatePriceCalculation(
        economyClassDocument,
        economyClassValue,
        economyClassTicketPrice
    );

    let totalTicketPrice = totalFirstClassPrice + totalEconomyClassPrice;

    // Calculate the vat
    vat = totalTicketPrice * 0.1;

    updatePriceSummary(totalTicketPrice, vat);
});

// Click book now
bookNowBtnDocument.addEventListener("click", function () {
    successDocument.innerText = `Your ticket successfully created, please pay ,$${
        totalFirstClassPrice + totalEconomyClassPrice + vat
    }`;
    document.getElementById("success").style.color = "magenta";
    document.getElementById("success").style.border = "1px solid gray";
    document.getElementById("success").style.marginBlockStart = "20px";
    document.getElementById("success").style.padding = "10px";
    document.getElementById("success").style.backgroundColor = "lightblue";
    document.getElementById("success").style.boxShadow = "3px 4px 8px green";


});

// Function for calculate the price
function updatePriceCalculation(classDocument, classValue, classTicketPrice) {
    classDocument.value = classValue;

    // Total FirstClass Ticket Price
    totalClassPrice = classTicketPrice * classValue;

    return totalClassPrice;
}

// Function for update price summary
function updatePriceSummary(totalTicketPrice, vat) {
    // Update the subtotal
    subtotalDocument.innerText = totalTicketPrice;

    // Update the vat
    vatDocument.innerText = vat;

    // Update total document
    totalDocument.innerText = totalTicketPrice + vat;
}

// Check the value and set default value
function isEmptyAndSetDefault(document) {
    if (parseInt(document.value)) {
        return parseInt(document.value);
    }

    return 0;
}
