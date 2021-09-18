import React, { useState, useEffect } from 'react';
import FormatDate from './FormatDate';

const Clock = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // tick();
  }, [date]);

  const tick = () => {
    setDate(new Date());
  };
  return <div>{<FormatDate date={date} />}</div>;
};

export default Clock;
