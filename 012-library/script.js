class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class UI {
  static displayBooks = () => {
    const books = Store.getBooks();
    if (books) {
      books.forEach(book => UI.addBookToLibrary(book));
    }
  };

  static addBookToLibrary = book => {
    const library = document.querySelector('#library');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td><span class='btn read-status btn-${book.read ? 'success' : 'outline-success'} btn-sm'>${
      book.read ? 'Read' : 'Not Read'
    }</span></td>
      <td><a href="#" class="btn btn-danger delete">X</a></td>
    `;
    library.appendChild(row);
  };

  static toggleReadStatus(el) {
    el.textContent === 'Read' ? (el.textContent = 'Not Read') : (el.textContent = 'Read');
    if (el.classList.contains('btn-outline-success')) {
      el.classList.remove('btn-outline-success');
      el.classList.add('btn-success');
    } else if (el.classList.contains('btn-success')) {
      el.classList.remove('btn-success');
      el.classList.add('btn-outline-success');
    }
  }

  static deleteBook(el) {
    el.parentElement.parentElement.remove();
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.style.position = 'absolute';
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const table = document.querySelector('.table');
    container.insertBefore(div, table);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearForm = () => document.querySelector('#book-form').reset();
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static toggleReadStatus(title) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.title === title) {
        books[index].read = !books[index].read;
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Display library on initial page load
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Form Submit
document.querySelector('#book-form').addEventListener('submit', e => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;

  if (title === '' || author === '' || pages === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    const book = new Book(title, author, pages, read);

    UI.addBookToLibrary(book);
    Store.addBook(book);
    UI.showAlert('Book Added', 'success');
    UI.clearForm();
  }
});

// Remove book
document.querySelector('#library').addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    UI.deleteBook(e.target);
    Store.removeBook(
      e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent
    );
    UI.showAlert('Book Removed', 'success');
  }
  if (e.target.classList.contains('read-status')) {
    UI.toggleReadStatus(e.target);

    Store.toggleReadStatus(
      e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling
        .textContent
    );
  }
});
