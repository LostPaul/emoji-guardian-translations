module.exports = {
    name: "language",
    global: true,
    command: {
      "name": "language",
      "description": "language",
      "type": 1,
      "dm_permission": false,
      "default_member_permissions": "32",
      "options": [
        {
          "type": 1,
          "name": "reset",
          "description": "Reset the language of the bot to the standard",
          "options": []
        },
        {
          "type": 1,
          "name": "set",
          "description": "Set the language of the bot",
          "options": [
            {
                "type": 3,
                "name": "language",
                "description": "The language you want to set the bot to.",
                "required": true,
                "autocomplete": true
              }
          ]
        }
      ]
    }
  }