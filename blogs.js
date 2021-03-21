import blogPreview from './constants.js';

const createFooter = (obj) => {
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
    `https://twitter.com/intent/tweet?url/${obj.href}`
  );
  anchor.setAttribute('target', '_blank');
  let twitterIcon = document.createElement('img');
  twitterIcon.setAttribute('class', 'share-icon');
  twitterIcon.setAttribute('src', 'styles/images/twit.png');
  anchor.append(twitterIcon);
  blogFooter.append(anchor);
  return blogFooter;
};

const createBlogBody = (obj) => {
  let blogBody = document.createElement('div');
  blogBody.setAttribute('class', 'intro-paragraph');
  blogBody.setAttribute('data-href', obj.href);
  blogBody.textContent = obj.text;
  return blogBody;
};

const createBlogTitle = (obj) => {
  let blogTitle = document.createElement('div');
  blogTitle.setAttribute('class', 'blog-title');
  let titleText = document.createElement('h1');
  titleText.textContent = obj.title;
  blogTitle.append(titleText);
  return blogTitle;
};

const createBlogHeader = (obj) => {
  let blogHeader = document.createElement('div');
  blogHeader.setAttribute('class', 'blog-header');
  let pic = document.createElement('img');
  pic.setAttribute('class', 'picture');
  pic.setAttribute('src', 'styles/images/nick_bw.jpg');
  blogHeader.append(pic);
  let date = document.createElement('h5');
  date.setAttribute('class', 'blog-date');
  date.textContent = obj.date;
  blogHeader.append(date);
  return blogHeader;
};

const createPostBody = (obj) => {
  let postBody = document.createElement('div');
  postBody.setAttribute('class', 'post-body');
  postBody.setAttribute('data-href', obj.href);
  return postBody;
};

let blogList = document.getElementById('blog-list');
const attachBlogPreview = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let entry = arr[i];

    let singlePost = document.createElement('div');
    singlePost.setAttribute('class', 'single-post');

    let postBody = createPostBody(entry);
    singlePost.append(postBody);

    let blogHeader = createBlogHeader(entry);
    postBody.append(blogHeader);

    let blogTitle = createBlogTitle(entry);
    postBody.append(blogTitle);

    let blogBody = createBlogBody(entry);
    postBody.append(blogBody);

    let blogFooter = createFooter(entry);
    singlePost.append(blogFooter);

    blogList.append(singlePost);
  }
};

attachBlogPreview(blogPreview);

//Attach click event
let post = document.getElementsByClassName('post-body');
for (let j = 0; j < post.length; j++) {
  post[j].addEventListener('click', (e) => {
    let href = e.currentTarget.dataset.href;
    window.location = href;
  });
}
