// app.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
//COmment
// Set up your search parameters
var params = {
  q: 'soros terrorist',
  count: 100,
  lang: 'en'
}

// Initiate your search using the above paramaters
T.get('search/tweets', params, function(err, data, response) {
  // If there is no error, proceed
  if(!err){
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      // Get the tweet Id from the returned data
      let id = { id: data.statuses[i].id_str }
      console.log('@'+ data.statuses[i].user.screen_name);
      let tweetMessage = 'Let Hungary or Israel take care of him ';
      let twitterUserName = '@'+ data.statuses[i].user.screen_name;

        T.post('statuses/update', {status: tweetMessage  + '@'+ twitterUserName},  function(error, tweet, response){
            if(error){
            console.log(error);
            }
            console.log('Just sent tweet ' + tweetMessage + ' to ' + twitterUserName  );
    //        console.log(tweet);  // Tweet body.
    //        console.log(response);  // Raw response object.
      });

    //  console.log(data.statuses[i].text);
  //    console.log(id);
    
    }
  } else {
    console.log(err);
  }
})