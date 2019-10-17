// for each function
var arr =[1 , 2, 3]
// arr.forEach(function(element, index, arr){
//     console.log('element is :' + element + ' Index = '+ index + ' arr :' + arr);
// });

// pure function
function loop(arr, callback){
    for (var i=0; i<arr.length; i++){
        callback(arr[i], i);
    }
}
loop(arr, function(element, i){
    console.log('Element is ' + element + ' index = '+ i);  
});