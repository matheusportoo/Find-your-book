import React from 'react';

import { useTheme } from '../../contexts/theme';
import { ThemeProvider } from 'styled-components';
import * as S from './style';

const ListingBooks = ({ books }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <S.ListingBooks>
        {books.map((book) => (
          <S.ListingBooks.Link to={`/books/${book.id}`} key={book.id}>
            <S.ListingBooks.Cover>
              <S.ListingBooks.CoverImg
                src={book.volumeInfo.imageLinks.thumbnail}
              />
            </S.ListingBooks.Cover>
            <S.ListingBooks.Title>{book.volumeInfo.title}</S.ListingBooks.Title>
          </S.ListingBooks.Link>
        ))}
      </S.ListingBooks>
    </ThemeProvider>
  );
};

export default ListingBooks;
