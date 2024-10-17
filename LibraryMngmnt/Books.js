class Book {
  #copies;
  constructor(bookInfo) {
    if (!bookInfo.title || !bookInfo.author || !bookInfo.genre) {
      throw new Error("Books detail missing");
    }

    this.title = bookInfo.title;
    this.author = bookInfo.author;
    this.publishedYear = bookInfo.publishedYear;
    this.#copies = bookInfo.copies;
    this.genre = bookInfo.genre;
  }

  get bookInfo() {
    return this;
  }

  addCopy() {
    this.#copies++;
  }

  get getCopies() {
    return this.#copies;
  }

  removeCopy() {
    if (this.#copies > 0) {
      this.#copies--;
    } else {
      throw new Error("No copies available to borrow.");
    }
  }
}

module.exports = Book;
