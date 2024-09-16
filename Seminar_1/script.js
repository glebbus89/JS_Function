
// Задание 1
// function mergArrays(arr1, arr2) {
//     return [...arr1, ...arr2];
//     }
// функция

// const mergArrays = (arr1, arr2) => [...arr1, ...arr2];
    //стрелочная функция 

    // console.log(mergArrays([1, 2, 3], [4, 5, 6]));

// Задание 2
    // const removeDuplicates = (...args) => args.filter((val,index) => args.indexOf(val) === index);
    // console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Задание 2
    // const getEvenNumbers = (num) => num.filter(item => item % 2 === 0);
    // console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

    // const calculateAverage = (num) => {
    //     const sum = num.reduce((acc, item) => acc + item, 0);
    //     return sum / num.length;
    // }
    //     console.log(calculateAverage([1, 2, 3, 4, 5]));

    // const capitalizeFirstLetter = (str) => {
    //     return str
    //             .split(' ')
    //             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    //             .join(' ');
    // }
    // console.log(capitalizeFirstLetter('hello world')); 

// Задание 3

    // function createCalculator(initialValue) {
    //     let value = initialValue;

    //     return{
    //         add: function (num) {
    //             value += num;
    //         },
    //         subtract: function (num) {
    //             value -= num;
    //         },
    //         getValue: function(){
    //             return value;
    //         },
    //     }
        
    // }
    // const calculator = createCalculator(10);
    // calculator.add(5);
    // calculator.subtract(3)
    // console.log(calculator.getValue());

// Задание 4
    // function createGreeting(user) {
    //     return function () {
    //         console.log(`Hello ${user}!`);
    //     }
    // }
    // const greeting = createGreeting('John')  
    // greeting();

// Задание 5

    // function createPasswordChecker(maxLength) {
    //     return function (password) {
    //         return password.length <=maxLength;
    //     }
    // }

    // const isPasswordValid = createPasswordChecker(8);
    // console.log(isPasswordValid('newpassword'))
    // console.log(isPasswordValid('secret'))

    // Задание 6

    // function sumDigits(num) {
    //     if (num < 10){
    //         return num;
    //     }
    //     return num % 10 + sumDigits(Math.floor(num /10));
    // } 

    // console.log(sumDigits(123)); 
    // console.log(sumDigits(456789));  



