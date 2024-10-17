const Book = require("./Books");
const Member = require("./Member");

const hallOfFame = new Book({
  title: "Hall of fame",
  author: "Abhishek kumar",
  publishedYear: "2000",
  copies: 0,
  genre: "SelfHelp",
});

hallOfFame.addCopy();

const gopesh = new Member({
  name: "Gopesh",
  phoneNumber: "7805969406",
});

gopesh.borrowBook(hallOfFame);
console.log(gopesh.getInfo);
