function repeatFunction(fn: (num: number) => void, times: number): void {
  for (let i = 0; i < times; i++) {
    fn(i);
  }
}

repeatFunction(console.log, 2);

function applyFunctions(
  fn1: (val: number) => number,
  fn2: (val: number) => number,
  value: number,
): number {
  return fn2(fn1(value));
}

const double = (num: number) => num * 2;
const increment = (num: number) => num + 1;

console.log(applyFunctions(double, increment, 5));
console.log(applyFunctions(increment, double, 5));
