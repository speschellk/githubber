import request from 'superagent';

const searchGitHub = (query = 'stars:>=500', callback) => {
  request.get('https://api.github.com/search/repositories')
    .query({
      q:query,
      sort:'stars',
      order:'desc',
      per_page:'100',
      page:'1'
    })
    .then(({ body: { items } }) => {
      console.log('items', items)
      items.forEach((item) => {
        request.get(item.contributors_url)
          .then(({ body }) => {
            item.contributor = body[0].login;
          })
          .then(() => {
            callback && callback(items);
          });
      })
    })
    .catch((err) => {
      console.error('GitHub request error:', err)
    });
};

export default searchGitHub;
