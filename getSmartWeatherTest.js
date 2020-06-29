//Event 1:
{
  "messageVersion": "1.0",
  "invocationSource": "DialogCodeHook",
  "userId": "1012602",
  "sessionAttributes": {
  },
  "bot": {
    "name": "WeatherCatBot",
    "alias": "$LATEST",
    "version": "$LATEST"
  },
  "outputDialogMode": "Text",
  "currentIntent": {
    "name": "CatWeather",
    "slots": {
      "city_str": "CHICAGO"
    },
    "confirmationStatus": "None"
  }
}


Event 2:
{
  "dialogAction": {
    "type": "ElicitSlot",
    "message": {
      "contentType": "PlainText",
      "content": "Please try another city, we couldn't find the weather for that city"
    },
    "intentName": "CatWeather",
    "slots": {
      "city_name_str": null
    },
    "slotToElicit": "city_str"
  }
}

Event 3:

{
  "messageVersion": "1.0",
  "invocationSource": "DialogCodeHook",
  "userId": "1012604",
  "sessionAttributes": {
  },
  "bot": {
    "name": "weather",
    "alias": "$LATEST",
    "version": "$LATEST"
  },
  "outputDialogMode": "Text",
  "currentIntent": {
    "name": "catWeather",
    "slots": {
      "city_str":  null
    },
    "confirmationStatus": "None"
  }
}
