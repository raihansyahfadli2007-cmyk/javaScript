let max = Number(prompt("Input Nilai Max:"));

for (let i = max; i >= 1; i--) {
    let hasil = "";

    for (let j = 1; j <= i; j++) {
        hasil += i;
    }

    console.log(hasil);
}
