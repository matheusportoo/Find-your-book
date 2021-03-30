import styled from 'styled-components';
import { mediaQuery } from '../../tools';

export const Home = styled.div``;

Home.ListingBooks = styled.div`
  margin-top: 60px;

  ${mediaQuery.tabletDesktop`
    margin-top: 100px;
  `}
`;

Home.LoadMore = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

Home.LoadMoreButton = styled.button`
  font-size: 1.6rem;
  line-height: 1.8;
  padding: 10px 25px;
  border: 2px solid var(--color-highlight);
  background-color: var(--color-dark);
  transition: background-color 0.2s;
  cursor: pointer;
  font-weight: var(--font-weight-black);
  font-family: var(--font-family-default);
  color: var(--color-highlight);
  text-transform: uppercase;
  width: 100%;
  margin-top: 10px;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    background-color: var(--color-highlight);
    color: var(--color-white);
    outline: 4px solid var(--color-highlight-dark);
  }
`;
