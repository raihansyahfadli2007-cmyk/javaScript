class Mahasiswa {
    constructor(nama, nim, jurusan, alamat) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.alamat = alamat;
    }

    // untuk menampilkan biodata
    tampilkanBiodata() {
        console.log("=== BIODATA MAHASISWA ===");
        console.log("Nama    : " + this.nama);
        console.log("NIM     : " + this.nim);
        console.log("Jurusan : " + this.jurusan);
        console.log("Alamat  : " + this.alamat);
    }
}

// Input biodata
let nama = prompt("Masukkan nama:");
let nim = prompt("Masukkan NIM:");
let jurusan = prompt("Masukkan jurusan:");
let alamat = prompt("Masukkan alamat:");

// Membuat objek mahasiswa
let mhs = new Mahasiswa(nama, nim, jurusan, alamat);

// Menampilkan biodata
mhs.tampilkanBiodata();
