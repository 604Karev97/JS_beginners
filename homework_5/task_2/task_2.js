let basket = {
    products: {
        'banana': [0, 50],
        'apple': [0, 65],
        'pineapple': [0, 100],
        'grape': [0, 95],
        'cherry': [0, 150],
        'strawberry': [0, 300],
        'orange': [0, 40]
    },
    countBasketPrice: function () {
        let sumPrice = 0;
        for (let prop in this.products) {
            sumPrice += this.products[prop][0] * this.products[prop][1];
        }
        return sumPrice;
    },
    countBasketItems: function () {
        let count = 0;
        for (let prop in this.products) {
            count += this.products[prop][0];
        }
        return count;
    }
};

let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (buttons[i].className === 'button-primary plus') {
            plusFunction(buttons[i].getAttribute('data-id'));
        }
        else if (buttons[i].className === 'button-primary minus') {
            minusFunction(buttons[i].getAttribute('data-id'));
        }
        else if (buttons[i].className === 'basket') {
            printBasket();
        }
    });
}

function plusFunction(id){
    basket.products[id][0]++;
}

function minusFunction(id){
    if (basket.products[id][0] !== 0) basket.products[id][0]--;
}

function printBasket(){
    if (basket.countBasketPrice() === 0) {
        alert('Корзина пуста.');
    }
    else {
        alert(`В корзине ${basket.countBasketItems()} товаров на сумму ${basket.countBasketPrice()} рублей.`);
    }
}

console.log(basket.countBasketPrice());
console.log(basket.countBasketItems());

