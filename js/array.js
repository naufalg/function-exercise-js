/*jshint esversion: 6 */
// #### by:Naufal Ghifari; 20200826 ####
// // #### Soal ####
// 1. Buatlah data array yang berisi minimal 5 pekerjaan dibidang IT (Ex. Front end developer).
// Tampilkan panjang data Array
// Tampilkan seluruh item pada array
// Gunakan Console.log
// Tampilkan data tersebut pada Halaman HTML menggunakan list tag

// #### Jawaban ####
let itJob = [
  "CTO",
  "Product Owner",
  "Front-end Developer",
  "Back-end Developer",
  "DevOps",
];
console.log(itJob.length);
console.log(itJob);

// #### Soal ####
// 2. Buatlah sebuah data array yang berisi nama pada tim teman-teman.
// Bagi tim menjadi 2 tim dan terdiri dari 1 orang leader
// Console.log data array tersebut dengan memisahkan setiap data menggunakan koma (,)
// Tampilkan list data tersebut ke halaman HTML
// hidden:
// Cek built-in method Array

// #### Jawaban ####
let tim7 = ["Narzo", "Zaske", "Beban", "Dedeshi"];
let tim31 = tim7.slice(0, 2);
console.log(tim31);
let tim32 = tim7.slice(2, 4);
console.log(tim32);

// #### Soal ####
// 3. Diberikan 1 data array [3, 5, 7, 9, 11]
// Buat sebuah program untuk membuat Array baru dari hasil perkalian array sebelumnya dengan
// perkalian 5.
// Tampilkan pada console.log

// #### Jawaban ####
let array1 = [3, 5, 7, 9, 11];
let array2 = array1.map((item) => {
  return item * 2;
});

console.log(array2);

// #### Soal ####
// 4.Tersedia 2 data Array. Tugas kita adalah untuk cek apakah ada nilai yang sama pada kedua
// Array.
// Array pertama = [‘Math’, ‘English’, ‘Programming’]
// Array kedua = [‘Geography’, ‘Spanish’, ‘Programming’]
// Program akan mengembalikan nilai TRUE or FALSE

// #### Jawaban ####
let subj1 = ["Math", "English", "Programming"];
let subj2 = ["Geography", "Spanish", "Programming"];

// find same array value in one array
let subj3 = subj1.concat(subj2);
console.log(subj3);
let subj3Sorted = subj3.sort();
console.log(subj3Sorted);

find1ArrDup = (arr1) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == arr1[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(find1ArrDup(subj3Sorted));

/* find same value within 2 array*/
function sameValue2(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(sameValue2(subj1, subj2));

// #### Soal ####
// 5. Buatlah sebuah aplikasi twitter untuk membuat sebuah tweet dan menampilkannya.
// Gunakan Array untuk menampung data tweet

// #### Jawaban ####
let myTweet = [];

tweetMe = () => {
  myTweet.push(prompt("What's interesting?"));
};

showTweet = (arr, idx) => {
  alert(arr[idx]);
};

// #### Soal ####
// 6. Buatlah sebuah program registrasi berisi username dan password
// Lakukan validasi berikut
// Username minimal 6 karakter
// Password minimal 8 karakter
// Saat user melakukan registrasi simpan data didalam Array
// Tampilkan data setiap user melakukan registrasi
// Saat password ditampilkan, ganti dengan string yang berbeda. Gunakan replace method.

// #### Jawaban ####
let userN;
let passW;
let account = [];

askUserN = () => {
  let userNPrompt = prompt("Username:  (must be > 6 characters)");
  if (userNPrompt.length >= 6) {
    alert("input username success");
    userN = userNPrompt;
    // userN.push(userNPrompt);
  } else {
    alert("username must be more than 6 characters");
    askUserN();
  }
};

askPassW = () => {
  let passWPrompt = prompt("Password:  (must be > 8 characters)");
  if (passWPrompt.length >= 8) {
    alert("input password success");
    passW = passWPrompt;
    // passW.push(passWPrompt);
  } else {
    alert("password must be more than 8 characters");
    askPassW();
  }
};

askId = () => {
  askUserN();
  askPassW();
  account.push([userN, passW]);
};

showId = () => {
  console.log(account);
};
