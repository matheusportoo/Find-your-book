import React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../contexts/theme';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';

const BookDetails = ({ book, onClickFavoriteButton, isFavoriteBook }) => {
  const {
    title,
    subtitle,
    authors,
    year,
    totalPages,
    description,
    categories
  } = book;
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <S.BookDetails.FavoriteBooks
        onClick={onClickFavoriteButton}
        isFavoriteBook={isFavoriteBook}
      >
        <svg>
          <use xlinkHref="#heart" />
        </svg>
        {isFavoriteBook
          ? 'Adicionado a lista de favoritos'
          : 'Adicionar a lista de favoritos'}
      </S.BookDetails.FavoriteBooks>

      <S.BookDetails.Title>{title}</S.BookDetails.Title>
      <S.BookDetails.Subtitle>{subtitle}</S.BookDetails.Subtitle>

      <S.BookDetails.Info>
        <S.BookDetails.InfoKey>Autores:</S.BookDetails.InfoKey>
        <S.BookDetails.InfoValue>
          {authors
            ? authors.map((author, index) => (
                <S.BookDetails.Author key={`book-detail-author-${index}`}>
                  {author}
                </S.BookDetails.Author>
              ))
            : '-'}
        </S.BookDetails.InfoValue>
        <S.BookDetails.InfoKey>Ano de publicação:</S.BookDetails.InfoKey>
        <S.BookDetails.InfoValue>{year || '-'}</S.BookDetails.InfoValue>
        <S.BookDetails.InfoKey>Quantidade de páginas: </S.BookDetails.InfoKey>
        <S.BookDetails.InfoValue>{totalPages || '-'}</S.BookDetails.InfoValue>
        <S.BookDetails.InfoKey>Descrição:</S.BookDetails.InfoKey>
        <S.BookDetails.InfoValue>
          {description ? (
            <div
              dangerouslySetInnerHTML={{
                __html: description
              }}
            ></div>
          ) : (
            '-'
          )}
        </S.BookDetails.InfoValue>
        <S.BookDetails.InfoKey>Categorias:</S.BookDetails.InfoKey>
        <S.BookDetails.InfoValue>
          {categories
            ? categories.map((category, index) => (
                <S.BookDetails.Categories
                  key={`book-detail-categories-${index}`}
                >
                  {category}
                </S.BookDetails.Categories>
              ))
            : '-'}
        </S.BookDetails.InfoValue>
      </S.BookDetails.Info>
    </ThemeProvider>
  );
};

BookDetails.propTypes = {
  book: PropTypes.object,
  onClickFavoriteButton: PropTypes.func,
  isFavoriteBook: PropTypes.bool
};

export default BookDetails;
