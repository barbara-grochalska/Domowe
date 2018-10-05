function add(a, b) {
  return a + b;
}
// tutaj zaimplementuj wszystkie funkcje

//1
function evenOrOdd(input){
  if(input % 2){
    return 'odd';

  } else {
    console.log('even');
      return 'even';
  }
};

//2
function previousAndNext(n){
  return {
    previous: n-1,
    next: n+1,
  }
};

//3
function secondsToHHMMSS(time){
 var hour = time/(60*60);
 hour = Math.floor(hour);
 
}

//4

// funkcja została zadeklarowana ze względu na testy
// nic nie zmieniaj; dodaj jedynie implementację zamiany zmiennych

function swapVariables(first, second) { // nie zmieniaj kolejności ani nazw
  // tytaj implementacja
 
  third = first;
  first = second;
  second = first;

  swapVariablesCalled(first, second); // tego nie ruszaj
}

//5
function minOfThreeNumbers (a, b, c){
  if (a <= b && a <= c) {
      return a;

  } else if (b <= a && b <= c) {
      return b;

  } else {
      return c;
  }

};

console.log (minOfThreeNumbers(10,3,24));
 
//6
 function areNumbersDescending (a,b,c,d,e){
  if (a >= b >= c >= d >= e) {
    return true; 

  } else {
    return false;
  }
 };

 areNumbersDescending(100, 55, 2,-1,-4);

 //7
 function hasOneByOneDigit(anyNumber) {

    var anyNumberString = anyNumber.toString();
    // 123 -> "123"
    var firstNumberString = anyNumberString.charAt(0);
    // "123" -> "1"
    var firstNumber = parseInt(firstNumberString);
    // "1" -> 1
    var secondNumber = parseInt(anyNumberString.charAt(1));
    var thirdNumber = parseInt(anyNumberString.charAt(2));
    //charAt , jak Array wybiera index
  
  if (firstNumber + 1 == secondNumber && secondNumber + 1 == thirdNumber) { 
      return true;
    
  } else if ( firstNumber - 1 ==secondNumber && secondNumber-1 == thirdNumber) {
      return true;

  } else {
      return false;
  }
 };
 hasOneByOneDigit(234);
 
 //8

 function daysInMonth(month, year){
   if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
      return 31;

   } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      return 30;

   } else {
     if ((year % 4 == 0 && year % 100 !==0) || year % 400 ==0) {
      return 29;

     }
      return 28;
    }
 };


// TESTY
function tests(a) { let b = 0; for (let c in a) { let d = a[c]; try { d(), console.log('Test:', c, 'OK') } catch (f) { b++ , console.error('Test:', c, 'FAILED', f), console.error(f.stack) } } } function fail(a) { throw new Error('fail(): ' + a) } function assert(a, b) { if (!a) throw new Error('assert(): ' + b) } function assertEquals(a, b) { if (a != b) throw new Error('assertEquals() "' + a + '" != "' + b + '"') } function assertStrictEquals(a, b) { if (a !== b) throw new Error('assertStrictEquals() "' + a + '" !== "' + b + '"') }
function range(a, b) {
  return Math.round(Math.random() * (a - b) + b);
}
function shuffle(arr) {
  return arr.sort(() => 1 - range(0, 2));
}
let swapVariablesCalledResult;
function swapVariablesCalled(first, second) {
  swapVariablesCalledResult = { first, second };
}



tests({
  'add(1, 2) returns 3': () => {
    assertEquals(add(1, 2), 3);
  },
  'evenOrOdd(n * 2 - 1) returns "odd"': () => {
    assertEquals(evenOrOdd(range(-999, 999) * 2 - 1), 'odd');
  },
  'evenOrOdd(n * 2) returns "even"': () => {
    assertEquals(evenOrOdd(range(-999, 999) * 2), 'even');
  },
  'previous of n is n-1': () => {
    const number = Math.floor(Math.random() * (-9999 - 9999 + 1)) + 9999;
    const result = previousAndNext(number);
    assertEquals(result.previous, number - 1);
  },
  'next of n is n+1': () => {
    const number = Math.floor(Math.random() * (-9999 - 9999 + 1)) + 9999;
    const result = previousAndNext(number);
    assertEquals(result.next, number + 1);
  },
  'secondsToHHMMSS(3661) returns "01:01:01"': () => {
    assertEquals(secondsToHHMMSS(3661), '01:01:01');
  },
  'secondsToHHMMSS(9876) returns "02:44:36"': () => {
    assertEquals(secondsToHHMMSS(9876), '02:44:36');
  },
  'swapVariables(x, y) returns { first: y, second: x }': () => {
    const x = range(1, 9);
    const y = x * range(1, 9);
    swapVariables(x, y);
    assertEquals(swapVariablesCalledResult.first, y);
  },
  'minOfThreeNumbers(a, b, c) returns a if a < b < c': () => {
    const a = range(1, 10);
    const b = range(11, 100);
    const c = range(101, 999);
    assertEquals(minOfThreeNumbers(...shuffle([a, b, c])), a);
  },
  'areNumbersDescending(a, b, c, d, e) returns true if a <= b <= c <= d <= e': () => {
    const arr = new Array(5).fill().map(x => range(-999, 999)).sort((a, b) => b - a);
    assertEquals(areNumbersDescending(...arr), true);
  },
  'areNumbersDescending(a, b, c, d, e) returns false if !(a <= b <= c <= d <= e)': () => {
    const arr = new Array(5).fill().map(x => range(-999, 999)).sort((a, b) => a - b);
    assertEquals(areNumbersDescending(...arr), false);
  },
  'hasOneByOneDigit one of 123,234,345,456,567,678,789,987,876,765,654,543,432,321,210 returns true': () => {
    const input = shuffle([123, 234, 345, 456, 567, 678, 789, 987, 876, 765, 654, 543, 432, 321, 210])[0];
    assertEquals(hasOneByOneDigit(input), true);
  },
  'hasOneByOneDigit not one of 123,234,345,456,567,678,789,987,876,765,654,543,432,321,210 returns false': () => {
    const n = [123, 234, 345, 456, 567, 678, 789, 987, 876, 765, 654, 543, 432, 321, 210];
    let input;
    do {
      input = range(100, 999);
    } while (n.indexOf(input) > -1);
    assertEquals(hasOneByOneDigit(input), false);
  },
  'daysInMonth one of (2,1884), (2,2004), (2,1660), (2,2568) returns 29': () => {
    const input = shuffle([[2, 1884], [2, 2004], [2, 1660], [2, 2568]])[0];
    assertEquals(daysInMonth(...input), 29);
  },
  'daysInMonth one of (2,1882), (2,2006), (2,1666), (2,2570) returns 28': () => {
    const input = shuffle([[2, 2006], [2, 1666], [2, 2570], [2, 1882]])[0];
    assertEquals(daysInMonth(...input), 28);
  },
  'daysInMonth one of (1,1775), (7,2012), (8,1999), (12,2345) returns 31': () => {
    const input = shuffle([[1, 1775], [7, 2012], [8, 1999], [12, 2345]])[0];
    assertEquals(daysInMonth(...input), 31);
  },
  'daysInMonth one of (4,1775), (6,2012), (9,1999), (11,2345) returns 30': () => {
    const input = shuffle([[4, 1775], [6, 2012], [9, 1999], [11, 2345]])[0];
    assertEquals(daysInMonth(...input), 30);
  }
});