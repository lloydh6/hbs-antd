import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const RoundedImg = styled.img`
  border-radius: 50%;
`;

const RoundedImage = ({
  src,
  alt,
  width,
  style,
}) => (
  <RoundedImg src={src} alt={alt} width={width} style={style} />
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
