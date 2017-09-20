var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

// Set up your search parameters
var params = {
  q: '#MAGA',
  count: 5,
  result_type: 'popular',
  lang: 'en'
}

T.post('statuses/update', {status: 'Do you see what i see! @halehan'},  function(error, tweet, response){
    if(error){
      console.log(error);
    }
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });

