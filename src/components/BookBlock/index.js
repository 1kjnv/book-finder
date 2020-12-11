import React from 'react';
import { Link } from 'react-router-dom';

import { BookBlock as BookBlockStyled } from './styles';

const BookBlock = (props) => {
  const { id, thumbnailUrl, title, authors, description } = props.book;

  return (
    <BookBlockStyled>
      <div className="thumbnail">
        <img src={thumbnailUrl} alt={title} />
      </div>
      <div className="book-data">
        <div className="main-info">
          <h3>{title.slice(0,13)}</h3>
          <h5>{authors ? authors.join(', ').slice(0, 13) : ''}</h5>
        </div>
        <p>{description}</p>
        <div className="details">
          <Link to={`/books/${encodeURIComponent(id)}`}>
            Details <i className="fas fa-info-circle"></i>
          </Link>
        </div>
      </div>
    </BookBlockStyled>
  );
};

export default BookBlock;