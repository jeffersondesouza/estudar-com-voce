import http from '../../utils/HttpService';

const loadTimeline = (username) => {

  if (!username) {
    throw new Error('username must be informed');
  }

  return http.get('/')
    .then(feed => feed)
    .catch(err => {
      return err;
    });
}


export default {
  loadTimeline,
}