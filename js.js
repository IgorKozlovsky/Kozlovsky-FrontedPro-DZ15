// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наприклад:

// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

const array = [1, 2, 3, 4, 98, 5, 6, 7];

const removeElementByIndex = (array, index) => {
  return array.filter((e, i) => i !== index - 1);
};
const removeElementByValue = (array, value) => {
  return array.filter((e) => e !== value);
};
console.log("Удаление по индексу: ", removeElementByIndex(array, 6));
console.log("Удаление по значению: ", removeElementByValue(array, 98));
console.log("Начальный массив: ", array);
