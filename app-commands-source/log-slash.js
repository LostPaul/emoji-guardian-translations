module.exports = {
  name: "config",
  global: true,
  command: {
    "name": "log",
    "description": "log",
    "type": 1,
    "dm_permission": false,
    "default_member_permissions": "32",
    "options": [
      {
        "type": 1,
        "name": "remove",
        "description": "Remove the log",
        "options": []
      },
      {
        "type": 1,
        "name": "set",
        "description": "Set the emoji log channel",
        "options": [
          {
            "type": 7,
            "channel_types": [0],
            "name": "channel",
            "description": "The channel where the log should be",
            "required": true
          },
          {
            "type": 5,
            "name": "compact_mode",
            "description": "Toggle compact mode on and off",
          }
        ]
      }
    ]
  }
}