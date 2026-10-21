class Mahasiswa {
    constructor() {
        this._nama = null;
        this._nilai = null;
    }

    // Setter untuk nama
    set nama(nama) {
        this._nama = nama;
    }

    // Getter untuk nama
    get nama() {
        return this._nama;
    }

    // Setter untuk nilai
    set nilai(nilai) {
        this._nilai = nilai;
    }

    // Getter untuk nilai
    get nilai() {
        return this._nilai;
    }

    // Menghapus data
    hapus() {
        this._nama = null;
        this._nilai = null;
    }
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(pertanyaan) {
    return new Promise(resolve => {
        input.question(pertanyaan, resolve);
    });
}

async function main() {
    const mahasiswa = new Mahasiswa();
    let pilihan;

    do {
        console.log("\n===== Program OOP =====");
        console.log("1. Mendeklarasikan Objek");
        console.log("2. Menampilkan Objek");
        console.log("3. Merubah Nilai Objek");
        console.log("4. Menghapus Objek");
        console.log("5. Keluar Dari Program");

        pilihan = await tanya(
            "Masukkan Pilihan Berupa Angka (1/2/3/4/5): "
        );

        switch (pilihan) {
            case "1":
                mahasiswa.nama = await tanya("Masukkan Namamu: ");

                mahasiswa.nilai = Number(
                    await tanya("Masukkan Nilaimu: ")
                );

                console.log("Data Berhasil Ditambahkan");
                break;

            case "2":
                console.log("\nNama:", mahasiswa.nama ?? "None");
                console.log("Nilai:", mahasiswa.nilai ?? "None");
                break;

            case "3":
                if (mahasiswa.nama === null) {
                    console.log("Data belum tersedia");
                    break;
                }

                let ubah = await tanya(
                    "Apa yang ingin diubah (Nama/Nilai): "
                );

                if (ubah.toLowerCase() === "nama") {
                    mahasiswa.nama = await tanya("Masukkan Nama: ");
                    console.log("Data Nama Berhasil Dirubah");
                } else if (ubah.toLowerCase() === "nilai") {
                    mahasiswa.nilai = Number(
                        await tanya("Masukkan Nilai: ")
                    );
                    console.log("Data Nilai Berhasil Dirubah");
                } else {
                    console.log("Pilihan tidak valid");
                }
                break;

            case "4":
                mahasiswa.hapus();
                console.log("Data Berhasil Dihapus");
                break;

            case "5":
                console.log(
                    "Terima Kasih Sudah Menggunakan Program Saya"
                );
                break;

            default:
                console.log("Pilihan tidak valid, silakan coba lagi");
        }
    } while (pilihan !== "5");

    input.close();
}

main();
