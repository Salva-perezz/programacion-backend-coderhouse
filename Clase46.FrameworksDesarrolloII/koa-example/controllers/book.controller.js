const books = [
  { id: 101, name: "Fight Club", author: "Chuck Palahniuk" },
  { id: 102, name: "Sharp Objects", author: "Gillian Flynn" },
  { id: 103, name: "Frankenstein", author: "Mary Shelley" },
  { id: 104, name: "Into The Willd", author: "Jon Krakauer" },
];

const getBookById = (ctx) => {
  const bookId = ctx.params.id;
  const getCurrentBook = books.filter((book) => book.id === Number(bookId));

  if (getCurrentBook.length) {
    ctx.body = {
      status: "Succes",
      data: getCurrentBook[0],
    };
  } else {
    ctx.response.status = 404;
    ctx.body = {
      status: "Not found",
      message: `Book with ID: ${bookId} not found`,
    };
  }
};

const createBook = (ctx) => {
  const { id, name, author } = ctx.request.body;

  if (!id || !name || !author) {
    ctx.response.status = 400;
    ctx.body = {
      status: "Missing data",
      message: "Please enter the data",
    };
  } else {
    books.push({
      id,
      author,
      name,
    });

    ctx.response.status = 201;
    ctx.body = {
      status: "Created",
      message: `Book with name: ${name} added`,
    };
  }
};

const updateBook = (ctx) => {
  const { id, name, author } = ctx.request.body;

  if (!id || !name || !author) {
    ctx.response.status = 400;
    ctx.body = {
      status: "Missing data",
      message: "Please enter the data",
    };
  } else {
    const bookId = ctx.params.id;
    const bookIndex = books.findIndex((book) => book.id === Number(bookId));

    books.splice(bookIndex, 1, ctx.request.body);

    ctx.response.status = 201;
    ctx.body = {
      status: "Updated",
      message: `Book with ID: ${bookId} updated!`,
    };
  }
};

const deleteBook = (ctx) => {
  const bookId = ctx.params.id;
  const bookIndex = books.findIndex((book) => book.id === Number(bookId));

  books.splice(bookIndex, 1);

  ctx.response.status = 200;
  ctx.body = {
    status: "Deleted",
    message: `Book with ID: ${bookId} deleted!`,
  };
};

const getAllBooks = (ctx) => {
  ctx.response.status = 200;
  ctx.body = {
    status: "Succes",
    data: books,
  };
};

export default {
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getAllBooks,
};
