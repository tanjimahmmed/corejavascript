// reduce function
var arr = [5, 9, 1, 3, 4, 6, 7];

// var sum = 0;
// for(var i=0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log('sum is = ' + sum);

var result = arr.reduce(function(a, b){
    return a+b;
});
console.log('Result = ' + result);
