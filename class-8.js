// var arr = [67, 80, 70, 55, 40, 30, 20, 6, 10];
// arr.sort(function(a,b){
// return b - a;
//     return a - b;
// });
// arr

var people = [
    { name: 'Md Tanjim', age: 20 },
    { name: 'Md Amir', age: 38 },
    { name: 'Md Mahbub', age: 30 },
    { name: 'Md Rajwan', age: 32 },
    { name: 'Imtiaz Mahamud', age: 19 },
    { name: 'Md Siyam', age: 17 }
]

// people.sort(function(a,b){
// return a.age - b.age;
//     return b.age - a.age;
// });
people.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
});
console.log(people);
