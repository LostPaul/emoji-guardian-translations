module.exports = {
  name: "blacklist_info",
  description: "Blacklist inf guild command",
  global: false,
  command: {
    "name": "blacklist_info",
    "description": "Get information about an id",
    "type": 1,
    "options": [
      {
        "type": 3,
        "name": "id",
        "description": "The id for the user or server",
        "required": true
      },
      {
        "type": 5,
        "name": "hidden",
        "description": "Hide the message from other users"
      }
    ]
  }
}