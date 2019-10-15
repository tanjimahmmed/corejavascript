// inner outer function
// function outer(){
//     var a = 10;
//     function inner(){
//         a;
//         console.log('Kolkata');

//     }
//     inner();
//     console.log('outer');

// }
// outer();

function add(a, b) {
    function sum() {
        return a + b;
    }
    function sub() {
        return a - b;
    }
    function times() {
        return a * b;
    }
    function div() {
        return a / b;
    }
    return sum() + sub() + times() + div();
}
var result = add(10, 5);
console.log(result);


// function add(a, b){
//     function sum(){
//         return a + b;
//     }
//     return sum();
// }
// var result = add (20, 20);
// console.log(result);

