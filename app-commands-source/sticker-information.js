module.exports = {
    name: "sticker info",
    global: true,
    command: {
        "name": "sticker-information",
        "type": 1,
        "dm_permission": false,
        "default_member_permissions": "1024",
        "description": "Get information about a sticker",
        "options": [
            {
                "type": 3,
                "name": "sticker",
                "description": "The sticker you want to get information about",
                "required": true,
                "autocomplete": true
            }
        ]
    }
}
