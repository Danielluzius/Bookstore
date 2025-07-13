function bookTemplate(bookRef, i) {
  return /*html*/ `
  <div class="book-card">
    
      <h2>${bookRef.name}</h2>
      <img src="./assets/img/book.png" alt="Bookstore Logo" class="book-logo" />
      <div class="price-wrapper">
        <p>${bookRef.price} €</p>
        <div class="likes">
          <p>${bookRef.likes}</p>
          <p>❤️</p>
        </div>
      </div>
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
      <h3>Kommentare:</h3>
      <div class="comment-list" id="comment_section_${i}"></div>
      <form>
        <input type="text" required>
        <button type="submit">Eingabe</button>
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
