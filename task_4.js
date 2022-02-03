function printNums (num){
    let msg = '';
    switch (num){
        case 1: msg += (1 + ' ');
        case 2: msg += (2 + ' ');
        case 3: msg += (3 + ' ');
        case 4: msg += (4 + ' ');
        case 5: msg += (5 + ' ');
        case 6: msg += (6 + ' ');
        case 7: msg += (7 + ' ');
        case 8: msg += (8 + ' ');
        case 9: msg += (9 + ' ');
        case 10: msg += (10 + ' ');
        case 11: msg += (11 + ' ');
        case 12: msg += (12 + ' ');
        case 13: msg += (13 + ' ');
        case 14: msg += (14 + ' ');
        case 15: msg += (15 + ' '); break;
        default: msg = 'Парам пам пам';
    }
    console.log(msg);
}

printNums(7);