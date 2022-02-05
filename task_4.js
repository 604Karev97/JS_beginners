let nRows = 20; let msg = '';
for (let i = 0; i <= nRows; i++){
    for (let j = 0; j < i; j++){
        msg += 'x'
    }
    msg += '\n';
}
console.log(msg);