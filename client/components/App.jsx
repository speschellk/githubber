import React from 'react';
import RepoList from './RepoList';
import RepoViewer from './RepoViewer';
import searchGitHub from '../lib/searchGitHub';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repoList: [],
      currentRepo: {}
    };

    this.searchRepos = this.searchRepos.bind(this);
    this.handleRepoListTitleClick = this.handleRepoListTitleClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  searchRepos(query) {
    searchGitHub(query, (repos) => {
      this.setState({
        repoList: repos,
        currentRepo: repos[0]
      });
    });
  }

  handleRepoListTitleClick(repo) {
    this.setState({
      currentRepo: repo
    });
  }

  handleSearchClick(query) {
    this.searchRepos(query);
  }

  componentDidMount() {
    this.searchRepos();
  }

  render() {
    return (
      <div className="nav-container">
        <Nav
          handleSearchClick={this.handleSearchClick}
        />
        <div className="title col-md-12">
          <h2>GitHubber</h2>
          <p>What's trending on GitHub? Here's a look at the most-starred repos of all time, along with their top contributors. Click on a repository title to read more about it. Looking for something more specific? Use the search bar to see trending repositories by topic.</p>
        </div>
        <div className="repo-list-container col-md-6">
          <RepoList repos={this.state.repoList} handleRepoListTitleClick={this.handleRepoListTitleClick} />
        </div>
        <div className="repo-viewer-container col-md-6" >
          <RepoViewer repo={this.state.currentRepo} />
        </div>
      </div>
    );
  }
};

export default App;
