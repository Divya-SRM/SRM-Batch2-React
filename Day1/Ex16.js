const browsers = ['chrome', 'firefox', 'edge'];
browsers.push('safari', 'opera mini');
console.log("After push(safari,opera mini"+browsers); 
browsers.pop(); 
console.log("After pop"+browsers);
browsers.shift(); // "chrome"
console.log("After shift"+browsers);
browsers.unshift('safari');
console.log("After unshift"+browsers);
let colors = ['green', 'yellow', 'blue', 'purple'];
colors.splice(0, 3);
console.log(colors);
console.log(colors.join('-'));
const firstNumbers = [1, 2, 3];
const secondNumbers = [4, 5, 6];
let merged = firstNumbers.concat(secondNumbers);
console.log(merged);