let table = document.getElementById('blog-posts');
console.log('table: ', table);
table.onclick = (e) => {
  let href = e.target.dataset.href;
  window.location = `/${href}`;
};
