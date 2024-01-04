import {formatCurrency} from "../scripts/utils/money.js"; //automated testing = using code to test code

//test cases all 3

//first: basic test case = tests if the code is working

console.log('test suite: formatCurrency'); //test suite = group of related tests

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

//second, third, fourth: edge cases = test with values that are tricky. 0 = special nr, 2000.5 requires rounding

console.log('works with 0');

if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}


console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5 === '20.01')) {
  console.log('passed');
} else {
  console.log('failed');
}


console.log('rounds down to the nearest cent');

if (formatCurrency(2000.4 === '20.00')) {
  console.log('passed');
} else {
  console.log('failed');
}