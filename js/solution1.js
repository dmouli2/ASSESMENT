const books = [
  { id: "book1", author: "author1", alreadyRead: false },
  { id: "book2", author: "author2", alreadyRead: false },
  { id: "book3", author: "author3", alreadyRead: false },
  { id: "book4", author: "author4", alreadyRead: true }
];

let displayList = function(books1) {
  return books1
    .map(
      book =>
        `<li>The ${book.id} Written by ${
          book.author
        }<input type="checkbox" id=${book.id} ${readStatus(
          book
        )} onChange="changed(this)" > </li> ${read(book)}`
    )
    .join(" ");

  
};

let readStatus = book => {
  if (book.alreadyRead) {
    return "checked";
  } else {
    return "unchecked";
  }
};

let changed = book => {
  books.map(b => {
    if (b.id == book.id) {
      b.alreadyRead = !b.alreadyRead;
    }
  });
  display();
};

let read = book => {
  if (book.alreadyRead) return "Read";
  else {
    return "Unread";
  }
};

let display = () => {
  let template = `<ul>${displayList(books)}</ul>`;
  document.getElementById("container").innerHTML = template;
};
display();
