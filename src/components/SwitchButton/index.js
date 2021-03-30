import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

const SwitchButton = ({ onClick }) => (
  <S.SwitchButton onClick={onClick}>Change theme</S.SwitchButton>
);

SwitchButton.propTypes = {
  onClick: PropTypes.func
};

export default SwitchButton;
