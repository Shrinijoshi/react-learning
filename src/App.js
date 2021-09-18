import React, { useEffect } from 'react';
import EX01 from './component/EX01';
import Comment from './component/Comment';
import Welcome from './component/Welcome';
import './style.css';
import Tick from './component/Clock';

export default function App() {
  const author = {};
  author.avatarUrl =
    'https://gravatar.com/avatar/7da5999ac37aa1e06f567ca80991c19c?s=400&d=wavatar&r=x';
  author.name = 'joshi';
  const text = 'I hope you enjoy learning React!';
  const date = new Date();
  return (
    <div>
      {/* <h1>Hello Joshi!</h1> */}
      <EX01 />
      <Comment author={author} text={text} date={date} />
      <Welcome />
      <Tick />
    </div>
  );
}
