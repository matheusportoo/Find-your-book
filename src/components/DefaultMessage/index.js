import React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../contexts/theme';
import { ThemeProvider } from 'styled-components';
import { route } from '../../routes/routes';

import * as S from './style';

const DefaultMessage = ({ content }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <S.DefaultMessage.Wrapper>
        <S.DefaultMessage.Content>{content}</S.DefaultMessage.Content>
        <S.DefaultMessage.Link to={route.home}>
          Voltar para página inicial
        </S.DefaultMessage.Link>
      </S.DefaultMessage.Wrapper>
    </ThemeProvider>
  );
};

DefaultMessage.propTypes = {
  content: PropTypes.string
};

export default DefaultMessage;
