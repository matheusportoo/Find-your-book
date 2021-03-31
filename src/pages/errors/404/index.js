import React from 'react';

import Content from '../../../components/Content';
import DefaultMessage from '../../../components/DefaultMessage';

const error404 = () => (
  <Content>
    <DefaultMessage content="404 - Página não encontrada" />
  </Content>
);

export default error404;
