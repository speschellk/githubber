import React from 'react';

const RepoViewer = ({ repo: { name, description, contributor, created_at, language } }) => (
  <div className="repo-viewer">
    <div className="repo-viewer-details">
      <h3 className="repo-name">{name}</h3>
      <p className="repo-description">{description}</p>
      <p className="repo-contributor">Top contributor {contributor} has made {} contributions.</p>
      <p className="language">Written in {language}</p>
    </div>
  </div>
);

export default RepoViewer;
