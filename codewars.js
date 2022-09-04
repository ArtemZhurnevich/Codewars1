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


[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)



// Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str){
  return str.split(' ').reverse().join(' '); // reverse those words
}

// Given a number n, return the number of positive odd numbers below n, EASY!
function oddCount(n) {
  return Math.floor(n/2)}

  // второе решение
  function oddCount(n) {
    const newArr = [];
  
     for (let i = 0; i < n; i++) {
       if (i % 2 !== 0) {
        newArr.push(i);
      } 
     }
   return newArr.length; }


  //  Messi goals function
  //  Messi is a soccer player with goals in three leagues:
   
  //  LaLiga
  //  Copa del Rey
  //  Champions
  //  Complete the function to return his total number of goals in all three leagues.
   
  //  Note: the input will always be valid.
   
  //  For example:
   function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }


  // Gravity Flip
  const flip=(d, a)=>{
  
    return d === "R" ? a.sort(function(x, y){return x-y}) : a.sort(function(x, y){return y-x})
  }


  // Exclamation marks series #1: Remove an exclamation mark from the end of string
  // Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
  function remove(s){
    return s[s.length-1] == '!' ? s.slice(0, s.length-1) : s;
  }

  // Twice as old
  function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }

  // Beginner - Reduce but Grow
  function grow(x){
    let result = 1;
    for (i=0; x.length > i; i++){
     result = result  * x[i];
    }
    return result
  }




  // Safen User Input Part I - htmlspecialchars
  // первое решение неправильное было из за ифов простых
  function htmlspecialchars(formData) {
    let result = '';
    for (i=0; i<formData.length; i++){
      if (formData[i] === '>') {
       result = result + '&gt;'
      }
      if (formData[i] === '<') {
        result = result + '&lt;'
      }
      if (formData[i] === "''") {
       result = result + '&quot;'
      }
      if (formData[i] === '&') {
        result = result + '&amp;'
      } else result = result + formData[i];
      return result
    }
      
  }

  function htmlspecialchars(formData) {
    let result = '';
    for (i=0; i<formData.length; i++){
      if (formData[i] === '>') {
       result = result + '&gt;'
      }
     else if (formData[i] === '<') {
        result = result + '&lt;'
      }
     else if (formData[i] === '"') {
       result = result + '&quot;'
      }
      else if (formData[i] === '&') {
        result = result + '&amp;'
      } 
      else result = result + formData[i];
      
    }
      return result;
  }

  // For Twins: 1. Types
  function typeValidation(variable, type) {
    if (typeof variable === type) {
      return true
    } else return false;
  }

  // 8 kyu
// Grasshopper - Check for factor
function checkForFactor (base, factor) {
  return base % factor == 0 ? true : false;
}


// Grasshopper - Debug
function weatherInfo (temp) {
  var c = convertToCelsius(temp);
  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = ((temperature) - 32) * (5/9)
  return celsius
}




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


