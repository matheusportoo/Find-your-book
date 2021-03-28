import React from 'react';
import { useTheme } from '../../contexts/theme';
import { ThemeProvider } from 'styled-components';
import * as S from './style';

const MainSearch = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <S.MainSearch>
        <S.MainSearch.Title>
          Busque pelo seu autor ou livro preferido : )
        </S.MainSearch.Title>
        <S.MainSearch.Field>
          <S.MainSearch.Input placeholder="Digite o nome do livro ou autor que você deseja..." />
          <S.MainSearch.SubmitButton children="pesquisar" />
        </S.MainSearch.Field>
      </S.MainSearch>
    </ThemeProvider>
  );
};

export default MainSearch;
