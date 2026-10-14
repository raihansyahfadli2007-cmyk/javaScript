let ulangi;

do {
    let sisiA = Number(prompt("Masukkan Sisi A:"));
    let sisiB = Number(prompt("Masukkan Sisi B:"));
    let sisiC = Number(prompt("Masukkan Sisi C:"));

    let hasil;

    // Memeriksa apakah membentuk segitiga
    if (
        sisiA <= 0 || sisiB <= 0 || sisiC <= 0 ||
        sisiA + sisiB <= sisiC ||
        sisiA + sisiC <= sisiB ||
        sisiB + sisiC <= sisiA
    ) {
        hasil = "Bukan Segitiga";
    }
    // Segitiga sama sisi
    else if (sisiA === sisiB && sisiB === sisiC) {
        hasil = "Segitiga Sama Sisi";
    }
    // Segitiga sama kaki
    else if (
        sisiA === sisiB ||
        sisiA === sisiC ||
        sisiB === sisiC
    ) {
        hasil = "Segitiga Sama Kaki";
    }
    // Segitiga siku-siku
    else if (
        sisiA ** 2 + sisiB ** 2 === sisiC ** 2 ||
        sisiA ** 2 + sisiC ** 2 === sisiB ** 2 ||
        sisiB ** 2 + sisiC ** 2 === sisiA ** 2
    ) {
        hasil = "Segitiga Siku-siku";
    }
    // Segitiga sembarang
    else {
        hasil = "Segitiga Sembarang";
    }

    console.log("Merupakan " + hasil);

    ulangi = prompt("Ingin mengulanginya lagi? (Y/N)");

} while (ulangi && ulangi.toUpperCase() === "Y");

console.log("Program Berhenti");
console.log("Terima kasih telah menggunakan program saya ^^");
