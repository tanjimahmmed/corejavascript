// closer function
// var name = 'Md Tanjim';
// function sayName(){
//     console.log('hello, ' + name);
// }
// console.dir(sayName);
// sayName();


function greeting(msg){
    return function(name){
        console.log(msg + ' '  + name);
        
    }
}
var hello = greeting('hello');
hello('tanjim');