import styled from 'styled-components';
import { mediaQuery } from '../../tools';

export const BookDetails = {};

BookDetails.FavoriteBooks = styled.button`
  background-color: ${(props) =>
    props.isFavoriteBook ? `var(--color-highlight-dark)` : `transparent`};
  font-family: var(--font-family-default);
  border: 1px solid var(--color-highlight);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 15px 18px;
  color: ${(props) =>
    props.isFavoriteBook ? `var(--color-light)` : `var(--color-dark)`};

  svg {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  &:focus {
    outline: 2px solid var(--color-highlight-dark);
  }

  ${mediaQuery.mobile`
    padding: 10px 12px;
  `}
`;

BookDetails.Title = styled.h2`
  margin-top: 25px;
  margin-bottom: 0;
  line-height: 1.3;
  font-size: 4rem;
  color: ${(props) => props.theme.colors.defaultText};

  ${mediaQuery.tabletDesktop`
    font-size: 6.6rem;
  `};
`;

BookDetails.Subtitle = styled.h3`
  font-size: 2.6rem;
  font-weight: var(--font-weight-light);
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.defaultText};
`;

BookDetails.Info = styled.dl`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.defaultText};
`;

BookDetails.InfoKey = styled.dt`
  font-weight: var(--font-weight-black);
  margin-top: 20px;
`;
BookDetails.InfoValue = styled.dd`
  font-weight: var(--font-weight-regular);
  margin-left: 0;
`;

BookDetails.Author = styled.p`
  font-size: 1.6rem;
`;

BookDetails.Categories = styled.p`
  display: inline-block;
  background-color: var(--color-highlight);
  padding: 8px;
  border-radius: 2px;
  font-weight: var(--font-weight-black);
  font-size: 1.4rem;
`;
