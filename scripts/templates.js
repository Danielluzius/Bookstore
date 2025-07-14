function bookTemplate(bookRef, i) {
  return /*html*/ `
  <div class="book-card">
      <h2>${bookRef.name}</h2>
      <div class="line"></div>
      <img src="./assets/img/book.png" alt="Bookstore Logo" class="book-logo" />
      <div class="line"></div>
      <div class="price-wrapper">
        <p class="red-text">${bookRef.price.toFixed(2).replace('.', ',')} €</p>
        <div class="likes">
          <p id="likes_count_${i}">${bookRef.likes}</p>
          <p id="heart_${i}" class="heart" onclick="toggleLike(${i})">
            ${bookRef.liked ? '❤️' : '🩶'}
          </p>
        </div>
      </div>
      <div class="line"></div>
        <div class="info-wrapper">
          <div class="info">
            Autor<br>
            Release<br>
            Genre<br>
          </div>
          <div class="info-position">
            : ${bookRef.author} <br>
            : ${bookRef.publishedYear} <br>
            : ${bookRef.genre} <br>
          </div>
        </div>
        <div class="line"></div>
      <h3>Kommentare:</h3>
      <div class="line"></div>
      <div class="comments-section">
        <div class="comment-list" id="comment_section_${i}"></div>
      </div>
      <div class="line"></div>
        <form onsubmit="addComment(${i}); return false;" class="comment-form">
          <input type="text" required placeholder="Dein Kommentar" id="input_${i}" />
        <input type="image" src="./assets/img/sendicon.png" class="send-icon"/>
        </form>
  </div>
    `;
}

function commentsTemplate(commentRef, j) {
  return /*html*/ `
  <div class="comments-wrapper">
    <div class="user-length">
      ${commentRef[j].name}:
    </div>
    <div class="comment-position">
      ${commentRef[j].comment}
    </div>
  </div>
    `;
}
