module.exports = {
    name: "emoji enlarge",
    global: true,
    command: {
        "type": 1,
        "name": "emoji-enlarge",
        "description": "Enlarge an emoji",
        "options": [
            {
                "type": 3,
                "name": "emoji",
                "description": "The emoji you want to enlarge",
                "required": true
            }
        ]
    }
}
