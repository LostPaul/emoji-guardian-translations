module.exports = {
    name: "emoji preview",
    global: true,
    command: {
        "name": "emoji-preview",
        "description": "Emoji See how an emoji looks on darkmode and whitemode",
        "type": 1,
        "options": [
            {
                "type": 3,
                "name": "emoji",
                "description": "The emoji you want to preview",
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
