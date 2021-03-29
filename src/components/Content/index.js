import React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../contexts/theme';
import { ThemeProvider } from 'styled-components';
import Container from '../Container';

import * as S from './style';

const Content = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <S.Content>
        <Container>{children}</Container>
      </S.Content>
    </ThemeProvider>
  );
};

Content.propTypes = {
  children: PropTypes.node
};

export default Content;
