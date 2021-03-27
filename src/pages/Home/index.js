import React from 'react';

import Content from '../../components/Content';
import Header from '../../components/Header';
import ListingBooks from '../../components/ListingBooks';
import MainSearch from '../../components/MainSearch';
import response from '../../data/response.json';

import * as S from './style';

const Home = () => (
  <>
    <Header title="Encontre seu livro" />
    <Content>
      <MainSearch />
      <S.Home.ListingBooks>
        <ListingBooks books={response.items} />
      </S.Home.ListingBooks>
    </Content>
  </>
);

export default Home;
