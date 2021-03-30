import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../contexts/theme';
import { ThemeProvider } from 'styled-components';
import * as S from './style';

const MainSearch = ({ onSubmit, isDisabled }) => {
  const { theme } = useTheme();
  const searchField = useRef(null);

  const onSubmitForm = (event) => {
    event.preventDefault();
    onSubmit(searchField.current.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <S.MainSearch onSubmit={onSubmitForm}>
        <S.MainSearch.Title>
          Busque pelo seu autor ou livro preferido : )
        </S.MainSearch.Title>
        <S.MainSearch.Field>
          <S.MainSearch.Input
            placeholder="Digite o nome do livro ou autor que você deseja..."
            ref={searchField}
            disabled={isDisabled}
          />
          <S.MainSearch.SubmitButton
            children="pesquisar"
            disabled={isDisabled}
          />
        </S.MainSearch.Field>
      </S.MainSearch>
    </ThemeProvider>
  );
};

MainSearch.propTypes = {
  onSubmit: PropTypes.func,
  isDisabled: PropTypes.bool
};

export default MainSearch;
