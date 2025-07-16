function isAvaliable(bookName) {
  const isBorrowed = users.some((user) => {
    return user.currentlyBorrowed.some((book) => book.name === bookName);
  });
  console.log(isBorrowed);
  return isBorrowed;
}

//date function
function borrowDate() {
  let date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  borrowDay = `${day}/${month}/${year}`;
  return borrowDay;
}

function returnDate(borrow) {
  const arr = borrow.split("/").map((part) => Number(part));
  let day = arr[0];
  let month = arr[1];
  let year = arr[2];

  day += 14;

  if (day > 30) {
    day -= 30;
    month += 1;
  }
  if (month > 12) {
    month = 1;
    year += 1;
  }
  return `${day}/${month}/${year}`;
}

//add book function
function addBook(book) {
  let lastBookId = Library[Library.length - 1].id;
  lastBookId++;

  book.id = lastBookId;
  Library.push({ ...book, avaliable: true });
//   console.log(Library);
}

//borrow book function
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
  if (chosenBook.avaliable) {
    let borrowD = borrowDate();
    console.log("aris", chosenBook.avaliable);
    console.log("borrow date is:", borrowD);
    console.log("user must return book:", returnDate(borrowD));

    chosenBook.avaliable = false;
  } else {
    console.log("book is unavaliable");
  }
}
const borrowingDate = borrowDate()


// book returning function
function returnBook(userName, bookId, borrowDay){
const activeUser = users.find(user => user.name === userName)
const booK = Library.find(b => b.id === bookId)

console.log(borrowingDate)
}


//function calls
addBook({
  name: "Pride and Prejudice",
  author: "Jane Austen",
  genre: "Romance",
  rating: 10,
  year: 1813,
});
borrowBook(2, "Pride and Prejudice");
// borrowBook(3, 'Pride and Prejudice')

returnBook('natia', 2, borrowingDate)
