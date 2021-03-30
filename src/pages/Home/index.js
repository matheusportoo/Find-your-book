import React, { useEffect, useState } from 'react';

import Content from '../../components/Content';
import ListingBooks from '../../components/ListingBooks';
import MainSearch from '../../components/MainSearch';

import ServiceBook, {
  DEFAULT_OPTIONS as SERVICE_BOOK_DEFAULT_OPTIONS
} from '../../services/books';
import usePrevious from '../../hooks/use-previous';

import * as S from './style';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [term, setTerm] = useState('');
  const [isFetchingTerm, setIsFetchingTerm] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    booksPerPage: SERVICE_BOOK_DEFAULT_OPTIONS.resultsPerPage,
    totalPage: 1
  });
  const prevTerm = usePrevious(term);

  useEffect(() => {
    if (term && prevTerm !== term) {
      fetchBooks();
    }
  });

  const fetchBooks = () => {
    setIsFetchingTerm(true);

    ServiceBook.get({ query: term, page: 1 })
      .then((response) => {
        setBooks(response.data.items);
        setPagination({
          currentPage: 1,
          booksPerPage: SERVICE_BOOK_DEFAULT_OPTIONS.resultsPerPage,
          totalPage: Math.ceil(
            response.data.totalItems / pagination.booksPerPage
          )
        });
      })
      .catch(() => setBooks([]))
      .finally(() => setIsFetchingTerm(false));
  };

  const loadMore = () => {
    if (pagination.currentPage <= pagination.totalPage) {
      setPagination({
        currentPage: (pagination.currentPage += 1),
        booksPerPage: SERVICE_BOOK_DEFAULT_OPTIONS.resultsPerPage,
        totalPage: pagination.totalPage
      });

      setIsFetchingTerm(true);

      ServiceBook.get({ query: term, page: pagination.currentPage })
        .then((response) => setBooks([...books, ...response.data.items]))
        .catch(() => setBooks([]))
        .finally(() => setIsFetchingTerm(false));
    }
  };

  const isShowLoadMoreButton = () =>
    pagination.totalPage > 1 && pagination.currentPage !== pagination.totalPage;

  return (
    <Content>
      <MainSearch onSubmit={setTerm} isDisabled={isFetchingTerm} />
      <S.Home.ListingBooks>
        <ListingBooks books={books} />
      </S.Home.ListingBooks>
      {isShowLoadMoreButton() ? (
        <S.Home.LoadMore>
          <S.Home.LoadMoreButton
            onClick={loadMore}
            children="Carregar mais"
            disabled={isFetchingTerm}
          />
        </S.Home.LoadMore>
      ) : null}
    </Content>
  );
};

export default Home;
