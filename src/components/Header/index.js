import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import * as S from './style';

const Header = ({ title }) => (
  <S.Header>
    <Container>
      <S.Header.Title>{title}</S.Header.Title>
    </Container>
  </S.Header>
);

Container.propTypes = {
  title: PropTypes.string
};

export default Header;
