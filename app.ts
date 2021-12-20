function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResults(num: number): void {
  console.log("Result: " + num);
}

console.log(printResults(add(5, 12)));
