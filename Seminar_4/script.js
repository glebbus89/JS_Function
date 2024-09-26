// Задание 1
// Создайте функцию delayedMessage(message, delay),
// которая принимает аргументы message (строка) и delay
// (число). Функция должна выводить заданное сообщение в
// консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками. Например:
// a. delayedMessage("Сообщение 1", 2000)
// b. delayedMessage("Сообщение 2", 1000)
// c. delayedMessage("Сообщение 3", 3000)
// 3. После вызова всех функций delayedMessage(), добавьте
// сообщение вида "Конец программы" с помощью
// console.log().

// const delayedMessage = (message, delay) => {
//     setTimeout(() => {
//         console.log(message);
//     }, delay);
// }
// function delayedMessage(message, delay) {
//     setTimeout(() => { console.log(message);}, delay);
// }
    

// delayedMessage("Сообщение 1", 2000)
// delayedMessage("Сообщение 2", 1000)
// delayedMessage("Сообщение 3", 3000)
// delayedMessage("Конец программы", 3000)

// Задание 2.


// const allTasks = (taskList, interval) => {
//     let delay = 0;
//     taskList.forEach(task => {
//         setTimeout(() => {
//             console.log(task.name);
//         }, delay);
//         delay += interval;
//         });
// }

// const tasks = [
//     {name: 'task 1', time: 1000},
//     {name: 'task 2', time: 2000},
//     {name: 'task 3', time: 3000},
//     {name: 'task 4', time: 4000},
//     {name: 'task 5', time: 5000}
// ];

// allTasks(tasks, 1000);

// Задание 3

// const loadData = (url) => {
//     xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(xhr.responseText);
//         } 
//     }
//     xhr.open('GET', url, true);
//     xhr.send();
// }

// loadData('https://jsonplaceholder.typicode.com/uses');

// Задание 4

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((result) => {
//         if (result.ok) {
//             return result.text();
//         }
//         throw new Error('Ошибка не все ок');
        
//     })
//     .then(data => { 
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error('Много ошибок, решай вопросы');
//     });


// Задание 5

// const usersList = document.querySelector('.users-list');

// const renderUsersList = (users) => {
//     usersList.innerHTML = '';
//     users.forEach(user => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             <div>
//                 <h2>${user.name}</h2>
//                 <p>${user.email}</p>
//             </div>`
//             usersList.append(listItem);
        
//     })
// }
// const sortUsersByName = (users) => {
//         const sortedUsers = users.sort((a,b) => {
//             const nameA = a.name.toLowerCase();
//             const nameB = b.name.toLowerCase();
//             if (nameA < nameB) {
//                 return -1;
//             }
//             if (nameA > nameB) {
//                 return 1;
//             }
//             return 0;
//         });
//         renderUsersList(sortedUsers);
// }    
    


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((result) => result.json())
//     .then(data => {
//         renderUsersList(data);
//         const sortEL = document.querySelector('.sort');
//         sortEL.addEventListener('click',function (e) {
//             sortUsersByName(data);
//         });
//     })
//     .catch((err) => {
//         console.error('Много ошибок, решай вопросы');
//     });
