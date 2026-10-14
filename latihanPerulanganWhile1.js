do {
    let angka = Number(prompt("Masukkan Angka Bebas:"));

    if (angka % 2 == 0) {
        console.log("Angka " + angka + " merupakan genap");
    } else {
        console.log("Angka " + angka + " merupakan ganjil");
    }

    var ulang = prompt("Ingin mengulanginya lagi? (Y/N):");

} while (ulang.toUpperCase() == "Y");

console.log("Program Berhenti");
console.log("Terima kasih telah menggunakan program saya ^^");
