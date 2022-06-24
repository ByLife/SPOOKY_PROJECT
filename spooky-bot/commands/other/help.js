const { MessageActionRow, MessageSelectMenu } = require("discord.js-selfbot-v13")

module.exports = {
    name:"help",
    description: "Help command to show you the utilities",
    async run(client, message, args){
        const row = message.components
        const buttons = row[0].components
        const button = buttons[0].customId
        await message.clickButton(button)
    }
}