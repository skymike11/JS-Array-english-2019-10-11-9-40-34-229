// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof(a)) // "string"
console.log(typeof(b)) // "object"

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let i = 0 ; i < a.length; i++){
    a[i]*=2
}

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
let output1 = ''
let output2 = ''
let output3 = ''
colors.forEach((item)=>{
    if (output1 !== '') {
        output1+= ' ' + item
        output2+= '+' + item
        output3+= ',' + item
    } else {
        output1+=  item
        output2+=  item
        output3+=  item
    }
})
console.log(output1)
console.log(output2)
console.log(output3)

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((a, b) => b - a)

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let loc = []
let map = new Map()
for(let i = 0 ; i < a.length; i++){
    if (map.get(a[i]) === undefined ){
        map.set(a[i], 1)
    } else {
        map.set(a[i], map.get(a[i]) + 1)
    }
}
let max = 0
let maxValue = ''
map.forEach((value,key)=>{
        　　if (value > max) {
                max = value
                maxValue = key
            }
    　　　　}
);
console.log(maxValue)

