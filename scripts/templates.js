function bookTemplate(book, i) {
  return /*html*/ `
      <h2>${book.name}</h2>
      <p>Kommentare:</p>
      <div id="comment_section_${i}"></div>
      <form>
        <input type="text" required>
        <button type="submit">Eingabe</button>
      </form>
    `;
}

function commentsTemplate(comments, j) {
  return /*html*/ `
      <span>${comments[j].comment}</span>
      <br>
    `;
}
