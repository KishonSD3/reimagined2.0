
console.log("loading function");

//dependencies 
var AWS = require ('aws-sdk');
var crypto = require ('crypto');
var util = ('util');
var config = ('./config.json');

// get reference AWS clients
var dynamodb = new AWS.DynamoDB();
var ses = new.AWS.SES();

function computeHash (password, salt,fn)
{
  //Bytesize
  var len = 128;
  var iterations = 4096;
  
  if (3 == arguments.length) 
  {
    crypto.pbkdf2(password, salt, iterations, len, fn);
  }
  else {
    fn = salt; 
    crypto.randomBytes(len, function(err, salt)
    { 
      if (err) return fn(err);
      salt = salt.toString('base64');
      crypto.pbdkf2(password, salt, iterations, len, function(err, derivedkey)
      {
       if (err) return fn(err);
       fn(null, salt,derivedKey.toString('base64'));
       });
      
     });
   }
  }
  
  function storeUser(email, password, salt, fn)
  {
    // Bytesize
    var len = 128;
    var ite
    
  }
