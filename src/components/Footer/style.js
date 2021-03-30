import styled from 'styled-components';

export const Footer = styled.footer`
  text-align: center;
  background-color: var(--color-dark);
  height: var(--footer-height);
`;

export const CreatedBy = styled.small`
  border-top: 1px solid var(--color-highlight);
  padding: 1.5rem 0;
  font-size: 1.4rem;
  color: var(--color-light);
  display: block;

  a {
    color: var(--color-highlight);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
