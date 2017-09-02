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
  }

  searchRepos(query) {
    searchGitHub(query, (repoList) => {
      this.setState({
        repoList,
        currentRepo: repoList[0]
      });
    });
  }

  handleRepoListTitleClick(repo) {
    this.setState({
      currentRepo: repo
    });
  }

  componentDidMount() {
    this.searchRepos();
  }

  render() {
    return (
      <div className="nav-container">
        <Nav
          handleSearchInputChange={this.searchRepos}
        />
        <div className="title col-md-5">
          <h2>GitHubber</h2>
          <p>What's trending on GitHub? Here's a look at the 100 most-starred repositories, as well as their top contributors. Use the search bar to find trending repositories by topic.</p>
        </div>
        <div className="repo-list-container col-md-5">
          <RepoList repos={this.state.repoList} handleRepoListTitleClick={this.handleRepoListTitleClick} />
        </div>
        <div className="repo-viewer-container col-md-7" >
          <RepoViewer repo={this.state.currentRepo} />
        </div>
      </div>
    );
  }
};

export default App;
