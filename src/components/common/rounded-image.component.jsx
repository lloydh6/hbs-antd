import React from 'react';
import PropTypes from 'prop-types';

const RoundedImage = ({
  src,
  alt,
  width,
  style,
}) => (
  <img src={src} alt={alt} className="rounded-image" width={width} style={style} />
);

RoundedImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  style: PropTypes.shape({

  }),
};

RoundedImage.defaultProps = {
  src: '',
  alt: '',
  width: 50,
  style: {},
};

export default RoundedImage;
