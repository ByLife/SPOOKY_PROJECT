const Convert = require('./spooky-bot/client/Conversion');
const SpookyBotClients = require('./spooky-bot/client/Clients');
const Web = require("./spooky-web/index.js")


// WEB PART

const WebSite = new Web()
WebSite.init()

// BOT PART

const tokens = [""]

const clients = new Convert(tokens)
const final = new SpookyBotClients(clients)

final.init()