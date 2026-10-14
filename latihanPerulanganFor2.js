let max = Number(prompt("Input Nilai Max:"));

if (max > 0) {
    
    // Bagian turun
    for (let i = max; i >= 1; i--) {
        let baris = "";

        for (let j = 1; j <= i; j++) {
            baris += i;
        }

        console.log(baris);
    }

    // Bagian naik
    for (let i = 2; i <= max; i++) {
        let baris = "";

        for (let j = 1; j <= i; j++) {
            baris += i;
        }

        console.log(baris);
    }
} else {
    console.log("Masukkan angka lebih dari 0!");
}
