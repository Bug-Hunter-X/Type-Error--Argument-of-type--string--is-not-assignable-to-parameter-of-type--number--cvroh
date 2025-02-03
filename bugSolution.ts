function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    // Handle non-number inputs, for example by throwing an error or returning a default value
    throw new Error("Arguments must be numbers");
  }
}

let result1 = addSafe(5, 5); // valid
let result2 = addSafe("hello", 5); // throws an error 
let result3 = addSafe(5, "world"); // throws an error