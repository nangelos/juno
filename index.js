import { recentPosts } from './constants.js';

const addBlogClickEvent = (row) => {
  row.addEventListener('click', (e) => {
    let href = e.currentTarget.dataset.href;
    window.location = href;
  });
  return row;
};

const createTableRow = (obj) => {
  let tableRow = document.createElement('tr');
  tableRow.setAttribute('data-href', obj.href);
  let tableData1 = document.createElement('td');
  tableData1.setAttribute('class', 'blog-title');
  tableData1.textContent = obj.title;
  let tableData2 = document.createElement('td');
  tableData2.setAttribute('class', 'blog-date');
  let tableItal = document.createElement('i');
  tableItal.textContent = obj.date;
  tableData2.append(tableItal);
  tableRow.append(tableData1);
  tableRow.append(tableData2);
  tableRow = addBlogClickEvent(tableRow);
  return tableRow;
};

const attachBlogPosts = (arr, table) => {
  for (let i = 0; i < arr.length; i++) {
    let entry = arr[i];
    let tableRow = createTableRow(entry);
    table.append(tableRow);
  }
};

const addSocialButtonClick = (btn) => {
  btn.addEventListener('click', (e) => {
    let href = e.currentTarget.dataset.href;
    if (href !== 'mailto:angelos.nick@yahoo.com') {
      window.open(href, '_blank');
    } else {
      window.location = href;
    }
  });
  return btn;
};

let tableBody = document.getElementById('table-body');
attachBlogPosts(recentPosts, tableBody);

let btns = document.getElementsByClassName('row');
for (let i = 0; i < btns.length; i++) {
  addSocialButtonClick(btns[i]);
}
