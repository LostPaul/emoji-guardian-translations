module.exports = {
  name: "emojis",
  global: true,
  command: {
    "name": "emojis",
    "description": "Multiple emojis",
    "type": 1,
    "dm_permission": false,
    "default_member_permissions": "268435456",
    "options": [
      {
        "type": 1,
        "name": "unlock_all",
        "description": "Unlock all emojis from a server",
        "options": [
          {
            "type": 8,
            "name": "role",
            "description": "The role to be removed from the emojis.",
            "required": true
          },
          {
            "type": 3,
            "name": "ignore_emojis",
            "description": "Ignore specific emojis from getting unlocked",
          },
          {
            "type": 8,
            "name": "role2",
            "description": "The second role to be removed from the emojis.",
          },
          {
            "type": 8,
            "name": "role3",
            "description": "The third role to be removed from the emojis.",
          },
          {
            "type": 8,
            "name": "role4",
            "description": "The fourth role to be removed from the emojis.",
          },
          {
            "type": 8,
            "name": "role5",
            "description": "The fifth role to be removed from the emojis.",
          },
        ]
      },
      {
        "type": 1,
        "name": "lock_all",
        "description": "Lock all emojis from a server to a role",
        "options": [
          {
            "type": 8,
            "name": "role",
            "description": "The role to be added to the emojis.",
            "required": true
          },
          {
            "type": 3,
            "name": "ignore_emojis",
            "description": "Ignore specific emojis from getting locked",
          },
          {
            "type": 8,
            "name": "role2",
            "description": "The second role to be added to the emojis.",
          },
          {
            "type": 8,
            "name": "role3",
            "description": "The third role to be added to the emojis.",
          },
          {
            "type": 8,
            "name": "role4",
            "description": "The fourth role to be added to the emojis.",
          },
          {
            "type": 8,
            "name": "role5",
            "description": "The fifth role to be added to the emojis.",
          },
        ]
      },
      {
        "type": 1,
        "name": "locked",
        "description": "List of which emojis are locked to which role",
        "options": []
      },
      {
        "type": 1,
        "name": "stats",
        "description": "See how many emojis you uploaded or how many emojis you locked",
        "options": [
          {
            "type": 5,
            "name": "hidden",
            "description": "Hide the message from other users"
          }
        ]
      },
      {
        "type": 1,
        "name": "add_multiple",
        "description": "Add multiple emojis to the server by using emojis from other servers",
        "options": [
          {
            "type": 3,
            "name": "emojis",
            "required": true,
            "description": "The emojis you want to add"
          }
        ]
      },
      {
        "type": 1,
        "name": "delete_multiple",
        "description": "Delete multiple emojis at once from your server",
        "options": [
          {
            "type": 3,
            "name": "emojis",
            "required": true,
            "description": "The emojis you want to delete"
          }
        ]
      },
      {
        "type": 1,
        "name": "roles_reset",
        "description": "Reset the roles of every emoji from this server",
        "options": [
          {
            "type": 3,
            "name": "ignore_emojis",
            "description": "Ignore specific emojis from getting unlocked",
          },
        ]
      },
      {
        "type": 1,
        "name": "lock_multiple",
        "description": "Lock multiple emojis to a role",
        "options": [
          {
            "type": 3,
            "name": "emojis",
            "description": "The emojis you want to lock",
            "required": true
          },
          {
            "type": 8,
            "name": "role",
            "description": "The role to be added to the emojis",
            "required": true
          }
        ]
      },
      {
        "type": 1,
        "name": "unlock_multiple",
        "description": "Unlock multiple emojis from a role",
        "options": [
          {
            "type": 3,
            "name": "emojis",
            "description": "The emojis you want to unlock",
            "required": true
          },
          {
            "type": 8,
            "name": "role",
            "description": "The role to be removed from the emojis",
            "required": true
          }
        ]
      },
      {
        "type": 1,
        "name": "list_category",
        "description": "Create an emoji list with custom categories",
        "options": [
          {
            "type": 3,
            "name": "emojis",
            "description": "The emojis",
            "required": true,
            "choices": []
          },
          {
            "type": 3,
            "name": "name",
            "description": "The name for the category",
            "required": true
          },
          {
            "type": 7,
            "name": "channel",
            "channel_types": [0],
            "description": "The channel where you want to create the emoji category"
          },
          {
            "type": 5,
            "name": "quote_before_emojis",
            "description": "Choose if you want to have the quote line before "
          },
          {
            "type": 5,
            "name": "divider",
            "description": "Choose if you want to use a divider between the emojis or not"
          },
          {
            "type": 3,
            "name": "webhook_name",
            "description": "Use a custom name for the webhook message",
          },
          {
            "type": 3,
            "name": "webhook_avatar",
            "description": "Use a custom avatar for the webhook message",
          },

        ]
      },
      {
        "type": 1,
        "name": "list_auto_update_remove",
        "description": "Disable the auto update of the emoji list",
        "options": null
      },
      {
        "type": 1,
        "name": "list",
        "description": "Create an list of the emojis from your server with the emoji ids",
        "options": [
          {
            "type": 5,
            "name": "auto_update_list",
            "description": "Choose if you want to automatically update the list or not"
          },
          {
            "type": 3,
            "name": "ignore_emojis",
            "description": "Ignore specific emojis in the list",
          },
          {
            "type": 3,
            "name": "sort_after",
            "description": "Sort the emojis alphabetically or after the creation date",
            "choices": [
              {
                "name": "Creation date from top to bottom",
                "value": "creation_date_top"
              },
              {
                "name": "Creation date from bottom to top",
                "value": "creation_date_bottom"
              },
              {
                "name": "Alphabet from top to bottom",
                "value": "alphabet_top"
              },
              {
                "name": "Alphabet from bottom to top",
                "value": "alphabet_bottom"
              }
            ]
          },
          {
            "type": 5,
            "name": "exclude_locked_emojis",
            "description": "Choose if want to list emojis that are locked to a role in the message or not"
          },
          {
            "type": 5,
            "name": "show_full_emoji_id",
            "description": "Choose if you want to show the full ID of the emoji next the emoji or only the name"
          },
          {
            "type": 3,
            "name": "message_before_emojis",
            "description": "Add a custom message before the emojis list",
          },
          {
            "type": 3,
            "name": "webhook_name",
            "description": "Use a custom name for the webhook message",
          },
          {
            "type": 3,
            "name": "webhook_avatar",
            "description": "Use a custom avatar for the webhook message",
          },
          {
            "type": 5,
            "name": "webhook",
            "description": "Choose if the message should be send with a webhook or not."
          },
          {
            "type": 5,
            "name": "divider",
            "description": "Choose if you want to use a divider between the emojis or not"
          },
          {
            "type": 5,
            "name": "update_timestamp",
            "description": "Choose if you want to have a timestamp under the emojis list or not"
          }
        ]
      }
    ]
  }
}