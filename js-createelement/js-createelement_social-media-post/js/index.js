console.clear();
// Exercise:
// Use document.createElement() and append another social media postSection to the body.

const body = document.querySelector("body");
//* likeButtoon left in order to keep the challenge indexhtml untouched:
const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const initChallenge = () => {
  console.log("init");
  appendPost();
};

const createPostContent = () => {
  const postContent = document.createElement("p");

  postContent.classList.add("post__content");
  postContent.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  return postContent;
};

const createPostUserName = () => {
  const postUserName = document.createElement("span");

  postUserName.classList.add("post__username");
  postUserName.textContent = "@username";

  return postUserName;
};
const createPostLikeButton = () => {
  const postLikeButton = document.createElement("button");

  postLikeButton.classList.add("post__button");
  postLikeButton.addEventListener("click", handleLikeButtonClick);

  postLikeButton.textContent = "♥ Like";

  return postLikeButton;
};

function handleLikeButtonClick(event) {
  const buttonElement = event.target;

  buttonElement.classList.toggle("post__button--liked");
}

const createPostFooter = () => {
  const postFooter = document.createElement("footer");
  postFooter.classList.add("post__footer");

  const userName = createPostUserName();
  const likeButton = createPostLikeButton();

  postFooter.append(userName, likeButton);

  return postFooter;
};

const createPostSection = () => {
  const postSection = document.createElement("section");
  postSection.classList.add("post");

  const content = createPostContent();
  const footer = createPostFooter();

  postSection.append(content, footer);

  return postSection;
};
const appendPost = () => {
  const post = createPostSection();

  body.append(post);
};

window.addEventListener("load", initChallenge);
