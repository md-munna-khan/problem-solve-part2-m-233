// function multiply(num1, num2){
// if(typeof num1 !== "number")
//     return "please provide a number"
// }
// const result = multiply('2',7);
// // console.log(result)

function fullName (first,second){
if( typeof first !== "strig"){
    return  "first name should be string"
} else  if( typeof second !== "strig"){
    return  "second name should be string"
}

    const full = first +  ' ' + second;
    return full
}

const total = fullName( "miunna");
console.log(total)  