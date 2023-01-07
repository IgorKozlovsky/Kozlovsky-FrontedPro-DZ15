// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наприклад:

// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

const array = [1, 2, 3, 4, 98, 5, 6, 7];

const removeElementByValue = (array, index) => {
  array.splice(array.indexOf(index), 1);
};

removeElementByValue(array, 98);
console.log(array);
