function isAvaliable(bookName) {
  const isBorrowed = users.some((user) => {
   return user.currentlyBorrowed.some((book) => book.name === bookName);
  });
  console.log(isBorrowed)
  return isBorrowed
  
}

function addBook(book) {
  let lastBookId = Library[Library.length-1].id;
  lastBookId++;

  book.id = lastBookId;
  Library.push({...book, avaliable: true});
  console.log(Library)
}

function borrowBook(userId, bookName) {
  const activeUser = users.find((u) => u.userId === userId);
  const chosenBook = Library.find((b) => b.name === bookName);

  if (!activeUser) {
    console.log("user not found");
    return;
  }
  if (!chosenBook) {
    console.log("book not found");
    return;
  }
  if (chosenBook.avaliable === true) {
    console.log("aris", chosenBook.avaliable);
    let borrowDate = new Date();
    console.log(borrowDate);
    chosenBook.avaliable = false;
  } else {
    console.log("book is unavaliable");
  }
}

addBook({
  name: "Pride and Prejudice",
  author: "Jane Austen",
  genre: "Romance",
  rating: 10,
  year: 1813,
});
// borrowBook(2, "Pride and Prejudice");
