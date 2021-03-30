import React from 'react';
import PropTypes from 'prop-types';

import { route } from '../../routes/routes';
import { themes, useTheme } from '../../contexts/theme';
import Container from '../Container';

import * as S from './style';

const Header = ({ title }) => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme.key === 'dark' ? themes.light : themes.dark);
  };

  return (
    <S.Header>
      <Container>
        <S.Header.Link to={route.home}>
          <S.Header.Title>{title}</S.Header.Title>
        </S.Header.Link>
        <S.Header.SwitchButton
          onClick={changeTheme}
          isOn={theme.key === 'dark'}
          children="mudar tema"
        />
      </Container>
    </S.Header>
  );
};

Container.propTypes = {
  title: PropTypes.string
};

export default Header;
