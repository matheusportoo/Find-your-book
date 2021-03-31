import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaQuery } from '../../tools';
import { SwitchButton } from '../SwitchButton/style';

export const Header = styled.header`
  background-color: var(--color-dark);
  border-bottom: 1px solid var(--color-highlight);
  padding: 30px 0;
  height: var(--header-height);
`;

Header.GoBack = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: var(--color-highlight);
  border: 0;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
    color: var(--color-highlight-dark);
  }

  ${mediaQuery.desktop`
    left: 20px;
  `}

  svg {
    width: 24px;
    height: 24px;
  }
`;

Header.Link = styled(Link)`
  text-decoration: none;
  outline: none;
  color: var(--color-light);
  display: block;
  width: 250px;
  margin: 0 auto;

  &:hover {
    color: var(--color-highlight);
  }

  &:focus {
    color: var(--color-highlight-dark);
  }
`;

Header.Title = styled.h1`
  margin: 0 auto;
  font-size: 2rem;
  color: currentColor;
  line-height: 1;
  font-weight: var(--font-weight-regular);
  text-align: center;

  span {
    font-weight: var(--font-weight-black);
  }
`;

Header.Info = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;

  ${mediaQuery.desktop`
    right: 20px;
  `}
`;

Header.FavoriteBooks = styled(Link)`
  width: auto;
  height: auto;
  color: var(--color-highlight);
  font-size: 0;
  position: relative;
  text-decoration: none;

  span {
    color: var(--color-dark);
    font-size: 1rem;
    background: var(--color-light);
    line-height: 1;
    padding: 2px;
    border-radius: 4px;
    top: -5px;
    right: -5px;
    position: absolute;
    font-weight: var(--font-weight-regular);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

Header.SwitchButton = styled(SwitchButton)`
  margin-left: 15px;
`;
