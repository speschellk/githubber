import React from 'react';

const RepoViewer = ({ repo: { name, description, contributor, created_at, language } }) => (
  <div className="repo-viewer">
    <div className="repo-viewer-details">
      <p>{description}</p>
      <p>{contributor}</p>
      <p>{language}</p>
    </div>
  </div>
);

export default RepoViewer;
