/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


 // Test / driver code (temporary). Eventually will get this from the server.
 const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

$(document).ready(function() {

  const createTweetElement = function(tweetObj) {
    const element = `
      <article class="tweet">
      <header>
        <img src=${tweetObj.user.avatars} />
        ${tweetObj.user.name}
        <span class="handle">${tweetObj.user.handle}</span>
      </header>
      <div class="content">
          ${tweetObj.content.text}
      </div>
      <footer>
        <span class="date">
        ${tweetObj.created_at}
        </span>
        <div class="actions">
          <img src="/images/flag.png">
          <img src="/images/retweet-symbol.png">
          <img src="/images/like-symbol.png">
        </div>
      </footer>
      </article>
    `;
    return element;
  }

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});