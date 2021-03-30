import styled from 'styled-components';
import { mediaQuery } from '../../tools';
export const MainSearch = styled.form``;

MainSearch.Title = styled.h2`
  line-height: 1.2;
  margin: 0 auto 40px;
  text-align: center;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.defaultText};

  ${mediaQuery.tabletDesktop`
    font-size: 6.8rem;
    margin-bottom: 40px;
    max-width: 780px;
    margin: 0 auto 40px;
    text-align: center;
  `};
`;

MainSearch.Field = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${mediaQuery.tabletDesktop`
    flex-direction: row;
  `}
`;

MainSearch.Input = styled.input`
  width: 100%;
  font-size: 1.6rem;
  padding: 10px;
  line-height: 1.8;
  border-radius: 0;
  border: 2px solid var(--color-highlight);

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus,
  &:hover {
    outline: 4px solid var(--color-highlight-dark);
  }
`;

MainSearch.SubmitButton = styled.button`
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

  ${mediaQuery.tabletDesktop`
    margin-top: 0;
    margin-left: 10px;
    width: auto;
  `}
`;
