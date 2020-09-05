let table = document.getElementById('blog-posts');
table.onclick = (e) => {
  let href = e.target.dataset.href;
  window.location = href;
};

let btn = document.getElementById('social-box');
btn.onclick = (e) => {
  let href = e.target.dataset.href;
  if (href !== 'mailto:angelos.nick@yahoo.com') {
    window.open(href, '_blank');
  } else {
    window.location = href;
  }
};
