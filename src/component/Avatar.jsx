import React from 'react';

const Avatar = (props) => {
  return (
    <img className='Avtar' src={props.user.avatarUrl} alt={props.user.name} />
  );
};

export default Avatar;
