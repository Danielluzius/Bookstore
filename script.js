const allBooks = [
  {
    name: 'Die Geheimnisse des Ozeans',
    author: 'Clara Meer',
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: 'Fantasy',
    comments: [
      {
        name: 'Leser123',
        comment: 'Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.',
      },
      {
        name: 'Bookworm84',
        comment: 'Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.',
      },
      {
        name: 'FantasyFanatic',
        comment: 'Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.',
      },
      {
        name: 'SciFiGuru',
        comment: 'Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.',
      },
      {
        name: 'NovelLover',
        comment: 'Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.',
      },
    ],
  },
  {
    name: 'Der vergessene Pfad',
    author: 'Maximilian Schwarz',
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: 'Fantasy',
    comments: [],
  },
  {
    name: 'Die Farben des Himmels',
    author: 'Laura Blau',
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: 'Romantik',
    comments: [
      {
        name: 'LeserPeter',
        comment: 'Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.',
      },
      {
        name: 'BookLover21',
        comment: 'Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.',
      },
      {
        name: 'FantasyNerd',
        comment: 'Fantastische Welten und epische Abenteuer - genau mein Geschmack!',
      },
      {
        name: 'SciFiEnthusiast',
        comment: 'Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.',
      },
      {
        name: 'ReadingAddict',
        comment: 'Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.',
      },
    ],
  },
];

function init() {
  renderBooks();
}

function renderBooks() {
  let html = '';

  for (let i = 0; i < allBooks.length; i++) {
    let book = allBooks[i];

    commentHTML = '';

    // Generiert HTML für Kommentare
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
                    </div>
    `;
  }
  document.getElementById('book_cards').innerHTML = html;
}
