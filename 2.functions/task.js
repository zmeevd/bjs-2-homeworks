//Задача 1

function getArrayParams(...arr) {
	let min;
	let max;
	let sum;
	let avg;

	for (let i = 0; i < arr.length; i++) {
		min = Math.min(...arr);
		max = Math.max(...arr);
		sum = arr.reduce((prev, item) => {
			return prev + item
		}, 0);
		avg = sum / arr.length;
		avg = +(avg.toFixed(2));
		//console.log(min, max, sum, avg);
	};
	return {
		min: min,
		max: max,
		avg: avg
	};
}
//getArrayParams(1, 2, 3, 4);

//Задача 2


function summElementsWorker(...arr) {
	let sum;
	if (arr.length === 0) {
		return 0;
	};
	for (let i = 0; i < arr.length; i++) {
		sum = arr.reduce((prev, item) => {
			return prev + item
		}, 0);
		//console.log("Сумма: " + sum);
	};
	return sum;
};

function differenceMaxMinWorker(...arr) {
  let min;
  let max;
  if (arr.length === 0) {
	return 0;
};
  for (let i = 0; i < arr.length; i++) {
		min = Math.min(...arr);
		max = Math.max(...arr);
		//console.log("Разница: " + (max - min));
	};
  return (max - min);
};

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
	return 0;
};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    };
};
	//console.log("Четные: " + sumEvenElement, "Нечетные: " + sumOddElement);
    //console.log("Разность: " + (sumEvenElement - sumOddElement));
  return (sumEvenElement - sumOddElement);
};
//differenceEvenOddWorker (1, 1, 1, 4)

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	if (arr.length === 0) {
		return 0;
	};
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement = sumEvenElement + arr[i];
			countEvenElement = countEvenElement + 1;
		} else {
			continue;
		};
	};
	return (sumEvenElement / countEvenElement);
};
//console.log(averageEvenElementsWorker (1, 2, 3, 4));


// Задача 3

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		};
	};
	return maxWorkerResult;
};
