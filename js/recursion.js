// #### by:Naufal Ghifari; 20200826 ####
// #### Soal ####
// 1. Buatlah rekursive function untuk menghitung angka faktorial
// Contoh perhitungan angka faktorial:
// 4! = 4 * 3!
// 4! = 4 * 3 * 2!
// 4! = 4 * 3 * 2 * 1
// 4! = 24

// #### Jawaban ####
function faktorial(angka) {
  if (angka == 0 || angka == 1) {
    return 1;
  } else if (angka > 1) {
    return angka * faktorial(angka - 1);
  } else {
    alert("angka harus >= 0");
  }
}

// #### Soal ####
// 2. Buatlah rekursive function yang dapat menampilkan deret angka genap
// sampai N input.
// Contoh:
// Jika diberi argumen angka 5, maka hasilnya adalah 0 2 4

// #### Jawaban ####
function deretGenap(angka) {
  if (angka == 0 || angka == 1) {
    console.log(0);
  } else if (angka > 1 && angka % 2 == 1) {
    deretGenap(angka - 1);
  } else if (angka > 1 && angka % 2 == 0) {
    console.log(angka);
    deretGenap(angka - 1);
  } else {
    alert("angka harus >=0 ");
  }
}

// #### Soal ####
// 3. Buatlah rekursive function yang dapat menghasilkan angka seperti ini
// f(1) = 3
// f(2) = 6
// f(3) = 12
// f(4) = 24
// f(5) = 48
// f(n) = ...

// #### Jawaban ####
function tigaDanDua(angka) {
  if (angka == 1) {
    return 3;
  } else {
    return 2 * tigaDanDua(angka - 1);
    // console.log(angka)
  }
}

// #### by:Naufal Ghifari; 20200826 ####
