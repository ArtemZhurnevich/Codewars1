// ЗАДАЧА https://www.codewars.com/kata/merge-two-sorted-arrays-into-one
var ArrowFunc = function(arr) {
  return arr.map(item => String.fromCharCode(item)).join(''); //Complete this function
}
// другие вариант решения
const ArrowFunc = (arr) => String.fromCharCode(...arr);
// -------
var ArrowFunc = arr => String.fromCharCode.apply(String, arr);



//ЗАДАЧА https://www.codewars.com/kata/merge-two-sorted-arrays-into-one
let arr1 = [5, 22, 132, 132, 14]
let arr2 = [5, 6, 7, 7, 8]

let arr3 = arr1.concat(arr2);
function compareNumeric (a, b) {
      if (a>b) return 1;
      if (a==b) return 0;
      if (a<b) return -1;
    }
console.log(arr3.sort(compareNumeric));
let result = [];
for (i=0; i < arr3.length; i++){
  
  if (arr3[i] != arr3[i+1]){
    result.push(arr3[i]);
  }
}
console.log(result);


// задача https://www.codewars.com/kata/16-plus-18-equals-214
function add(num1, num2) {
  let arr1 = num1.toString().split('')
  let arr2 = num2.toString().split('')//превратили первое и второе числа в СТРОКУ а затем СТРОКУ в МАССИВ СТРОК
    
  let result = [] //создали пустой массив
  while (arr1.length > 0 || arr2.length > 0) {
    //создали цикл: пока длина первого или второго МАССИВОВ ЧИСЕЛ больше 0
      let el1 = arr1.pop() 
      let el2 = arr2.pop()//создали новый массив чисел который будет равен первому но каждую итерацию цикла  будет 
      //меньше на одну цифру благодрая методу pop который удаляет последний элемент в массиве и возвращает его
      //значение (цифру) (если массив пуст то возвращает undefined ..т.е true)
    let temp = (el1 ? +el1 : 0) + (el2 ? +el2 : 0)
    //temp будет равен числу
    result.push(temp)
    //число пушим в массив 
  }
  return +result.reverse().join('')
  //возвращаем перевернутый массив который превращаем в строку с помощью Join и затес эту строку превращаем в число +
}

// ЗАДАЧА https://www.codewars.com/kata/add-property-to-every-object-in-array
// мое решение 
for (i=0; i<questions.length; i++){
  questions[i].usersAnswer = null;

}
// решение с помощью метода массива 
questions.forEach(function (i) {
  i.usersAnswer = null;
});






















//ЗАДАЧИ ЭДГАРА

function countDevelopers(list) {
  if (list.find(item => item.continent === 'Europe' && item.language === "JavaScript")){
    return 1;
  } 
  else return 0
 }
 // другие вариант решения
 function countDevelopers(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}

function countDevelopers(list) {
  return list
    .filter(dev => dev.language === "JavaScript")
    .filter(dev => dev.continent === "Europe")
    .length
}


