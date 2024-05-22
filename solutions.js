// START
// function of adding to numbers

function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(3, 7));

// Return the next number from the number passed
function returnNumberPassed() {
    let num = 5;
    return num + 1;

}
console.log(returnNumberPassed(5));

// Find perimeter of a rectangle

function perimeter(length, width) {
    return (length + width) * 2;
}
console.log(perimeter(5, 4));

// Return something to me

function returnSomethingToMe(string) {
    return "something" + " " + string;
}

console.log(returnSomethingToMe("is better than nothing, So do something!"));

// Bob's BMI vs Jane's BMI

function greaterBMI(bobBMI, janeBMI) {
    if (bobBMI > janeBMI) {
        return "bob";
    } else if (bobBMI < janeBMI) {
        return "jane";
    } else {
        return "equal";
    }
}
console.log(greaterBMI(30, 25));
console.log(greaterBMI(10, 25));
console.log(greaterBMI(30, 30));

// Basketball points

function basketballPoints(numberof2pointers, numberof3pointers) {
    // let numberof2pointers = 1;
    // let numberof3pointers = 1;
    return (numberof2pointers * 2) + (numberof3pointers * 3);

}
console.log(basketballPoints(1, 1));

// Less than 100

function isSumMoreThan100(num1, num2) {
    if ((num1 + num2) > 100) {
        return "true";
    } else {
        return "false";
    }
}
console.log(isSumMoreThan100(25, 55));
console.log(isSumMoreThan100(72, 38));

// Convert minutes to second

function convertToSeconds(minutes) {
    return minutes * 60;

}
console.log(convertToSeconds(5) + " " + "seconds");
console.log(convertToSeconds(0) + " " + "seconds");
console.log(convertToSeconds(1) + " " + "seconds");

// Greater among the three

function greater(num1, num2, num3) {
    return Math.max(num1, num2, num3);

}
console.log(greater(2, 35, 9));
console.log(greater(23, 23, 23));

// Less among the three

function least(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}
console.log(least(2, 35, 9));
console.log(least(23, 23, 23));

// Football points

function footballPoints(wins, draws, lost) {
    let winPoints = wins * 3;
    let drawPoints = draws * 1;
    let lostPoints = lost * 0;
    return winPoints + drawPoints + lostPoints;
}
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 2));
console.log(footballPoints(5, 2, 0));

// Even numbers

function isEven(num) {
    return num % 2 === 0;
}
for (let i = 0; i <= 101; i++) {
    if (isEven(i)) {
        console.log(i);
    }
}
// END 





