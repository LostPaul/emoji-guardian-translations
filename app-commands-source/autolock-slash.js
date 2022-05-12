module.exports = {
    name: "autolock",
    global: true,
    command: {
        "name": "autolock",
        "description": "autolock",
        "type": 1,
        "dm_permission": false,
        "default_member_permissions": "32",
        "options": [
            {
                "type": 1,
                "name": "remove",
                "description": "Remove the autolock",
                "options": null,
            },
            {
                "type": 1,
                "name": "enable",
                "description": "Enable auto locking emojis to roles",
                "options": [
                    {
                        "type": 8,
                        "name": "role",
                        "description": "The role for the autolock",
                        "required": true
                    },
                    {
                        "type": 8,
                        "name": "role2",
                        "description": "The second role for the autolock",
                    },
                    {
                        "type": 8,
                        "name": "role3",
                        "description": "The third role for the autolock",
                    },
                    {
                        "type": 8,
                        "name": "role4",
                        "description": "The fourth role for the autolock",
                    },
                ]
            }
        ]
    }
}