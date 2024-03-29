import React from 'react';

import './Card1.css';

const Card1 = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card1;