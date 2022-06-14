// DEPENDENCIES

const SpookyBotClients = require('./spooky-bot/client/Clients');
const Website = require("./spooky-web/Web.js")

// WEB PART

Website.run()

// BOT PART

const tokens = ["OTgzMDkyOTA0ODQxMDU2MzE2.GrwcLF.XVMEb6bnLXqAITu47en7yOB-8HDrhA19QOGyqI"]
const SpookyClients = new SpookyBotClients(tokens)

SpookyClients.run()