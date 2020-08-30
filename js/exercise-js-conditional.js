/*jshint esversion: 6 */
// #### by: Naufal Ghifari (2020/8/14) ####
// #### SOAL ####
// 1. Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP.
// Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru

// #### JAWABAN ####
let saya;
if (saya == "HR") {
    console.log("saya melakukan rekrutmen calon pegawai baru");
} else if (saya =="dev team") {
    console.log("kerja ngoding bagaikan banting tulang kuda");
} else if (saya =="sales") {
    console.log("risolnya kakak..");
} else if (saya == "investor blue chip") {
    console.log("auto tajir");
} else {
    console.log("anda nganggur");
}


// #### SOAL ####
// 2.Buat conditional untuk membandingkan 2 buah nilai. Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b, dan a sama dengan b.

// #### JAWABAN ####
let a,b;
if (a>b) {
    console.log("a lebih besar dari b dengan nilai " + a);
} else if (a<b) {
    console.log("b lebih besar dari a dengan nilai " + b);
} else if (a==b){
    console.log("nilai a dan b sama besar");
} else {
    console.log("salah input data");
}

// #### SOAL ####
// 3. Gunakan switch case untuk mengetahui nama hari berdasarkan angka.
// Hari minggu dimulai dari angka 1 dan seterusnya

// #### JAWABAN ####
let angkaHari ;
switch (angkaHari) {
    case 1:
        console.log("Minggu");
        break;
    case 2:
        console.log("Senin");
        break;
    case 3:
        console.log("Selasa");
        break;
    case 4:
        console.log("Rabu");
        break;
    case 5:
        console.log("Kamis");
        break;
    case 6:
        console.log("Jumat");
        break;
    case 7:
        console.log("Sabtu");
        break;
    default:
        console.log("salah input angka hari");
}



// #### SOAL ####
// 4. Gunakan switch case untuk membuat sebuah game sederhana.
// UP -> Karakter berjalan keatas
// RIGHT -> Karakter berjalan kekanan
// BOTTOM -> Karakter berjalan kebawah
// LEFT -> Karakter berjalan kekiri

// #### JAWABAN ####
let input ;
switch (input) {
    case "UP":
        console.log("Karakter berjalan keatas");
        break;
    case "RIGHT":
        console.log("Karakter berjalan kekanan");
        break;
    case "BOTTOM":
        console.log("Karakter berjalan kebawah");
        break;
    case "LEFT":
        console.log("Karakter berjalan kekiri");
        break;
    default:
        console.log("Salah input data");
}



// #### by: Naufal Ghifari (2020/8/14) ####