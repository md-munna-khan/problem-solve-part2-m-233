const height = [56,87,90,45,78,34,99];

function getMax(numbers){
    let max = numbers [0]
for(const num of numbers){
    if(num > max){
        max = num;
    }
}
return max
}
const result = getMax(height);
console.log(result)