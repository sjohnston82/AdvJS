const total = process.argv.slice(2);
const reducer = (acc, curr) => acc + curr;
const nums = total.map((x) => Number(x));
const newArr = nums.reduce(reducer);

console.log(newArr);
