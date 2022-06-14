
const Discord = require("discord.js-selfbot-v13")
const axios = require("axios")
const fs = require("fs")
const config = require("../../config.json")

module.exports =  class SpookyBot extends Discord.Client {
    constructor(token){
        super()
        this.token = token
        this.prefix = config.prefix
        this.commands = new Discord.Collection()
        this.snipes = new Discord.Collection()

        this.#loadCommands("nsfw/")
        this.#loadCommands("moderation/")
        this.#loadCommands("fun/")
        this.#loadCommands("anim/")
        this.#loadCommands("malicious/")
        this.#loadCommands("other/")
    }

    changeStatus(str) {
        axios.default.patch(
          "https://discordapp.com/api/v6/users/@me/settings",
          {
            "custom_status": {
              "text": str,
            },
          },
          {
            headers: {
              authorization: this.token,
            },
          }
        );
      }

      loopChangeStatus(){
        const activities = [`🤖>_`,`🤖>_ByLife.fr`,`🤖>_ByLife.fr Coming`,`🤖>_ByLife.fr Coming Soon`,];
        let i = 0;
        setInterval(() => {
          this.changeStatus(activities[i]) | i++ 
          if (i == activities.length) i = 0
        }, 5000);
      }

      #loadCommands(dir){
        fs.readdir(`./spooky-bot/commands/${dir}`, (err, files) => {
          if(err) console.log(err)
          if(!files) return 
          let jsfile = files.filter(f => f.split('.').pop() === 'js')       
          jsfile.forEach((f, i) => {
          let props = require(`../commands/${dir}${f}`);
          this.commands.set(props.name, props);
        })
       })
      }

      connect(){
          this.login(this.token)
      }
}