import React, { useState } from 'react';
import axios from 'axios';

import BookSearchForm from '../components/BookSearchForm';
import Loader from '../components/Loader';
import BooksList from '../components/BooksList';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [books, setBooks] = useState({items: []});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_URL}?q=${searchValue}`);
      setBooks(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  }

  return (
    <>
      <BookSearchForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        searchValue={searchValue}
        error={error}
      />
      <Loader searchValue={searchValue} loading={loading} />
      <BooksList books={books} />
    </>
  );
}

export default SearchPage;