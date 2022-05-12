module.exports = {
    name: "emoji info",
    global: true,
    command: {
        "name": "emoji-info",
        "type": 1,
        "dm_permission": false,
        "default_member_permissions": "1024",
        "description": "Get information about an emoji",
        "options": [
          {
            "type": 3,
            "name": "emoji",
            "description": "The emoji you want to get information about.",
            "required": true,
            "autocomplete": true
          }
        ]
    }
}
