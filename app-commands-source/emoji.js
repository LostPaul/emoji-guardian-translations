module.exports = {
  name: "emoji",
  global: true,
  command: {
    "name": "emoji",
    "description": "Emoji related",
    "type": 1,
    "dm_permission": false,
    "default_member_permissions": "1073741824",
    "options": [
      {
        "type": 1,
        "name": "roles_reset",
        "description": "Reset the roles of an emoji",
        "options": [
          {
            "type": 3,
            "name": "emoji",
            "description": "The emoji you want to reset the roles from",
            "required": true,
            "autocomplete": true
          }
        ]
      },
      {
        "type": 1,
        "name": "add",
        "description": "Add an emoji to your server by using an emoji",
        "options": [
          {
            "type": 3,
            "name": "emoji",
            "description": "The emoji you want to add",
            "required": true
          },
          {
            "type": 3,
            "name": "name",
            "description": "The name you want for the emoji"
          }
        ]
      },
      {
        "type": 1,
        "name": "create",
        "description": "Create an emoji on your server by using a link",
        "options": [
          {
            "type": 11,
            "name": "image",
            "description": "The emoji you want to create",
            "required": true,
            "choices": []
          },
          {
            "type": 3,
            "name": "name",
            "description": "The name for the emoji you want to create",
            "required": true
          }
        ]
      },
      {
        "type": 1,
        "name": "delete",
        "description": "Delete an emoji from a server",
        "options": [
          {
            "type": 3,
            "name": "emoji",
            "description": "The emoji you want to delete",
            "required": true,
            "autocomplete": true
          }
        ]
      },
      {
        "type": 1,
        "name": "edit",
        "description": "Edit the name of emoji from a server",
        "options": [
          {
            "type": 3,
            "name": "emoji",
            "description": "The emoji you want to edit",
            "required": true,
            "autocomplete": true
          },
          {
            "type": 3,
            "name": "name",
            "description": "The name you want for the emoji",
            "required": true
          }
        ]
      },
      {
        "type": 1,
        "name": "lock",
        "description": "Lock an emoji to a role",
        "options": [
          {
            "type": 3,
            "name": "emoji",
            "description": "The emoji you want to lock",
            "required": true,
            "autocomplete": true
          },
          {
            "type": 8,
            "name": "role",
            "description": "The role to be added to the emoji",
            "required": true
          },
          {
            "type": 8,
            "name": "role2",
            "description": "The second role to be added to the emoji.",
          },
          {
            "type": 8,
            "name": "role3",
            "description": "The third role to be added to the emoji.",
          },
          {
            "type": 8,
            "name": "role4",
            "description": "The fourth role to be added to the emoji.",
          },
          {
            "type": 8,
            "name": "role5",
            "description": "The fifth role to be added to the emoji.",
          },
        ]
      },
      {
        "type": 1,
        "name": "unlock",
        "description": "Unock an emoji from a role",
        "options": [
          {
            "type": 3,
            "name": "emoji",
            "description": "The emoji you want to unlock",
            "required": true,
            "autocomplete": true
          },
          {
            "type": 8,
            "name": "role",
            "description": "The role to be removed from the emoji",
            "required": true,
            "choices": []
          },
          {
            "type": 8,
            "name": "role2",
            "description": "The second role to be removed from the emoji.",
          },
          {
            "type": 8,
            "name": "role3",
            "description": "The third role to be removed from the emoji.",
          },
          {
            "type": 8,
            "name": "role4",
            "description": "The fourth role to be removed from the emoji.",
          },
          {
            "type": 8,
            "name": "role5",
            "description": "The fifth role to be removed from the emoji.",
          },
        ]
      }
    ]
  }
}