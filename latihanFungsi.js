function identitas() {
    console.log("--------------------");
    console.log("| Raihansyah Fadli |");
    console.log("|       Bekasi     |");
    console.log("--------------------");
}

function tambah(a = 5, b = 5) {
    return a + b;
}

function kurang(a = 5, b = 5) {
    return a - b;
}

function bagi(a = 5, b = 5) {
    return a / b;
}

function kali(a = 5, b = 5) {
    return a * b;
}

function modulus(a = 5, b = 5) {
    return a % b;
}

identitas();

let menu;

while (true) {
    menu = prompt("Masukkan Menu (+|-|/|*|%|stop):");

    if (menu === null || menu.toLowerCase() === "stop") {
        console.log("Program Berhenti, Terima Kasih telah menggunakan program saya.");
        break;
    }

    if (!["+", "-", "/", "*", "%"].includes(menu)) {
        console.log("Menu tidak valid!");
        continue;
    }

    let nilai1 = Number(prompt("Masukkan Nilai 1:"));
    let nilai2 = Number(prompt("Masukkan Nilai 2:"));

    let hasil;

    switch (menu) {
        case "+":
            hasil = tambah(nilai1, nilai2);
            console.log(`Hasil Penjumlahan ${nilai1} + ${nilai2} adalah ${hasil}`);
            break;

        case "-":
            hasil = kurang(nilai1, nilai2);
            console.log(`Hasil Pengurangan ${nilai1} - ${nilai2} adalah ${hasil}`);
            break;

        case "/":
            if (nilai2 === 0) {
                console.log("Tidak bisa membagi dengan nol!");
            } else {
                hasil = bagi(nilai1, nilai2);
                console.log(`Hasil Pembagian ${nilai1} / ${nilai2} adalah ${hasil}`);
            }
            break;

        case "*":
            hasil = kali(nilai1, nilai2);
            console.log(`Hasil Perkalian ${nilai1} * ${nilai2} adalah ${hasil}`);
            break;

        case "%":
            hasil = modulus(nilai1, nilai2);
            console.log(`Hasil Modulus ${nilai1} % ${nilai2} adalah ${hasil}`);
            break;
    }
}
