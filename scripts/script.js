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
