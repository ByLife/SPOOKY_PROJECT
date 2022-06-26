// DEPENDENCIES

const SpookyBotClients = require('./spooky-bot/client/Clients');
const SpookyBotSecure = require("./spooky-secure/client/client.js")
const Website = require("./spooky-web/Web.js")

// WEB PART

Website.run()

// BOT PART

const tokens = [
    {
        token: "MzIyNDM3NTQ3NjU5ODg2NTky.GU_sow.-rdVOyN1pYIz_zID8f-bNaiVyyJBFFBkrCXgAU",
        rank: "premium",
    },
    {
        token:"OTgzMDkyOTA0ODQxMDU2MzE2.GCUkcn.8ZuCJrn_LgG2PqptQYZhQFrSE5yNl-9A-bwDQU",
        rank:"premium",
    },
    {
        token: "MzIyNDM3NTQ3NjU5ODg2NTky.GHzk-Z.B_eFSiHXOxbCIth4fHMYn6NCp-xGgQqnvBLpPE",
        rank: "premium",
    },
    {
        token: "NzY4MTU1NzM1OTgwNTA3MTU2.G64dOB.tnL_oyf8fc72_iKuSZeRbJwiHUCJwucXudm8TM",
        rank: "premium",
    },
    {
        token: "OTY1MDEwMjU4NzkzNzUwNTk4.GgkkaD.T-xIhvU3vul1yEDOZXSBSBQgveDYvjE3mAjcLw",
        rank: "premium",
    },
    {
        token: "NjU1MDIzMTA1OTIzODc0ODQy.GX8t9Z.i8C57092ZMPGjcVlRInnwMo5-KCuCasKhB2w9s",
        rank: "premium",
    },
    {
        token: "OTgyOTg3NjIzMDUwMTMzNTQ0.GPPw2X.hdNjWgq6VLDOh5NWEasjsneZ0lXIjYpB6hRVgY",
        rank: "vip"
    },
]



const SpookyClients = new SpookyBotClients(tokens)
const SBS = new SpookyBotSecure()

SpookyClients.run()
SBS.run()
