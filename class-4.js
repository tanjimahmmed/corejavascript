// statement function
// function name(firstname, lastname, gender){
//     var output;
//     if(gender === 'male'){
//         output = 'mr.' + firstname + lastname;
//     }else if(gender === 'female'){
//         output = 'ms.' + firstname + lastname;
//     }
//     return output
// }
// var fullname = name ('tanjim', 'ahmmed', 'male')
// console.log(fullname);


function output(){
    return {
        name : 'tanjim',
        skill : ['java'],
        print: function(){
            console.log(this.name,this.skill);
            
        }
    }
}
var obj = output();
obj.print();