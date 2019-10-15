// function hello(name){
//     print(name);
//     print('something else');
// }
// function print(you){
//     console.log(you); 
// }
// hello('Md Tanjim Ahmmed');

function hello(name, print){
    print(name);
}
// hello('Md Tanjim Ahmmed',print)

// function print(you){
//     console.log(you);  
// }

// hello('Md Tanjim',function(name){
//     console.log('hello ' + name);
// });

// hello('Md Tanjim', function(name){
//     console.log('hi, how are you ' + name+'?');
// });

// hello('Twinkle Cats', function(name){
//     console.log('Lenght of '+name+ ' is = '+ name.length);
// });

// var me = {
//     name: 'Md Tanjim Ahmmed',
//     age : 20,
//     email : 'tanjimahmmed.8@gmail.com'
// }

// function printMySelf(person, callback){
//     console.log('person: ' + person.name+'('+ person.age +')');
//     if(person.age >= 18){
//         callback(person.email);
//     }else{
//         console.log('you are to little.....');
        
//     }
    
// }
// printMySelf(me, function(email){
//     console.log('Email sent to ' + email);
    
// });
function print(data, callback1, callback2){
    console.log('orginal data: ' + data);
    callback1(data);
    callback2(data);
}

print('Java Script is awesome language ',function (data){
    var data = data.toUpperCase();
    console.log('Uppercase: ' + data);
    
}, function(data){
    var data = data.toLowerCase();
    console.log('Lowercase: ' + data);
    console.log('Lenght:' + data.length);
});