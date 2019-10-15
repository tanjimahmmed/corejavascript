// Return Function

// function host(){
//     console.log('I am host function...');
//     return function(){
//         console.log('I am child');
//     }
// }
// var a = host();
// a();

function greeting(msg){
    return function(name){
        console.log(msg + ' ' + name);
        
    }
}
var good = greeting('Good Morning');
var hello = greeting('Hello');

hello('Md Tanjim');
good('hello world');