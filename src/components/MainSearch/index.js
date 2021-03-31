import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../contexts/theme';
import { ThemeProvider } from 'styled-components';
import * as S from './style';

const MainSearch = ({ onSubmit, isDisabled, term = '' }) => {
  const { theme } = useTheme();
  const [reserchedTerm, setReserchedTerm] = useState(term);
  const searchField = useRef(null);

  const onSubmitForm = (event) => {
    event.preventDefault();
    onSubmit(searchField.current.value);
  };

  const onInputSearchField = () => {
    setReserchedTerm(searchField.current.value);
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
            value={reserchedTerm}
            onInput={onInputSearchField}
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
  isDisabled: PropTypes.bool,
  term: PropTypes.string
};

export default MainSearch;
