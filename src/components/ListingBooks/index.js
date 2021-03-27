import React from 'react';
import * as S from './style';

const ListingBooks = ({ books }) => (
  <S.ListingBooks>
    {books.map((book) => (
      <S.ListingBooks.Link to={`/books/${book.id}`} key={book.id}>
        <S.ListingBooks.Cover>
          <S.ListingBooks.CoverImg src={book.volumeInfo.imageLinks.thumbnail} />
        </S.ListingBooks.Cover>
        <S.ListingBooks.Title>{book.volumeInfo.title}</S.ListingBooks.Title>
      </S.ListingBooks.Link>
    ))}
  </S.ListingBooks>
);

export default ListingBooks;
