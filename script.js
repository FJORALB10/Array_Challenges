// Always Hungry

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);
var arr = [3.14, "food", "pie", true, "food"];
var arr2 = [4, 1, 5, 7, 2];
function alwaysHungry(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
      count++;
    }
  }
  if (count == 0) {
    console.log("I'm hungry");
  }
}

// High Pass Filter

function highPass(arr, cutoff) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// Better than average

function betterThanAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      count++;
    }
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// Array Reverse

function reverse(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// Fibonacci Array

function fibonacciArray(n) {
  var fibArr = [0, 1];
  for (var i = 2; i < n; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }
  return fibArr;
}
var result = fibonacciArray(10);
console.log(result);
