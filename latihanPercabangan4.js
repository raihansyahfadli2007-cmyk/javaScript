let sisiA = Number(prompt("Masukkan sisi A:"));
let sisiB = Number(prompt("Masukkan sisi B:"));
let sisiC = Number(prompt("Masukkan sisi C:"));

let hasil;

// Cek apakah membentuk segitiga
if (sisiA <= 0 || sisiB <= 0 || sisiC <= 0 ||
    sisiA + sisiB <= sisiC ||
    sisiA + sisiC <= sisiB ||
    sisiB + sisiC <= sisiA) {

    hasil = "Bukan Segitiga";

} 
// Cek siku-siku
else if (
    sisiA ** 2 + sisiB ** 2 === sisiC ** 2 ||
    sisiA ** 2 + sisiC ** 2 === sisiB ** 2 ||
    sisiB ** 2 + sisiC ** 2 === sisiA ** 2
) {

    hasil = "Segitiga Siku-siku";

}
// Cek sama sisi
else if (sisiA === sisiB && sisiB === sisiC) {

    hasil = "Segitiga Sama Sisi";

}
// Cek sama kaki
else if (sisiA === sisiB || sisiA === sisiC || sisiB === sisiC) {

    hasil = "Segitiga Sama Kaki";

}
// Jika semua sisi berbeda
else {

    hasil = "Segitiga Sembarang";
}

console.log("Hasil: " + hasil);

// 5    5	5	Sama Sisi
// 5	5	3	Sama Kaki
// 1	2	3	Bukan Segitiga
// 4	5	6	Sembarang
// 3	4	5	Siku-siku