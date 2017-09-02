import React from 'react';

const RepoViewer = ({ repo }) => (
  !Object.keys(repo).length ? 
  <div className="repo-viewer">
    <div className="repo-viewer-details">
      Awesomeness pending...
    </div>
  </div> :
  <div className="repo-viewer">
    <div className="repo-viewer-details">
      <h3 className="repo-name">{repo.name}</h3>
      <p className="repo-description">{repo.description}</p>
      <p className="repo-contributor">Top contributor {repo.contributor} has made {repo.contributions} contributions.</p>
      <p className="language">Written in {repo.language}</p>
    </div>
  </div>
);

export default RepoViewer;
