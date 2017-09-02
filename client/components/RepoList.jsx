import React from 'react';
import Repo from './Repo';

const RepoList = ({ repos, handleRepoListTitleClick }) => (
  <div className="repo-list">
    {repos.map((repo) => 
      <Repo 
        key={repo.id} 
        repo={repo}
        handleRepoListTitleClick={handleRepoListTitleClick}
      />
    )}
  </div>
);

export default RepoList;
