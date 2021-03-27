import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaQuery } from '../../tools';

export const ListingBooks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  ${mediaQuery.tablet`
    grid-template-columns: repeat(4, 1fr);
  `}

  ${mediaQuery.desktop`
    grid-template-columns: repeat(5, 1fr);
  `}
`;

ListingBooks.Link = styled(Link)`
  text-decoration: none;
`;
ListingBooks.Title = styled.h3`
  font-size: 1.6rem;
  color: var(--color-dark);

  ${ListingBooks.Link}:hover & {
    color: var(--color-highlight);
  }
`;

ListingBooks.Cover = styled.div`
  width: 100%;
  padding-top: 140%;
  position: relative;
  border: 1px solid var(--color-dark);
  overflow: hidden;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: var(--color-highlight);
    z-index: 1;
  }

  ${ListingBooks.Link}:hover &::after {
    opacity: 0.4;
  }
`;

ListingBooks.CoverImg = styled.img`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
