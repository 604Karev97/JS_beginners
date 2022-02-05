let basket = [];
let cookies = ['печеньки', 79, 3],
    soda = ['водичка', 50, 1],
    burger = ['биг-тейсти', 230, 5],
    patato = ['картошечка', 80, 1],
    gum = ['жвачка', 30, 2];

basket = [cookies, burger, soda, patato, gum];

function countBasketPrice(basket) {
    let sumPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        sumPrice += basket[i][1] * basket[i][2];
    }
    return sumPrice;
}

console.log(countBasketPrice(basket));