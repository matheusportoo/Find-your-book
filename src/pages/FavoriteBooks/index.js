import React from 'react';
import { connect } from 'react-redux';

import Content from '../../components/Content';
import ListingBooks from '../../components/ListingBooks';
import DefaultMessage from '../../components/DefaultMessage';

const FavoriteBooks = ({ favoriteBook }) => {
  return (
    <Content>
      {favoriteBook.length > 0 ? (
        <ListingBooks books={favoriteBook} />
      ) : (
        <DefaultMessage content="Você não possui nenhum livro na lista de favoritos ainda :(" />
      )}
    </Content>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteBook: state.favoriteBook
  };
};

export default connect(mapStateToProps, null)(FavoriteBooks);
