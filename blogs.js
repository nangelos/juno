let post = document.getElementsByClassName('post-body');
let i;

for (i = 0; i < post.length; i++) {
  post[i].addEventListener('click', (e) => {
    let href = e.currentTarget.dataset.href;
    console.log(href);
    window.location = href;
  });
}
