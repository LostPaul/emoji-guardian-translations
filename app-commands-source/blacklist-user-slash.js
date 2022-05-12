module.exports = {
  name: "blacklist1",
  global: false,
  command: {
    "name": "blacklist",
    "description": "Blacklist a user",
    "type": 1,
    "options": [
      {
        "type": 3,
        "name": "Type",
        "description": "type",
        "required": true,
        "choices": [
          {
            "name": "server",
            "value": "server"
          },
          {
            "name": "user",
            "value": "user"
          }
        ]
      },
      {
        "type": 3,
        "name": "reason",
        "description": "reason",
        "required": true,
        "choices": [
          {
            "name": "spam",
            "value": "spam"
          },
          {
            "name": "tos violation",
            "value": "tos violation"
          }
        ]
      },
      {
        "type": 3,
        "name": "id",
        "description": "The id for the user or server",
        "required": true
      },
      {
        "type": 3,
        "name": "comment",
        "description": "Add a comment to the blacklist",
      },
      {
        "type": 5,
        "name": "delete",
        "description": "Delete the id from the db"
      }
    ]
  }
}
