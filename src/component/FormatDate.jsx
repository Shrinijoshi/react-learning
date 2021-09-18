import React from 'react';

const FormatDate = (props) => {
  return props.date.toLocaleDateString('en-us');
};

export default FormatDate;
