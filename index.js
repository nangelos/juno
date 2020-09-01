console.log('index.js linked up');
let posts = document.getElementsByTagName('tr'),
  uri;

for (var i = 0; i < posts.length; i++) {
  posts[i].onclick = function () {
    uri = this.getAttribute('data-href');
    console.log(uri);
    window.location = `/${uri}`;
  };
}
