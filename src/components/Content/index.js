import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '../../contexts/theme';

import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';

import * as S from './style';

const Content = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <S.Content>
        <Container>{children}</Container>
      </S.Content>
      <Footer />
    </ThemeProvider>
  );
};

Content.propTypes = {
  children: PropTypes.node
};

export default Content;
