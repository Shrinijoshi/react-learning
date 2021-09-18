import React from 'react';
import Avatar from './Avatar';
import FormatDate from './FormatDate';
import UserInfo from './UserInfo';

const Comment = (props) => {
  return (
    <div className='Comment'>
      <UserInfo user={props.author} />
      <div className='Comment-text'>{props.text}</div>
      <div className='Comment-date'>{<FormatDate date={props.date} />}</div>
    </div>
  );
};

export default Comment;
