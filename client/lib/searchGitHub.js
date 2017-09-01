import request from 'superagent';

const searchGitHub = (callback) => {
  request.get() // API endpoint
    .query({
      // query params
    })
    .then(() => {
      // if callback passed in, call it with results
      callback && callback();
    })
    .catch((err) => {
      // handle error
    });
};

export default searchGitHub;
