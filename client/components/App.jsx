import React from 'react';
import RepoList from './RepoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repoList: []
    };
  }

  searchRepos(repos) {
    // call GitHub API
    // set state to results of search
  }

  componentDidMount() {
    // call searchRepos
  }

  render() {
    return (
      <div className='repo-list'>
        <RepoList repos={this.state.repoList}/>
      </div>
    );
  }
};

export default App;
