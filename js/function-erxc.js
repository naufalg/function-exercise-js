// #### by: Naufal Ghifari (2020/8/19) ####
// #### SOAL ####
// 1. Buat sebuah function untuk toko online kita. Ikuti poin-poin dibawah ini:
// Function mempunyai 2 parameter yaitu nama pembeli dan produk yang dibeli
// Function akan mengembalikan nilai “Terima kasih (nama pembeli) telah membeli produk (produk yang dibeli)”
// Panggil function dengan menggunakan console.log()

// #### JAWABAN ####
function tokoOnline(pembeli, produk) {
  console.log("Terima kasih " + pembeli + " telah membeli produk " + produk);
}

// #### SOAL ####
// 2. Buat sebuah function helper untuk convert temperatur Celcius ke Fahrenherit dan sebaliknya. Ikuti poin-poin dibawah ini:
// Buat sebuah function helper lalu gunakan pada function converternya. Seperti contoh dibawah ini. Jadi kita tinggal membuat function helper dan function utama untuk convert fahrenheit ke Celcius

// #### JAWABAN ####
function celciusDivider(celcius) {
  return celcius / 5;
}

function reamurDivider(reamur) {
  return reamur / 4;
}

function fahrenheitDivider(fahrenheit) {
  return (fahrenheit - 32) / 9;
}

function celciusToFahrenheit(celcius) {
  return celciusDivider(celcius) * 9 + 32;
}

function fahrenheitToCelcius(fahrenheit) {
  return fahrenheitDivider(fahrenheit) * 5;
}

function celciusToReamur(celcius) {
  return celciusDivider(celcius) * 4;
}

function reamurToCelcius(reamur) {
  return reamurDivider(reamur) * 5;
}

function fahrenheitToReamur(fahrenheit) {
  return fahrenheitDivider(fahrenheit) * 4;
}

function reamurToFahrenheit(reamur) {
  return reamurDivider(reamur) * 9 + 32;
}

// #### SOAL ####
// 3. Kita akan membuat program untuk menghitung umur kucing dalam usia manusia. Poin-poinnya adalah:
// Pada usia 1 tahun, umur kucing adalah 15 kali umur manusia
// Pada usia 2 tahun, umur kucing adalah 24 kali umur manusia
// Pada usia 3 tahun (> 24 tahun) dan seterusnya umur kucing adalah ditambah 4 dari umur manusia ketika 24  tahun. Jadi jika umur kucing saat ini 4 tahun berarti dalam kalender tahun kucing, umurnya adalah 32 tahun.
// Buat sebuah ARROW function yang menerima parameter umur kucing berdasarkan perhitungan tahun manusia.

// #### JAWABAN ####
const umurKucing = (tahun) => {
  if (tahun == 1) {
    return 15;
  } else if (tahun == 2) {
    return 24;
  } else if (tahun > 2) {
    return 24 + 4 * (tahun - 2);
  } else {
    return "salah input nilai";
  }
};

// #### SOAL ####
// 4. Buat sebuah function untuk mengubah format semua string menjadi huruf kecil.
// Menerima 1 parameter string
// Gunakan single line block function
// Output adalah string yang telah diubah formatnya menjadi lower case
// Gunakan built in method string

// #### JAWABAN ####
const hurufKecil = (kata) => {
  return kata.toLowerCase();
};

// #### SOAL ####
// 5. Buat tampilan untuk seluruh soal diatas. Buat sekreatif teman-teman. 1 soal = 1 fitur = 1 page.

// #### JAWABAN ####
