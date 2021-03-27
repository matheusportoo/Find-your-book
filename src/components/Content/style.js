import styled from 'styled-components';

import { mediaQuery } from '../../tools';

export const Content = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  ${mediaQuery.tabletDesktop`
    padding-top: 120px;
    padding-bottom: 120px;
  `}
`;
