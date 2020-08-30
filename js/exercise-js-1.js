// #### by: Naufal Ghifari (2020/8/14) ####
// #### SOAL ####
// 1. Console log data diri//
// Nama
// Asal daerah
// Tanggal lahir
// Umur
// Posisi pekerjaan

// #### JAWABAN ####
const nama = "Naufal Ghifari";
const asalDaerah = "Bandung";
const tanggalLahir = "7 Maret 1997"
const umur = 23;
const posisiPekerjaan = "Web Developer"

console.log(nama); //output: Naufal Ghifari
console.log(asalDaerah); //output: Bandung
console.log(tanggalLahir); //output: 7 Maret 1997
console.log(umur); //output: 23
console.log(posisiPekerjaan); //output: Web Developer


// #### SOAL ####
/* 2. Membuat interaksi kepada user
Prompt data berikut:
Nama user
Asal Negara
Confirm data user. Apakah data yang diisi sudah benar?
Alert “Terima kasih sudah mengisi form” */

// #### JAWABAN ####
let namaUser = prompt("Isi nama anda: ")
let asalNegara = prompt("isi asal negara anda: ")
confirm("Pastikan anda sudah mengisi data dengan benar.")
alert("Terima kasih sudah mengisi form\n Nama anda " + namaUser + " dan berasal dari negara " + asalNegara + ".")


// #### SOAL ####
// 3. Berikan single comments pada setiap baris data diri yang ada pada soal nomor 1

// #### JAWABAN ####
// diatas

// #### SOAL ####
// 4. Berikan multiple comments pada fitur soal nomor 2

// #### JAWABAN ####
/* diatas */

// #### SOAL ####
// 5. Buat variabel untuk menampung data diri yang telah dibuat pada nomor 1. Lalu panggil dan tampilkan dengan menggunakan console log

// #### JAWABAN ####
const nama = "Naufal Ghifari";
const asalDaerah = "Bandung";
const tanggalLahir = "7 Maret 1997"
const umur = 23;
const posisiPekerjaan = "Web Developer"

const user = {
  name: nama,
  origin: asalDaerah,
  birthdate: tanggalLahir,
  age: umur,
  job: posisiPekerjaan
}

console.log(user.name); //output: Naufal Ghifari
console.log(user.origin); //output: Bandung
console.log(user.birthdate); //output: 7 Maret 1997
console.log(user.age); //output: 23
console.log(user.job); //output: Web Developer


// #### SOAL ####
// 6. Lakukan operasi matematika berikut. Simpan hasil pada sebuah variabel untuk masing-masing operasi.
// a. 25 + 10
// b. 100 * 2
// c. 99 / 2
// d. 99 % 2


// #### JAWABAN ####
let a = 25+10;
console.log(a); //output: 35

let b = 100*2;
console.log(b); //output: 200

let c = 99/2;
console.log(c); //output: 49.5

let d = 99%2;
console.log(d); //output: 1


// #### by: Naufal Ghifari (2020/8/14) ####
