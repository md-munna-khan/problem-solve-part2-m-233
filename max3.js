const mim = 78;
const jim = 96;
const tim = 90;

if(jim > mim && jim >tim){
    console.log("jim is the boss")
} else if( mim >tim && mim >jim){
    console.log("mim is the boss")
}else{
    console.log("tim is the boss")
}


// inside function
function getBoss(num1,num2,num3){
    if( num1 >num2 && num1>num3){
        return num1
    } else if( num2 > num1 && num2 >num3){
        return num2
    } else{
        return num3
    }
}
const boss =getBoss(1000,300,500);
console.log(boss)

const max = Math.max(87,45,87,97,34,5,67,45,7,8,57,)
console.log("max using math max", max)