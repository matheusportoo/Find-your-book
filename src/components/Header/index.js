import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { route } from '../../routes/routes';
import { themes, useTheme } from '../../contexts/theme';
import Container from '../Container';

import * as S from './style';

const Header = ({ favoriteBook }) => {
  const { theme, setTheme } = useTheme();
  const history = useHistory();
  const isHome = () => window.location.pathname === route.home;
  const changeTheme = () => {
    setTheme(theme.key === 'dark' ? themes.light : themes.dark);
  };
  const handleGoBack = () => history.go(-1);

  return (
    <S.Header>
      <Container>
        {!isHome() && (
          <S.Header.GoBack
            onClick={handleGoBack}
            type="button"
            aria-label="Back page"
          >
            <svg>
              <use xlinkHref="#back" />
            </svg>
          </S.Header.GoBack>
        )}
        <S.Header.Link to={route.home}>
          <S.Header.Title>
            F. <span>Book</span>
          </S.Header.Title>
        </S.Header.Link>
        <S.Header.Info>
          <S.Header.FavoriteBooks to={route.favoriteBooks}>
            {favoriteBook.length > 0 ? (
              <span>{favoriteBook.length}</span>
            ) : null}
            <svg>
              <use xlinkHref="#heart" />
            </svg>
          </S.Header.FavoriteBooks>
          <S.Header.SwitchButton
            onClick={changeTheme}
            isOn={theme.key === 'dark'}
            children="mudar tema"
          />
        </S.Header.Info>
      </Container>
    </S.Header>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteBook: state.favoriteBook
  };
};

export default connect(mapStateToProps, null)(Header);
