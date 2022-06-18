// DEPENDENCIES

const SpookyBotClients = require('./spooky-bot/client/Clients');
const Website = require("./spooky-web/Web.js")

// WEB PART

Website.run()

// BOT PART

const tokens = [""]
const SpookyClients = new SpookyBotClients(tokens)

SpookyClients.run()