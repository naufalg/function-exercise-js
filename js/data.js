// jshint esversion: 6
let animal = [
  {
    name: "bat",
    movement: "2 wings",
    move: "fly",
    img: "../../../../assets/images/pisang.png"
  },
  {
    name: "cat",
    movement: "4 legs",
    move: "walk",
    img: "../../../../assets/images/pisang.png"
  },
  {
    name: "egg",
    movement: "2 legs",
    move: "walk",
    img: "../../../../assets/images/pisang.png"
  },
 
];

let fruit = [
  {
    nama: "Pisang",
    latin: "Musa acuminata",
    warna: "Kuning",
    img: "../../../../assets/images/pisang.png",
  },
  {
    nama: "Jambu",
    latin: "Psidium guajava",
    warna: "Hijau",
    img: "../../../../assets/images/jambu.jpg",
  },
  {
    nama: "Apel",
    latin: "Malus domestica",
    warna: "Merah",
    img: "../../../../assets/images/apel.jpg",
  },
  {
    nama: "Durian",
    latin: "Durio zibethinus",
    warna: "Kuning",
    img: "../../../../assets/images/durian.jpg",
  },
  {
    nama: "Mangga",
    latin: "Mangifera indica",
    warna: "Hijau-Oranye",
    img: "../../../../assets/images/mangga.jpg",
  },
  {
    nama: "Semangka",
    latin: "Citrullus lanatus",
    warna: "Hijau-merah",
    img: "../../../../assets/images/semangka.jpg",
  },
];


let displayFruit = () => {
  let buah = document.querySelector(".buah");
  fruit.forEach((item) => {
    let card = document.createElement("div");
    card.innerHTML = `<div class="col-sm-4">
          <div class="card" style="width: 15rem">
            <img
              class="card-img-top"
              src= "${item.img}"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">
                ${item.nama}
                <br>
                ${item.latin}
                <br>
                ${item.warna}
                </p>
            </div>
          </div>
        </div>`;
    buah.appendChild(card);
  });
};

let displayAnimal = () => {
  let hewan = document.querySelector(".hewan");
  animal.forEach((item) => {
    let card = document.createElement("div");
    card.innerHTML = `<div class="col-sm-4">
          <div class="card" style="width: 15rem">
            <img
              class="card-img-top"
              src= "${item.img}"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">
                ${item.name}
                <br>
                ${item.movement}
                <br>
                ${item.move}
                </p>
            </div>
          </div>
        </div>`;
    hewan.appendChild(card);
  });
};

export {displayAnimal, displayFruit, animal, fruit};