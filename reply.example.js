"await client.getLanguage.getCommandContent('same-emoji-name', 'errors', interaction, { 'type': 'content', 'interaction': interaction }))",
"await client.getLanguage.getCommandContent('emoji-edited', 'commonly-used', interaction, { 'type': 'content', 'interaction': interaction, 'currentEmoji': emoji})",


checkEmoji(options, config.emojis.error, await client.getLanguage.getCommandContent(this.name.replaceAll(' ', '-'), ['interactions', 'slash_commands'], interaction, { 'type': 'content', 'interaction': interaction, 'autoLockRoles': roles}))
 
 interaction.editReply({
    content: checkEmoji(options, client.replyEmojis["success"],
        await client.getLanguage.getCommandContent(this.name.replaceAll(" ", "-"),
            ["interactions", "slash_commands"], interaction, { "type": "content", "interaction": interaction, "autoLockRoles": roles })), ephemeral: true
})

cooldown.delete(`${this.name.replaceAll(/\s/g, '')}${interaction.user.id}`)
                interaction.editReply({
                    content: checkEmoji(options, client.replyEmojis["error"],
                        await client.getLanguage.getCommandContent("autolock-not-enabled",
                            "errors", interaction, { "type": "content", "interaction": interaction })), ephemeral: true
                })