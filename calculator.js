function add( num1, num2){
    return num1 + num2
}
function subTract( num1, num2){
    return num1 - num2
}
function multiply( num1, num2){
    return num1 * num2
}
function devide( num1, num2){
    return num1 / num2
} 
function calculator(a,b,operation ){
    if( operation === "add"){
        const result = add (a,b);
        return result
    } else if ( operation ==="subtract"){
        const result = subTract (a,b)
        return result
    } else if ( operation === "multiply"){
        const result = multiply (a,b)
        return result
    } else if( operation === "devide"){
        const result = devide (a,b)
        return result
    }
    else {
        return " only 'add ', 'subtract', 'multiply', 'devide' operation is allowed.  "
    }
}
const result = calculator(8,9, 'devide')
console.log(result)