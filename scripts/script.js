function init() {
  renderBooks();
  renderComments();
}

const getBooksId = document.getElementById('book_cards');

function renderBooks() {
  let booksIntoHTML = '';

  for (let i = 0; i < allBooks.length; i++) {
    const book = allBooks[i];
    booksIntoHTML += bookTemplate(book, i);
  }

  getBooksId.innerHTML = booksIntoHTML;
}

function renderComments() {
  for (let i = 0; i < allBooks.length; i++) {
    const comments = allBooks[i].comments;
    const targetId = document.getElementById(`comment_section_${i}`);

    let commentsHTML = '';
    for (let j = 0; j < comments.length; j++) {
      commentsHTML += commentsTemplate(comments, j);
    }

    targetId.innerHTML = commentsHTML;
  }
}
