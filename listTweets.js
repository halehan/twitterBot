// app.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
//COmment
// Set up your search parameters
var params = {
  q: 'Paul Watson',
  count: 500,
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
    //  console.log(data.statuses[i].text);
  //    console.log(id);
    
    }
  } else {
    console.log(err);
  }
})