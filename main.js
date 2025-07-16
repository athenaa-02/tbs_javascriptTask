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
const borrowingDate = borrowDate()
//borrow book function
function borrowBook(userName, bookid) {
  const activeUser = users.find((u) => u.name === userName);
  const chosenBook = Library.find((b) => b.id === bookid);

  if (!activeUser) {
    console.log("user not found");
    return;
  }
  if (!chosenBook) {
    console.log("book not found");
    return;
  }
  if (chosenBook.avaliable) {
    console.log(chosenBook.name, "book borrow date is:", borrowingDate);
    console.log("user must return book:", returnDate(borrowingDate));

    chosenBook.avaliable = false;
    activeUser.currentlyBorrowed.push({name: chosenBook.name, id: chosenBook.id, 'borrow date': borrowingDate, 'return date': returnDate(borrowingDate) })
//   console.log(activeUser)
} else {
    console.log("book is unavaliable");
  }
}



// book returning function
function returnBook(userName, bookId){
const activeUser = users.find(user => user.name === userName)
const bookUniq = Library.find(b => b.id === bookId)

const boolean = activeUser.currentlyBorrowed.some(book => book.id === bookUniq.id)

console.log(boolean)
if(activeUser.currentlyBorrowed.length === 0){
    console.log("user does't have any books to return")
    
}else if(!boolean){
console.log("user doesn't have this book")
}else if(boolean){
    console.log('yes')
}
}


//function calls
addBook({
  name: "Pride and Prejudice",
  author: "Jane Austen",
  genre: "Romance",
  rating: 10,
  year: 1813,
});
borrowBook('ahmad', 3);

returnBook('ahmad', 3)
