module.exports = {
    name: "discovery",
    global: true,
    ignore: true,
    command: {
        "name": "discovery",
        "description": "test",
        "type": 1,
        "options": [
            {
                "type": 1,
                "name": "apply",
                "description": "test",
                "options": null
            },
            {
                "type": 1,
                "name": "search",
                "description": "discovery search",
                "options": [
                    {
                        "type": 3,
                        "name": "server",
                        "description": "server",
                        "required": true,
                        "autocomplete": true
                    }
                ]
            },
            {
                "type": 1,
                "name": "sync_guild",
                "description": "Sync your server with the emoji discovery of Emoji Guardian",
                "options": null
            },
            {
                "type": 1,
                "name": "edit",
                "description": "Edit a server that is in discovery",
                "options": null
            }
        ]
    }
}