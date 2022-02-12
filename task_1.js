function convertNum (num) {
    if (num > 999) {
        console.log('Число больше 3х разрядов.');
        return {};
    } else return {
        ['сотни']: Math.floor(num / 100),
        ['десятки']: Math.floor(num % 100 / 10),
        ['единицы']: Math.floor(num % 100 % 10)
    };
}

for (let i = 0; i < 100; i++){
    let num = Math.floor(Math.random()*10000);
    console.log(num);
    console.log(convertNum(num));
}