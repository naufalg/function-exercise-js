// jshint esversion:6
class Karyawan {
  constructor(name, role, salary) {
    this.name = name;
    this.role = role;
    this.salary = salary;
  }


  introduce() {
    return `Hi! I'm ${this.name} as a ${this.role} and paid for ${this.salary} dollars`;
  }
}


// let karyawan = [
//   { name: "Bill Gates", role: "IT Helpdesk", salary: 1000 },
//   { name: "Elon Musk", role: "Professional Meme Developer", salary: 3000 },
//   { name: "Takumi Fujiwara", role: "Professional courier", salary: 5000 },
// ];

// let bill = new Karyawan("Bill Gates", "IT Helpdesk", 1000);
// let elon = new Karyawan("Elon Musk", "Professional Meme Developer", 3000);
// let takumi = new Karyawan("Takumi Fujiwara", "Professional courier", 5000);



export { karyawan, introduce };
