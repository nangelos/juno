const blogPreview = [
  {
    date: 'Sept 4, 2020',
    title: 'Why I Built This and Why it Matters to Have a Personal Website',
    text:
      'Hello world. My name is blah and I am a blah blah person who likes to blah. I went to the moon in 1969, what can you say about that? I love the...',
    href: 'blog-posts/sample-post.html',
  },
  {
    date: 'Aug 31, 2020',
    title: 'How to Make the World Interesting',
    text: "I'm exceptionally excited about the moon in 1969, and then...",
    href: 'blog-posts/sample-post.html',
  },
];

let tableBody = document.getElementById('table-body');
const attachBlogPosts = (arr) => {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let entry = arr[i];
    let tableRow = document.createElement('tr');
    tableRow.setAttribute('data-href', './blog-posts/sample-post.html');
    let tableData1 = document.createElement('td');
    tableData1.textContent = entry.title;
    let tableData2 = document.createElement('td');
    let tableItal = document.createElement('i');
    tableItal.textContent = entry.date;
    tableData2.append(tableItal);
    tableRow.append(tableData1);
    tableRow.append(tableData2);
    tableBody.append(tableRow);
  }
};

attachBlogPosts(blogPreview);

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
