import styled from 'styled-components';

import { mediaQuery } from '../../tools';

const GUTTER = '20px';

export const Container = styled.div`
  margin-left: ${GUTTER};
  margin-right: ${GUTTER};
  position: relative;

  ${mediaQuery.desktop(`
    max-width: 1170px;
    margin: 0 auto;
    padding-left: ${GUTTER};
    padding-right: ${GUTTER};
  `)};
`;
