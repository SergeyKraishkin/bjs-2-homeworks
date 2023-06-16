"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return arr;
    } else if (discriminant === 0) {
        arr[0] = -b / (2 * a);
        return arr;
    } else {
        arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
        arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
        return arr;
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyPercent = Number(percent / 12 / 100);
    let creditVolume = Number(amount) - Number(contribution);
    let annuityRatio = (monthlyPercent * (1 + monthlyPercent) ** Number(countMonths)) / ((1 + monthlyPercent) ** Number(countMonths) - 1);
    let paymentPerMonth = creditVolume * annuityRatio;
    let totalPayment = paymentPerMonth * Number(countMonths);
    return Number(totalPayment.toFixed(2));

}