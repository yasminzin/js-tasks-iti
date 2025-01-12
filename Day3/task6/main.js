var library = {
  books: [
    {
      title: "title1",
      author: "author1",
      year: "year1",
    },
    {
      title: "title2",
      author: "author2",
      year: "year2",
    },
    {
      title: "title3",
      author: "author3",
      year: "year3",
    },
  ],
};

function getTitles() {
  for (var i = 0; i < library.books.length; i++) {
    console.log(library.books[i].title);
  }
}

getTitles();
