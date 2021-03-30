import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Content from '../../components/Content';
import BookDetails from '../../components/BookDetails';

import ServiceBook from '../../services/books';

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [isFetchingBook, setIsFetchingBook] = useState(true);

  const hasBook = () => Object.keys(book).length > 0;
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

      {!hasBook() &&
        !isFetchingBook &&
        'Não foi possível buscar o livro que deseja'}
    </Content>
  );
};

export default BookDetail;
