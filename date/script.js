// what I want in the end : 
// how many days in total in the current month
// the day (number)
// name of the day (Monday, Tuesday, ...)
// name of the month (January, February, ...)

const date = new Date();
const lang = "en-US";

const [monthNumber, dayNumber, yearNumber, monthName, dayName] = [
    date.getMonth()+ 1, // start at 0 (january).
    date.getDate(),
    date.getFullYear(),
    date.toLocaleDateString(lang, {weekday: "long"}),
    date.toLocaleDateString(lang, {month: "long"}),
]

// const monthDaysNumber = Array(12);
// [31], [28/29], ...

function isLeapYear(year){
    // leap year if it is divisible by 4 but not by 100 or 400.
    return year % 4 === 0 && (year % 100 !== 0 || 400 === 0);
}

// function setMonthDays(array){
//     for (let i = 0; i < monthDaysNumber.length; i++) {
//         if (i === 1) { // february is special.
//             monthDaysNumber[i] = isLeapYear(2026) ? 29 : 28;
//             continue;
//         }
//         if (i > 6) { // logic reverse at July.
//             monthDaysNumber[i] = i % 2 === 0 ? 30 : 31;
//             continue;
//         }
//         monthDaysNumber[i] = i % 2 === 0 ? 31 : 30;
//     }
// }

// console.log(date);
// console.log(monthNumber);
// console.log(dayNumber);
// console.log(yearNumber);

// console.log(monthDaysNumber);
// setMonthDays(monthDaysNumber);
// console.log(monthDaysNumber);


// const currentMonthDaysNumber = monthDaysNumber[monthNumber];

function howManyDayIn(month){
    if (month === 2) { // february is special.
        return isLeapYear(2026) ? 29 : 28;
    }
    if (month > 7) { // logic reverse at July.
        return month % 2 === 0 ? 31 : 30;
    }
    return month % 2 !== 0 ? 31 : 30;
}

function howManyDayInTest(){
    let monthNumber, result;

    monthNumber = 1; result = howManyDayIn(monthNumber);
    console.assert(result === 31,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 31.`
    );
    monthNumber = 2; result = howManyDayIn(monthNumber);
    console.assert(result === 28 || result === 29,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 28 ou 29.`
    );
    monthNumber = 3; result = howManyDayIn(monthNumber);
    console.assert(result === 31,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 31.`
    );
    monthNumber = 4; result = howManyDayIn(monthNumber);
    console.assert(result === 30,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 30.`
    );
    monthNumber = 5; result = howManyDayIn(monthNumber);
    console.assert(result === 31,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 31.`
    );
    monthNumber = 6; result = howManyDayIn(monthNumber);
    console.assert(result === 30,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 30.`
    );
    monthNumber = 7; result = howManyDayIn(monthNumber);
    console.assert(result === 31,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 31.`
    );
    monthNumber = 8; result = howManyDayIn(monthNumber);
    console.assert(result === 31,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 31.`
    );
    monthNumber = 9; result = howManyDayIn(monthNumber);
    console.assert(result === 30,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 30.`
    );
    monthNumber = 10; result = howManyDayIn(monthNumber);
    console.assert(result === 31,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 31.`
    );
    monthNumber = 11; result = howManyDayIn(monthNumber);
    console.assert(result === 30,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 30.`
    );
    monthNumber = 12; result = howManyDayIn(monthNumber);
    console.assert(result === 31,
        `Erreur : howManyDayIn(${monthNumber}) retourne ${result}, attendu 31.`
    );
}

howManyDayInTest();

const currentMonthDaysNumber = howManyDayIn(monthNumber);
console.log(currentMonthDaysNumber, monthNumber);

console.log(dayName);
console.log(monthName);

