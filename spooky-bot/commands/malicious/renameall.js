const { renameEveryone } = require("../../utils/functions")

module.exports = {
    name:"renameall",
    description: "Rename every member",
    async run(client, message, args){
        renameEveryone(message, args.join(" "))
    }
}