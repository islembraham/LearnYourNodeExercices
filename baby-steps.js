/* console.log(process.argv)
var  [first,second, ...rest] = process.argv;  
console.log(rest);
var rest = rest.map(Number);
const sum = rest => rest.reduce( ( p, c ) => (p + c), 0 )
console.log(sum(rest));
 */
var result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)
