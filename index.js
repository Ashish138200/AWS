function handler(event, context, callback){    
     var 
         city_str = event.city_str,
         response = {
             city_str: city_str,
             temp_int: 74
         };
     console.log(response);
     callback(null, response);
 }
 exports.handler = handler;
