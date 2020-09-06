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

let blogList = document.getElementById('blog-list');
for (let i = 0; i < blogPreview.length; i++) {
  let entry = blogPreview[i];
  let singlePost = document.createElement('div');
  singlePost.setAttribute('class', 'single-post');

  let postBody = document.createElement('div');
  postBody.setAttribute('class', 'post-body');
  postBody.setAttribute('data-href', entry.href);
  singlePost.append(postBody);

  let blogHeader = document.createElement('div');
  blogHeader.setAttribute('class', 'blog-header');
  let pic = document.createElement('img');
  pic.setAttribute('class', 'picture');
  pic.setAttribute('src', 'styles/images/nick_bw.jpg');
  blogHeader.append(pic);
  let date = document.createElement('h5');
  date.setAttribute('class', 'blog-date');
  date.textContent = entry.date;
  blogHeader.append(date);
  postBody.append(blogHeader);

  let blogTitle = document.createElement('div');
  blogTitle.setAttribute('class', 'blog-title');
  let titleText = document.createElement('h1');
  titleText.textContent = entry.title;
  blogTitle.append(titleText);
  postBody.append(blogTitle);

  let blogBody = document.createElement('div');
  blogBody.setAttribute('class', 'intro-paragraph');
  blogBody.setAttribute('data-href', entry.href);
  blogBody.textContent = entry.text;
  postBody.append(blogBody);

  let blogFooter = document.createElement('div');
  blogFooter.setAttribute('class', 'blog-footer');
  let shareText = document.createElement('h5');
  shareText.setAttribute('class', 'blog-date');
  shareText.textContent = ' SHARE IT';
  blogFooter.append(shareText);
  let anchor = document.createElement('a');
  anchor.setAttribute('style', 'margin: auto');
  anchor.setAttribute(
    'href',
    `https://twitter.com/intent/tweet?url/${entry.href}`
  );
  anchor.setAttribute('target', '_blank');
  let twitterIcon = document.createElement('img');
  twitterIcon.setAttribute('class', 'share-icon');
  twitterIcon.setAttribute('src', 'styles/images/twit.png');
  anchor.append(twitterIcon);
  blogFooter.append(anchor);
  blogBody.append(blogFooter);

  blogList.append(singlePost);
}

let post = document.getElementsByClassName('post-body');

for (let j = 0; j < post.length; j++) {
  post[j].addEventListener('click', (e) => {
    let href = e.currentTarget.dataset.href;
    window.location = href;
  });
}
