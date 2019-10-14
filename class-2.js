// function name(firstName, lastName, gendar){
//     var output;
//     if (gendar === 'male'){
//         output = 'Mr.' + firstName + lastName;
//     }else if (gendar === 'female'){
//         output = 'Ms.' + firstName + lastName;
//     }
//     return output;
// }
// var fullname = name('Tanjim', ' Ahmmed','male');
// console.log(fullname);

function example (){
    return {
        name: 'Md Tanjim',
        language:'language',
        skil:['JavaSCript','Python'],
        print: function(){
            console.log(this.name, this.language, this.skil); 
        }
    }
}
var obj = example();
obj.print();