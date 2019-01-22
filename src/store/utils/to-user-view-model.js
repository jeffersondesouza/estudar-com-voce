const toUserViewModel = (user, index) => {
  const username = setUsername(user);
  return ({
    ...user,
    id: index,
    avatartAlt: `${username} profile avatar photo`,
    username,
    tweets: setTweets(user.tweet)
  })
};

const setUsername = user => user.twitter.replace(/https:\/\/twitter.com\//g, '');

const setTweets = (tweet) => [
  { id: 1, value: tweet },
  { id: 2, value: tweet },
  { id: 3, value: tweet },
  { id: 4, value: tweet },
  { id: 5, value: tweet },
  { id: 6, value: tweet },
];

/**
 * @returns a user on View Model interface, containeng the tweets and user name
 * 
 * @todo when the endpoits send the user tweets we can remove the setTweets method
 */
export default toUserViewModel;