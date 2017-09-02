import request from 'superagent';

const searchGitHub = (callback) => {
  request.get('https://api.github.com/search/repositories')
    .query({
      q:'cats',
      sort:'stars',
      order:'desc',
      per_page:'100',
      page:'1'
    })
    .then(({ body: { items } }) => {
      console.log('search produced:', items)
      // top contributor: items[0].collaborators_url[0]
      callback && callback(items);
    })
    .catch((err) => {
      console.error('GitHub request error:', err)
    });
};

export default searchGitHub;
