import styled from 'styled-components';
import { mediaQuery } from '../../tools';

export const Home = styled.div``;

Home.ListingBooks = styled.div`
  margin-top: 60px;

  ${mediaQuery.tabletDesktop`
    margin-top: 100px;
  `}
`;
