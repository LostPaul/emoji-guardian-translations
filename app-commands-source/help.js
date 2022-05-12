module.exports = {
  name: "help",
  global: true,
  command: {
    "name": "help",
    "type": 1,
    "description": "Get information about the bot.",
    "options": [
      {
        "type": 3,
        "name": "command",
        "description": "Get information about a command",
        "autocomplete": true,
      },
      {
        "type": 5,
        "name": "hidden",
        "description": "Hide the message from other users"
      },
    ]
  }
}
