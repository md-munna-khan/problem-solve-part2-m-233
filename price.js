function shirtQuantity(tshirt,pant,jins){
const perShirt =4;
const perpant =8;
const perjins = 10;

const perTotalShirt =tshirt * perShirt;
const perTotalpant =pant * perpant;
const perTotalJins =jins * perjins;
const totalPrice = perTotalShirt + perTotalJins+perTotalpant;
return totalPrice
}
const price= shirtQuantity(300,500,700);
console.log(price);