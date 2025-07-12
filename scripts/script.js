function init() {
  renderBooks();
}

function renderBooks() {
  let html = '';

  for (let i = 0; i < allBooks.length; i++) {
    let book = allBooks[i];

    commentHTML = '';

    for (let j = 0; j < book.comments.length; j++) {
      let c = book.comments[j];
      commentHTML += /*html*/ `
        <div class="comment">
          <strong>${c.name}</strong>: ${c.comment}
        </div>
      `;
    }

    if (book.comments.length === 0) {
      commentHTML = /*html*/ ` <p>(Kein Kommentare vorhanden)</p> `;
    }

    html += /*html*/ `
                    <div class="book-card">
                        <h2>${book.name}</h2>
                        <div class="line"></div>
                        <img src="https://picsum.photos/id/24/200/300" />
                        <div class="line"></div>
                        <div class="price-wrapper">
                            <span class="price">Preis: ${book.price} €</span>
                            <div class="likes">
                                <p class="like-count">Likes: ${book.likes}</p>
                                <button class="like-button">${book.liked ? '❤️' : '🤍'}</button>
                            </div>
                        </div>
                        <p>Autor: ${book.author}</p>
                        <p>Erscheinungsjahr: ${book.publishedYear}</p>
                        <p>Genre: ${book.genre}</p>
                        <div class="line"></div>
                        <h3>Kommentare:</h3>
                        <div class="comment-list">
                          ${commentHTML}
                        </div>
                        <form onsubmit="return addComment(event, ${i})">
                          <input type="text" placeholder="Dein Kommentar…" id="comment-input-${i}" required />
                          <button type="submit">💬 Hinzufügen</button>
                        </form>

                    </div>
    `;
  }
  document.getElementById('book_cards').innerHTML = html;
}

function addComment(event, bookIndex) {
  event.preventDefault();

  const input = document.getElementById(`comment-input-${bookIndex}`);
  const commentText = input.value.trim();

  if (commentText === '') {
    return false;
  }

  allBooks[bookIndex].comments.push({
    name: 'Gast',
    comment: commentText,
  });

  input.value = '';
  renderBooks();

  return false;
}
