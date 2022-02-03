function foo(a, b) {
    if (a >= 0 && b >= 0) return a - b;
    else if (a < 0 && b < 0) return a * b;
    else if ((a >= 0 && b < 0) || (b >= 0 && a < 0)) return a + b;
    else return 'Парам пам пам';
}
var a = 5;
var b = 12;

console.log(foo(a, b)); // -7
console.log(foo(-a, -b)); // 60
console.log(foo(-a, b)); // 7
console.log(foo(a, -b)); // -7