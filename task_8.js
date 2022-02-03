function deg(val, pow){
    return pow ? val * deg(val, pow-1) : 1;
}

console.log(deg(3, 4));