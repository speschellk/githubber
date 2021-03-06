# GitHubber

GitHubber uses the GitHub REST api https://developer.github.com/v3/ to display the 100 most-starred repositories on GitHub, along with their top contributors.

Number of stars is determined by the `stargazers_count` property on the GitHub response items. Repos are displayed in descending order of `stargazers_count`.

Submitting a search will filter the returned results to that query string, but again will return the 100 (or as many as are available for that topic) most-starred repos associated with that topic.

### Getting started
1. Clone down the GitHubber repo.
1. `yarn install` to install dependencies from the yarn.lock file.
1. Inside `config/`, make a copy of `github.config.example.js` and call it `github.config.js`. This file will be ignored by git.
1. Insert your GitHub username and password in `github.config.js`.
1. `yarn build` to build the public `bundle.js` file.
1. `yarn start` to start the server.
