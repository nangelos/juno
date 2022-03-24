import { bookList } from './constants.js';
console.log(bookList)

const table = document.getElementById('table-body');

const createTableRow = (obj) => {
  let tableRow = document.createElement('tr');
  let td1 = document.createElement('td');
  td1.textContent = obj.title;
  let td2 = document.createElement('td');
  td2.textContent = obj.author;
  tableRow.append(td1);
  tableRow.append(td2);
  return tableRow;
};

const addBooksToTable = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let list = arr[i];
    for (let j = 0; j < list.books.length; j++) {
      let book = list.books[j];
      let tableRow = createTableRow(book);
      table.append(tableRow);
    }
  }
};

addBooksToTable(bookList);
