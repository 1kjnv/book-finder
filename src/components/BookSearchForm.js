import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookSearchForm = ({
  handleSubmit,
  searchValue,
  handleChange,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Search for books</span>
        <input
          type="search"
          placeholder="enter book name, author etc."
          value={searchValue}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary">Search</button>
      </label>
      {
        error && <div className="text-danger">some error occurred, while fetching API</div>
      }
    </form>
  )
}

export default BookSearchForm;