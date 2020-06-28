  exports.handler = function(event, context, callback) { 
      var 
      	AWS = require("aws-sdk"),
      	fs = require("fs"),
        item = {},
      	some_temp_int = 0,
  		  params = {},
        DDB = new AWS.DynamoDB;
      
      AWS.config.update({
          region: "us-east-1"
      });
      fs.readFileSync("cities.csv", "utf8").split('\n').map(function(item_str){
          params.ReturnConsumedCapacity = "TOTAL";
          params.TableName = "weather";
          params.Item = {
              "sc": {
                  "S": item_str.split(",")[0]
              },
              "t": {
                  "N": String(item_str.split(",")[1])
              }
          };
          DDB.putItem(params, function(err, data){
              if(err){
                  console.error(err);
              }else{
                  //ignore output
              }
          });
      });
   setTimeout(function(){
       callback(null, "ok");
   }, 1000 * 10);
  }
