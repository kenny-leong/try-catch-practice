// 1.
function sum(array) {
  if (Array.isArray(array)) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } else {
    throw new Error ('Give me an array!')
  }
}


try {
  let res = sum(null);
  console.log(res);
} catch (error) {
    console.error(error.name + ': ' + error.message)
}


// 2.
// tests
try {
  sayName("Alex");
  sayName(1);
} catch (error) {
    console.error(`${error.name}: ${error.message}`)
}

// Your code here
function sayName(str) {
  if (typeof str === 'string') {
    console.log(str)
  } else {
    throw new Error ('Give me a string!')
  }
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
} catch (error) {
  console.error(`${error.name}: ${error.message}`)
}
