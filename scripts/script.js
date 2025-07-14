function init() {
  renderBooks();
  renderComments();
}

const getBookCardsById = document.getElementById('book_cards');

function renderBooks() {
  let bookHtml = '';

  for (let i = 0; i < allBooks.length; i++) {
    const bookRef = allBooks[i];

    bookHtml += bookTemplate(bookRef, i);
  }
  getBookCardsById.innerHTML = bookHtml;
}

function renderComments() {
  for (let i = 0; i < allBooks.length; i++) {
    const commentRef = allBooks[i].comments;
    const targetID = document.getElementById(`comment_section_${i}`);

    let commentHtml = '';

    for (let j = 0; j < commentRef.length; j++) {
      commentHtml += commentsTemplate(commentRef, j);
    }
    targetID.innerHTML = commentHtml;
  }
}

function addComment(i) {
  const inputComment = document.getElementById(`input_${i}`);
  const commentText = inputComment.value.trim();

  if (commentText) {
    allBooks[i].comments.push({
      name: 'Neuer Nutzer',
      comment: commentText,
    });

    inputComment.value = '';
    renderComments();
  }
}

function toggleLike(i) {
  const likeRef = allBooks[i];
  const heart = document.getElementById(`heart_${i}`);
  const count = document.getElementById(`likes_count_${i}`);

  likeRef.liked = !likeRef.liked;

  if (likeRef.liked) {
    likeRef.likes++;
  } else {
    likeRef.likes--;
  }

  heart.innerText = likeRef.liked ? '❤️' : '🩶';
  count.innerText = likeRef.likes;
}
