function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
  };
}

const book = new Book('LOTR', 'Tolkien', 3000, false);

console.log(book.info());
