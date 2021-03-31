import React from 'react';
import PropTypes from 'prop-types';

const Symbols = ({ viewBox }) => (
  <svg style={{ display: 'none' }}>
    <symbol id="back" viewBox={viewBox}>
      <path
        d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
        fill="currentColor"
      />
    </symbol>
    <symbol id="heart" viewBox={viewBox}>
      <path
        d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
        fill="currentColor"
      />
    </symbol>
  </svg>
);

Symbols.propTypes = {
  viewBox: PropTypes.string
};

export default Symbols;
