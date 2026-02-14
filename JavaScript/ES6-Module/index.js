// ES6 Module = An External file that contains reuseable code that can be imported into other JavaScript files.
//              Write reuseable code for many different apps.
//              Can contain variabeles, classes, functions ... and more
//              introduced as part of ECMAScript 2015 update


import {PI, getCircumference, getArea} from './mathUtil.js'


console.log(PI)

const Circumference = getCircumference(10);
const area = getArea(10);


console.log(Circumference)
console.log(area)