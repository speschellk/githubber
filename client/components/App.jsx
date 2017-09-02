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
    // call searchRepos
    this.searchRepos();
  }

  render() {
    return (
      <div className='repolist-container'>
        <RepoList repos={this.state.repoList}/>
      </div>
    );
  }
};

export default App;
