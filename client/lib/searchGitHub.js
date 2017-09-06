import request from 'superagent';
import credentials from '../config/github.config'

const searchGitHub = (query = 'stars:>=500', callback) => {
  request.get('https://api.github.com/search/repositories')
    .auth(credentials.username, credentials.password)
    .query({
      q: query,
      sort: 'stars',
      order: 'desc',
      per_page: '100',
      page: '1'
    })
    .then(({ body: { items } }) => {
      items.forEach((item) => {
        if (!item.contributor) {
          request.get(item.contributors_url)
            .then(({ body }) => {
              item.contributor = body[0].login;
              item.contributions = body[0].contributions;
            })
            .then(() => {
              callback && callback(items);
            })
            .catch((err) => {
              console.log('Error getting contributors:', err);
            });
        }
      })
    })
    .catch((err) => {
      console.error('GitHub request error:', err)
    });
};

export default searchGitHub;
