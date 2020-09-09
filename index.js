import { recentPosts } from './constants.js';

let tableBody = document.getElementById('table-body');
const attachBlogPosts = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let entry = arr[i];
    let tableRow = document.createElement('tr');
    tableRow.setAttribute('data-href', entry.href);
    let tableData1 = document.createElement('td');
    tableData1.setAttribute('class', 'blog-title');
    tableData1.textContent = entry.title;
    let tableData2 = document.createElement('td');
    tableData2.setAttribute('class', 'blog-date');
    let tableItal = document.createElement('i');
    tableItal.textContent = entry.date;
    tableData2.append(tableItal);
    tableRow.append(tableData1);
    tableRow.append(tableData2);
    tableRow.addEventListener('click', (e) => {
      let href = e.currentTarget.dataset.href;
      window.location = href;
    });
    tableBody.append(tableRow);
  }
};

attachBlogPosts(recentPosts);

let btns = document.getElementsByClassName('row');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', (e) => {
    let href = e.currentTarget.dataset.href;
    if (href !== 'mailto:angelos.nick@yahoo.com') {
      window.open(href, '_blank');
    } else {
      window.location = href;
    }
  });
}
