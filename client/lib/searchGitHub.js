import request from 'superagent';

const searchGitHub = (callback) => {
  request.get('https://api.github.com/search/repositories')
    .query({
      q:'stars:>=500',
      sort:'stars',
      order:'desc',
      per_page:'3',
      page:'1'
    })
    .then(({ body: { items } }) => {
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
