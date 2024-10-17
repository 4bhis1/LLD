class Member {
  static currentId = 0;

  static generateId() {
    this.currentId += 1;
    return this.currentId;
  }

  #contactInfo;

  constructor(userInfo) {
    if (!userInfo.phoneNumber || !userInfo.name) {
      throw new Error("Phonenumber of user name is missing.");
    }

    this.member_id = Member.generateId();
    this.name = userInfo.name;
    this.#contactInfo = userInfo.phoneNumber;
    this.memberShipType = userInfo.isPremium ? "Premium" : "Regular";
    this.borrowedBooks = [];
  }

  borrowBook(bookInstance) {
    if (bookInstance.getCopies > 0) {
      this.borrowedBooks.push(bookInstance);
      bookInstance.removeCopy();
    } else {
      throw new Error(`${bookInstance.title} is not available.`);
    }
  }

  returnBook(bookInstance) {
    const index = this.borrowedBooks.indexOf(bookInstance);
    if (index > -1) {
      this.borrowedBooks.splice(index, 1);
      bookInstance.addCopy();
    } else {
      throw new Error("You did not borrow this book.");
    }
  }

  get getInfo() {
    return this;
  }
}

module.exports = Member;
