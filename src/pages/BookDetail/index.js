import React from 'react';

import Header from '../../components/Header';
import Content from '../../components/Content';
import BookDetails from '../../components/BookDetails';

import response from '../../data/response.json';

const BookDetail = () => {
  const book = response.items[8];

  return (
    <>
      <Header title="Encontre seu livro" />
      <Content>
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
      </Content>
    </>
  );
};

export default BookDetail;
