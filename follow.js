var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

// Set up your search parameters
var params = {
  q: 'soros terrorist',
  count: 25,
  lang: 'en'
}

// Initiate your search using the above paramaters
T.get('search/tweets', params, function(err, data, response) {
  // If there is no error, proceed
  if(!err){
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      // Get the screen_name from the returned data
      let screen_name = data.statuses[i].user.screen_name;
      // THE FOLLOWING MAGIC GOES HERE
      // friendships/destroy
      // friendships/create
      T.post('friendships/create', {screen_name}, function(err, response){
        if(err){
          console.log(err);
        } else {
          console.log(screen_name, ': **FOLLOWED**');
        }
      });
    }
  } else {
    console.log(err);
  }
})