import React from 'react';

const Repo = ({ repo: { name, stargazers_count } }) => (
  <div className='repo'>
    <div>Title: {name}</div>
    <div>Stars: {stargazers_count}</div>
    <div>Top contributor: {}</div>
  </div>
);

export default Repo;
