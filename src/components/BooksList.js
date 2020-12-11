import React from 'react';
import { Link } from 'react-router-dom';
import { bookAuthors } from '../utils/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const Book = ({ book }) => {
  return (
    <li>
      <div>
        <img className="img-fluid" alt={book.volumeInfo.title} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
        <div>
          <h3>
            <Link to={`/book/${book.id}`}>{book.volumeInfo.title}</Link>
          </h3>
          <p>{bookAuthors(book.volumeInfo.authors)}</p>
          <p>{book.volumeInfo.publishedDate}</p>
        </div>
      </div>
      <hr />
    </li>
  )
}

const BooksList = ({ books }) => {
  return (
    <ul>
      {
        books.items.map((book, index) => {
          return <Book book={book} key={index} />
        })
      }
    </ul>
  )
}

export default BooksList;