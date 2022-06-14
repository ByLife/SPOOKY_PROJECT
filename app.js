const Convert = require('./spooky-bot/client/Conversion');
const SpookyBotClients = require('./spooky-bot/client/Clients');

const tokens = ["OTgzMDkyOTA0ODQxMDU2MzE2.GrwcLF.XVMEb6bnLXqAITu47en7yOB-8HDrhA19QOGyqI"]

const clients = new Convert(tokens)
const final = new SpookyBotClients(clients)

final.init()