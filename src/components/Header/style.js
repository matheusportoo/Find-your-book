import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SwitchButton } from '../SwitchButton/style';

export const Header = styled.header`
  background-color: var(--color-dark);
  border-bottom: 1px solid var(--color-highlight);
  padding: 30px 0;
  height: var(--header-height);
`;

Header.Link = styled(Link)`
  text-decoration: none;
`;

Header.Title = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  color: var(--color-light);
  line-height: 1;
  font-weight: var(--font-weight-black);
  display: inline-block;
`;

Header.SwitchButton = styled(SwitchButton)`
  float: right;
  margin-top: -1px;
`;
