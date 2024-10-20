const Book = (props) => {
  const { img, title, author, index } = props;
  //   const { img, title, author, getBook, id } = props;
  //   const getSingleBook = () => {
  //     getBook(id);
  //   };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <span className="number">{`# ${index + 1}`}</span>
      {/* <button onClick={getSingleBook}>Click me</button> */}
    </article>
  );
};

export default Book;
