const a = [1, 2, 3, 4, 5];
const b = [11, 12, 13, 14, 15];

a.forEach(function (zahl) {
    if (zahl % 2 == 0) {
        for (let i = 0; i < a.length; i++)
            if (a[i] === zahl) {
                a.splice(i, 1);  // Entfernt das Element an Index i
                break;
            }
    }

})
console.log(a);
