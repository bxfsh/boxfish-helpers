/**
 * Finds hashtags and handles in a string and adds triggers for twitter search
 *
 * NOTE: This helper requires triple brackets {{{formatTwitterSearch tweet}}}
 *
 * @method formatTwitterSearch
 * @param  {String} tweet
 */
export function formatTwitterSearch(tweet) {
  try {

    // Find URLs and return as usual
    tweet = tweet.replace(
      /([http|https]+\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}\S*)/ig,
      "<a href='$1'>$1</a>"
    );

    // Format hashtags and handles for twitter search
    tweet = tweet.replace(/@(\w{1,15})\b/ig,
    "<a type='button' data-keyword='@$1' data-trigger='twitter-search'>@$1</a>");
    tweet = tweet.replace(/#(\w*)\b/ig,
    "<a type='button' data-keyword='#$1' data-trigger='twitter-search'>#$1</a>");

    return tweet;
  } catch (err) {
    console.warn(err);
  }
}
