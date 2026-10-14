
function konversiNilai(huruf) {
    const nilai = {
        "A": 4.00,
        "A-": 3.75,
        "B+": 3.50,
        "B": 3.00,
        "B-": 2.75,
        "C+": 2.50,
        "C": 2.00,
        "C-": 1.75,
        "D": 1.50,
        "E": 1.20
    };

    return nilai[huruf.toUpperCase()] ?? null;
}

function predikat(rataRata) {
    if (rataRata >= 3.50) {
        return "A";
    } else if (rataRata >= 3.00) {
        return "B";
    } else if (rataRata >= 2.00) {
        return "C";
    } else if (rataRata >= 1.50) {
        return "D";
    } else {
        return "E";
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
let jumlah = 0;

function inputNilai() {
    rl.question(
        "Masukkan Kategori Nilai (Tekan Enter Untuk Berhenti): ",
        function(huruf) {
            huruf = huruf.trim();

            if (huruf === "") {
                if (jumlah > 0) {
                    const rataRata = total / jumlah;

                    console.log(
                        `Rata-rata nilainya adalah ${rataRata.toFixed(2)} ` +
                        `dengan Predikat ${predikat(rataRata)}`
                    );
                } else {
                    console.log("Belum ada nilai yang dimasukkan.");
                }

                rl.close();
                return;
            }

            const angka = konversiNilai(huruf);

            if (angka === null) {
                console.log("Kategori nilai tidak valid!");
            } else {
                console.log(`Nilai angka: ${angka.toFixed(2)}`);
                total += angka;
                jumlah++;
            }

            inputNilai();
        }
    );
}

inputNilai();
