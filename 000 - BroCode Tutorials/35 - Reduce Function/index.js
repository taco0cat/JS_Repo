// .reduce() - reduce elements of an array to a single value

const scores = [75, 50, 90, 80, 65, 95];
const maximum = scores.reduce(getMax);
const minimum = scores.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(previous, next){
    return Math.max(previous, next);
}

function getMin(previous, next){
    return Math.min(previous, next);
}