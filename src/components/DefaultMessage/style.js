import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaQuery } from '../../tools';

export const DefaultMessage = {};

DefaultMessage.Wrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  text-align: center;
`;

DefaultMessage.Content = styled.p`
  font-size: 2.8rem;
  font-weight: var(--font-weight-black);
  color: ${(props) => props.theme.colors.defaultText};

  ${mediaQuery.desktop`
    font-size: 3.8rem;
  `};
`;

DefaultMessage.Link = styled(Link)`
  font-size: 1.8rem;
  font-weight: var(--font-weight-regular);
  background-color: var(--color-highlight);
  color: var(--color-dark);
  text-decoration: none;
  padding: 15px 20px;
`;
