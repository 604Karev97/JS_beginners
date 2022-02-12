// let basket = [];
// let cookies = ['печеньки', 79, 3],
//     soda = ['водичка', 50, 1],
//     burger = ['биг-тейсти', 230, 5],
//     patato = ['картошечка', 80, 1],
//     gum = ['жвачка', 30, 2];
//
// basket = [cookies, burger, soda, patato, gum];
//
// function countBasketPrice(basket) {
//     let sumPrice = 0;
//     for (let i = 0; i < basket.length; i++) {
//         sumPrice += basket[i][1] * basket[i][2];
//     }
//     return sumPrice;
// }
//
// console.log(countBasketPrice(basket));

let basket = {
    goods: {
        ['печеньки']: [79, 3],
        ['водичка']: [50, 1],
        ['биг-тейсти']: [230, 5],
        ['картошечка']: [80, 1],
        ['жвачка']: [30, 2]
        },
    countBasketPrice: function () {
        let sumPrice = 0;
        for (let prop in this.goods) {
                sumPrice += this.goods[prop][0] * this.goods[prop][1];
        }
            return sumPrice;
    }
}

console.log(basket);
console.log(basket.countBasketPrice());
