module.exports = {
  name: "sticker",
  global: true,
  command: {
    "name": "sticker",
    "description": "Sticker",
    "type": 1,
    "dm_permission": false,
    "default_member_permissions": "268435456",
    "options": [

      {
        "type": 1,
        "name": "add",
        "description": "Add a sticker to your server by using an emoji",
        "options": [
          {
            "type": 3,
            "name": "emoji",
            "description": "The emoji you want to add as sticker",
            "required": true
          },
          {
            "type": 3,
            "name": "related_emoji",
            "description": "The unicode emoji which should be related to your sticker",
            "required": true
          },
          {
            "type": 3,
            "name": "name",
            "description": "The name you want for the sticker"
          },
          {
            "type": 3,
            "name": "description",
            "description": "The description you want for the sticker"
          }
        ]
      },
      {
        "type": 1,
        "name": "delete",
        "description": "Delete a sticker from your server",
        "options": [
          {
            "type": 3,
            "name": "sticker",
            "description": "The sticker you want to delete, use the name of the sticker",
            "required": true,
            "autocomplete": true
          }
        ]
      },
      {
        "type": 1,
        "name": "edit",
        "description": "Edit a sticker from your server",
        "options": [
          {
            "type": 3,
            "name": "sticker",
            "description": "The sticker you want to edit, use the name of the sticker",
            "required": true,
            "autocomplete": true
          },
          {
            "type": 3,
            "name": "description",
            "description": "The description of the sticker",
            "required": false
          },
          {
            "type": 3,
            "name": "name",
            "description": "The name of the sticker",
            "required": false
          },
          {
            "type": 3,
            "name": "emoji",
            "description": "The unicode emoji that is representing the sticker's expression",
            "required": false
          }
        ]
      },
      {
        "type": 1,
        "name": "create",
        "description": "Create a sticker to your server by using a image url.",
        "options": [
          {
            "type": 3,
            "name": "image",
            "description": "The image you want to add as sticker",
            "required": true
          },
          {
            "type": 3,
            "name": "related_emoji",
            "description": "The unicode emoji which should be related to your sticker",
            "required": true
          },
          {
            "type": 3,
            "name": "name",
            "description": "The name you want for the sticker",
            "required": true
          },
          {
            "type": 3,
            "name": "description",
            "description": "The description you want for the sticker"
          }
        ]
      }
    ]
  }
}