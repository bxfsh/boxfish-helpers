/**
 * Format a tweet to include links for urls, hashtags and users
 * @method formatTweet
 * @param  {String} tweet
 * @return {String} Returns the formatted tweet
 * @example {{{formatTweet tweetText}}} // Note: triple braces
 */
module.exports.formatTweet = function formatTweet(tweet) {
  try {
    tweet = tweet.replace(
      /([http|https]+\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}\S*)/ig,
      "<a href='$1'>$1</a>"
    );
    tweet = tweet.replace(/@(\w{1,15})\b/ig, "<a href='https://twitter.com/$1'>@$1</a>");
    tweet = tweet.replace(/#(\w*)\b/ig, "<a href='https://twitter.com/hashtag/$1'>#$1</a>");
    return tweet;
  } catch (err) {
    console.warn(err);
  }
};
