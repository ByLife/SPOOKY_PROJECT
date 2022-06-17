// DEPENDENCIES

const SpookyBotClients = require('./spooky-bot/client/Clients');
const Website = require("./spooky-web/Web.js")

// WEB PART

Website.run()

// BOT PART

const tokens = ["NzY4MTU1NzM1OTgwNTA3MTU2.Gh91WJ.xinVlHRdEbxID90ngBuqh4QlSBnPQGdkn4Oau8"]
const SpookyClients = new SpookyBotClients(tokens)

SpookyClients.run()