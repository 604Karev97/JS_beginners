let n = 100, arrNums = [];
for (let i = 0; i < n; arrNums[i] = i++) {
}

delete arrNums[1];

let i = 2, j;
while (i <= n) {
    if (arrNums[i] !== 0) {
        j = i * 2;
        while (j <= n){
            delete arrNums[j];
            j += i;
        }
    }
    i++;
}

for (let i = 0; i < n; i++){
    if (arrNums[i]) console.log(i);
}