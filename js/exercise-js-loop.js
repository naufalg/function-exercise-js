// #### by: Naufal Ghifari (2020/8/14) ####
// #### SOAL ####
// 1.Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
// Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
// Lakukan FOR LOOP pada Javascript.

// #### JAWABAN ####
for (let i = 1; i <= 100; i++) {
  console.log("user ke " + i);
}

// #### SOAL ####
// 2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
// Nilai awal = 0
// Pengulangan = 10 kali
// Nilai awal ditambah 2 setiap pengulangan
// Tampilan hasil penambahan pada setiap pengulangan

// #### JAWABAN ####
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// #### SOAL ####
// 3.  Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
// Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
// Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan

// #### JAWABAN ####
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " bilangan genap");
  } else if (i % 2 == 1) {
    console.log(i + " bilangan ganjil");
  }
}

// #### SOAL ####
// 4. Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
// Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
// Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
// Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)

// #### JAWABAN ####
let ask;
let count = 0;
while (true) {
  ask = confirm("apakah anda mau mengulang?")
    if (ask == false) {
      alert("anda sudah mengulang sebanyak " + count)
        break;
    } else {
      count++
    }
}

// #### SOAL ####
// 5. Buat sebuah program kuis.
// Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
// Lakukan pengecekan apakah jawaban dari user sudah benar
// Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
// Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar

// #### JAWABAN ####
let ask;
while (true) {
  ask = prompt("Sebutkan kepanjangan dari nama IB?")
    if (ask == "impactbyte") {
      alert("Jawaban anda benar!")
        break;
    } else {
      alert("Jawaban anda salah, coba lagi")
    }
}


// menggunakan fungsi rekursif
function ask(){
    let answer=prompt("Sebutkan kepanjangan dari nama IB?");
    if(answer=="impactbyte" || answer == "impact byte" || answer == "Impact Byte" || answer == "ImpactByte"){
        alert("Selamat jawaban kamu benar");
        return;
    }
    alert("Jawaban kamu salah, coba lagi");
    ask();  
}

ask();

// #### by: Naufal Ghifari (2020/8/16) ####
