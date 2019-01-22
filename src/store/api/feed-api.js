import http from '../../utils/HttpService';

const loadFeed = () => http.get('')
  .then(feed => feed)
  .catch(err => {
    return err;
  });

export default {
  loadFeed,
}