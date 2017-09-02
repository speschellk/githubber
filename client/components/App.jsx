import React from 'react';
import RepoList from './RepoList';
import searchGitHub from '../lib/searchGitHub';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repoList: []
    };
  }

  searchRepos() {
    searchGitHub((repoList) => {
      this.setState({ repoList });
    });
  }

  componentDidMount() {
    this.searchRepos();
  }

  render() {
    return (
      <div className="title">
        Git of Thrones
        <div className="col-md-5">
          <RepoList repos={this.state.repoList} />
        </div>
      </div>
    );
  }
};

export default App;
