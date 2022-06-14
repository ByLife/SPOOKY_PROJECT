const { dmEveryone } = require("../../utils/functions")

module.exports = {
    name: "dmall",
    description: "DM Every User in the server",
    async run(client, message, args){
        dmEveryone(message, args.join(" "))
    }
}