import React from 'react';
import Repo from './Repo';

const RepoList = ({ repos }) => (
  <div className='repo-list'>
    {repos.map((repo) => 
      <Repo 
        key={repo.id} 
        repo={repo}
      />
    )}
  </div>
);

export default RepoList;
