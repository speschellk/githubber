import React from 'react';

const Repo = ({ repo: { name, stargazers_count, contributor } }) => (
  <div className="repo media">
    {/* <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div> */}
    <div className="media-body">
      <div className="repo-title">Repo: {name}</div>
      <div className="repo-detail">
        Stars:{stargazers_count}
        Top contributor: {contributor}
      </div>
    </div>
  </div>
);

export default Repo;
