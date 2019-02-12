import React from 'react';
import PropTypes from 'prop-types';

const RoundedImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="rounded-image" width="50" />
);

RoundedImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

RoundedImage.defaultProps = {
  src: '',
  alt: '',
};

export default RoundedImage;
