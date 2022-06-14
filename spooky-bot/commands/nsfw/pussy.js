const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const { WebEmbed } = require("discord.js-selfbot-v13")


module.exports = { 
    name: "pussy",
    description: "Pussy NSFW", 
    rank: "free",
    async run (client, message, args) {
        const image = await nsfw.pussy();
        const w = new WebEmbed({
            shorten: true,
            hidden: false
          })
            .setColor('RED')
            .setTitle("NSFW")
            .setImage(image)
         
        setTimeout(() =>  message.edit({embeds: [w] }).catch(() => (console.log("Error while sending embed"))), 2000)
    }
};