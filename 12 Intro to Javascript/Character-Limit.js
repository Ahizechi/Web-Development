var Limit = 240;
var Tweet = prompt("Input your text: ");
var TweetLength = Tweet.length;
var TweetLeft = Limit - TweetLength;

var TweetLimit = Tweet.slice(0,241);
alert(TweetLimit);

alert(Tweet.length + " characters used.");
alert("You have " + TweetLeft + " characters left");

