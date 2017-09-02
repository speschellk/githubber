import React from 'react';

const Repo = ({ repo, handleRepoListTitleClick }) => (
  <div className="repo media">
    <div className="media-left">
      <img className="media-object" src='assets/star.png' height='20px' />
      {repo.stargazers_count}
    </div>
    <div className="media-body">
      <div className="repo-title" onClick={() => handleRepoListTitleClick(repo)}>{repo.name}</div>
      <div className="repo-detail">
        Top contributor: {repo.contributor}
      </div>
    </div>
  </div>
);

export default Repo;
