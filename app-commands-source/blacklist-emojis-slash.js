module.exports = {
  name: "blacklist",
  global: true,
  command: {
    "name": "blacklist",
    "description": "Blacklist your emojis from being added to other servers by using Emoji Guardian",
    "type": 1,
    "dm_permission": false,
    "default_member_permissions": "1073741856",
    "options": [
      {
        "type": 1,
        "name": "emojis",
        "description": "Blacklist your emojis from being added to other servers by using Emoji Guardian",
        "options": [
          {
            "type": 3,
            "name": "emojis",
            "description": "The emojis you want to blacklist from being added to other servers",
            "required": true
          },
          {
            "type": 6,
            "name": "creator",
            "description": "Add the creator of the emojis people can see this if they try to add the emoji"
          },
          {
            "type": 3,
            "name": "extra_infos",
            "description": "Add extra information about the emoji people can see this if they try to add the emoji"
          }
        ]
      },
      {
        "type": 1,
        "name": "remove",
        "description": "Remove emojis from the emojis blacklist",
        "options": [
          {
            "type": 3,
            "name": "emojis",
            "description": "The emojis you want remove from the Blacklist",
            "required": true
          }
        ]
      },
      {
        "type": 1,
        "name": "all_emojis",
        "description": "Blacklist all the emojis from this server from being added to other servers by using Emoji Guardian",
        "options": [
          {
            "type": 6,
            "name": "creator",
            "description": "Add the creator of the emojis people can see this if they try to add the emoji"
          },
          {
            "type": 3,
            "name": "extra_infos",
            "description": "Add extra information about the emoji people can see this if they try to add the emoji"
          },
          {
            "type": 3,
            "name": "ignore_emojis",
            "description": "Ignore specific emojis for the blacklist",
          },
        ]
      },
      {
        "type": 1,
        "name": "remove_all_emojis",
        "description": "Remove all emojis from the blacklist from this server",
        "options": [
          {
            "type": 3,
            "name": "ignore_emojis",
            "description": "Ignore specific emojis for the blacklist",
          },
        ]
      },
      {
        "type": 1,
        "name": "list",
        "description": "See which emojis you blacklisted from this server",
        "options": null
      }
    ]
  }
}
