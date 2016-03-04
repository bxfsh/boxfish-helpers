/**
 * Format a tweet to include links for urls, hashtags and users
 *
 * NOTE: This helper requires triple brackets {{{formatTweet tweet}}}
 *
 * @param  {String} tweet
 * @return {String} Returns the formatted tweet
 */
export function formatTweet(tweet) {
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
}
