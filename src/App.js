import React from "react";
import { books } from "./books";
import Book from "./Book";
import "./index.css";

function App() {
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // };
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} index={index} />;
          // return <Book {...book} key={book.id} getBook={getBook} />;
        })}
      </section>
    </>
  );
}

export default App;
