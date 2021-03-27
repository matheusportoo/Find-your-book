import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import * as S from './style';

const Content = ({ children }) => (
  <S.Content>
    <Container>{children}</Container>
  </S.Content>
);

Content.propTypes = {
  children: PropTypes.node
};

export default Content;
