// Задание 1
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

// const MusicSeries = {
//     model: "music series",
//     power: 200,
//     batterySize: 2100,
//     boxSize: 0.5,
//     workTime: 45,
//     starWipe() {
//         console.log('I am the method of MusicSeries');
//         console.log('I am starting to wipe the floor... ');
//     },
// };

// const Blues = {
//     model: "Blues-1",
//     power: 250,
//     batterySize: 2500,
//     workTime: 50,       
// };

// Object.setPrototypeOf(Blues, MusicSeries);

// function getPrototypeChain(obj) {
//     const prototypeChain = [];

//     let currentObj = obj;

//     while (currentObj !== null) {
//         prototypeChain.push(currentObj);
//         currentObj = Object.getPrototypeOf(currentObj);
//     }

//     return prototypeChain;
    
// }

// const prototypeChain = getPrototypeChain(Blues);
// console.log(prototypeChain);    


// Задание 2


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`Животное ${this.name} издает звук`);
//     }
// }

// class Dog extends Animal {
//     constructor(name,breed) {
//         super(name);
//         this.breed = breed;
    
//     }
//     fetch() {
//         console.log(`Собака ${this.name} принесла мяч`);
//     }
// }

// const animal1 = new Animal('Собака');
// animal1.speak();
// const dog1 = new Dog('Бобик', 'Дворняжка');
// dog1.speak();
// console.log(dog1.breed);
// dog1.fetch(); 

// Задание 3

// class Product {

//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class ShoppingCart {
//     constructor(castomerName, initialTotalCost) {
//         this.castomerName = castomerName;
//         this.totalCost = initialTotalCost;  
//         this.items = [];
//     }
//     addItem(product, quantity = 1) {
//         this.totalCost += product.price * quantity;
//         this.items.push({product, quantity});
//     }
//     getCurrentTotalCost() {
//         return this.totalCost;
//     }

//     checkout() {
//         console.log(`Заказ оформлен для ${this.castomerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку!`);
//     }
// }

// const product1 = new Product('Футболка', 1000);
// const product2 = new Product('Шорты', 2000);

// const cart = new ShoppingCart('Дима', 0);  

// cart.addItem(product1, 2);
// cart.addItem(product2);
// cart.addItem(product1, 3);

// console.log(`Общая стоимость: ${cart.getCurrentTotalCost()}`);

// cart.checkout();

