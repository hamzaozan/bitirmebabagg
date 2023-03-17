import React from 'react';

import './FixedSizeCard.css';

const FixedSizeCard = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default FixedSizeCard;