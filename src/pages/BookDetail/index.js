import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { ACTIONS } from '../../store/actions';

import Content from '../../components/Content';
import BookDetails from '../../components/BookDetails';
import DefaultMessage from '../../components/DefaultMessage';

import ServiceBook from '../../services/books';

const BookDetail = ({ favoriteBook, addFavoriteBook, removeFavoriteBook }) => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [isFetchingBook, setIsFetchingBook] = useState(true);

  const hasBook = () => Object.keys(book).length > 0;
  const isFavoriteBook = favoriteBook.some((book) => book.id === bookId);

  const fetchBook = () => {
    ServiceBook.getById(bookId)
      .then((response) => setBook(response.data))
      .catch(() => setBook({}))
      .finally(() => setIsFetchingBook(false));
  };

  useEffect(() => {
    if (!hasBook()) {
      fetchBook();
    }
  });

  return (
    <Content>
      {hasBook() && (
        <BookDetails
          onClickFavoriteButton={() =>
            isFavoriteBook ? removeFavoriteBook(book) : addFavoriteBook(book)
          }
          isFavoriteBook={isFavoriteBook}
          book={{
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            authors: book.volumeInfo.authors,
            year: book.volumeInfo.publishedDate,
            totalPages: book.volumeInfo.pageCount,
            description: book.volumeInfo.description,
            categories: book.volumeInfo.categories
          }}
        />
      )}

      {!isFetchingBook && !hasBook() && (
        <DefaultMessage content="Não foi possível buscar o livro que deseja" />
      )}
    </Content>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteBook: state.favoriteBook
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavoriteBook: (book) => {
      dispatch(ACTIONS.addFavoriteBook(book));
    },
    removeFavoriteBook: (book) => {
      dispatch(ACTIONS.removeFavoriteBook(book));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
