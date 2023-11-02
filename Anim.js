//Задачи с ШП

/*
let Kg = prompt('Введите число килограмм');
alert((Kg - Kg%1000) / 1000);
*/

/*
let Amur = prompt('Введите номер полка');
alert(Math.floor(Amur/2000 + 1));
alert(Math.floor((Amur - Math.floor(Amur/2000) * 2000) / 200) + 1);
*/

/*
let N = prompt('Введите кол-во задач в разделе: ');
let M = prompt('Введите номер задачи в учебнике: ');
alert(Math.floor(M/N) + 1);
*/

//Проверка чисел не простоту

/*
function IsPrimes(n) {
	let CheckPrimary = true;
	for (let i = 2; i < n; ++i){
		if(n % i == 0){
			CheckPrimary = false;
		}
	}

	return CheckPrimary;
}

//Задание номер 3

let myArray = new Array();
let N = prompt('Введите число, чтобы узнать сколько между 0 и этим числом простых чисел:')
for (let i = 2; i <= N; ++i){
	if(IsPrimes(i)){
		myArray.push(i);
	}
}
console.log(myArray);
*/

//Задание номер 4

/*
var createCounter = function(init){
    let newVal = init;
    return{
        increment: function(){
            return ++newVal;
        },
        decrement: function(){
            return --newVal;
        },
        reset: function(){
			newVal = init
            return newVal;
        }
    }
};
var counter = createCounter(5);
console.log(counter.increment()); // Выводит undefined
console.log(counter.reset()); // Выводит undefined
console.log(counter.decrement()); // Выводит undefined
*/

//Задание номер 5

/*
var map = function(arr, fn){
	let newArray = [];
	for(let i = 0; i < arr.lenght; ++i){
		newArray[i] = push(fn(arr[i]));
	}
	return newArray;
}
function plusone(n) { return n + 1; }
arr = [1, 2, 3];


function applyTransformation(arr, fn) {
	const transformedArray = [];
	
	for (let i = 0; i < arr.length; i++) {
	  transformedArray.push(fn(arr[i], i));
	}
	
	return transformedArray;
  }
  
  // Пример использования
  const arr = [1, 2, 3];
  const fn = function(element, index) {
	return element * index;
  };
  
  const transformedArray = applyTransformation(arr, fn);
  console.log(transformedArray); // Выводит [0, 2, 6]
*/

//Задание номер 6


/*
var filter = function(arr, fn) {
    filteredArr = [];
	for(let i = 0; i < arr.length; ++i){
		if(fn(arr[i], i) == 1)
		filteredArr.push(fn(arr[i], i));
	}
	return filteredArr;
};


function filterArray(arr, fn) {
	const filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
	  if (fn(arr[i], i)) {
		filteredArr.push(arr[i]);
	  }
	}
	return filteredArr;
  }

*/