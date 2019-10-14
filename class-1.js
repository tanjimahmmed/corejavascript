// functional java script
function sayName (name){
    return 'hello, ' + name;
}
// 1. A Function can be stored in a Variable * Passed
var hello = sayName;
// var fun =sayName('Md Tanjim');

// console.log(hello);
// console.log(fun);

// console.log(hello ('Md Tanjum'));

var anotherhello = hello;
console.log(anotherhello('Programar'));

// 2. A Function can be stored in an Array * Passed
var arr = [1, 2, 3, anotherhello, ('anything you want push in array')];
arr.push(sayName)
console.log(arr);

// 3. A Function can be stored as an Object Field or Property * Passed
var person = {
    name: 'Md Tanjim',
    sayname:hello,
    print:function(){
        console.log('hi');
        
    }
}
console.log(person);
person

// 4. We can create function as needed  * Passed

var sum = 10 + (function(){
    return 50
}) ();
console.log(sum);

// 5. We can pass function as an arguments  * passed
function wow(name, fun){
    return fun(name);
}
var result = wow('MR. Tanjim', sayName);
console.log(result);

// 6. We can return function from another function * passed

function base(b){
    return function (n){
        var result = 1;

        for(var i = 0; i < b; i++){
            result *= n;
        }
        return result;
    }
}

// var power = base(2);
// var result = power(5);

var result = base(3)(5);
result
