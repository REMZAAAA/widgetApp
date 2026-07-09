// what I want in the end : 
// how many days in total in the current month
// name of the day (Monday, Tuesday, ...)
// the day (number)

const date = new Date();
const [monthNumber, dayNumber, yearNumber] = [
    date.getMonth()+ 1, // start at 0 (january).
    date.getDate(),
    date.getFullYear(),
]
const monthDaysNumber = Array(12);
// [31], [28/29], ...

function isLeapYear(year){
    // leap year if it is divisible by 4 but not by 100 or 400.
    return year % 4 === 0 && (year % 100 !== 0 || 400 === 0);
}

function setMonthDays(array){
    for (let i = 0; i < monthDaysNumber.length; i++) {
        if (i === 1) { // february is special.
            monthDaysNumber[i] = isLeapYear(2026) ? 29 : 28;
            continue;
        }
        if (i > 6) { // logic reverse at July.
            monthDaysNumber[i] = i % 2 === 0 ? 30 : 31;
            continue;
        }
        monthDaysNumber[i] = i % 2 === 0 ? 31 : 30;
    }
}

console.log(date);
console.log(monthNumber);
console.log(dayNumber);
console.log(yearNumber);

console.log(monthDaysNumber);
setMonthDays(monthDaysNumber);
console.log(monthDaysNumber);


const currentMonthDaysNumber = monthDaysNumber[monthNumber];

console.log(currentMonthDaysNumber);
