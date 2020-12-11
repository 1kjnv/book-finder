import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BookDetail from '../components/BookDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookDetailsPage = ({ match }) => {
  const {
    params: { bookId },
  } = match;
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
    const fetchBooks = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(`${API_BASE_URL}/${bookId}`);
        setBook(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchBooks();
  }, [bookId]);

  return (
    <>
      <Link to="/">Home</Link>
      {
        loading && (
          <div className="text-success">
            Loading book details for book ID: <strong>{bookId}</strong>
          </div>
        )
      }
      {
        error && (
          <div className="text-danger">
            some error occurred, while fetching API.
          </div>
        )
      }
      { book && <BookDetail book={book} /> }
    </>
  );
}

export default BookDetailsPage;