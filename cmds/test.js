const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
const main =  require('../main.js')
const client = main.client
// hook = require('../hook.js')
module.exports.run = async (msg, args) => {
    let rmsg = msg
        if (rmsg.author.id == config.owner){
            rmsg.channel.send(` █MENU█
            What do you want to do?
            
           1. add
           2. remove
           3. list`).then((msg) => {
                let omsg = msg
                msg = rmsg
                msg.channel.awaitMessages(response => response.content, {
                  max: 1,
                  time: 30000,
                  errors: ['time'],
                })
                .then((collected) => {
              if (collected.first().author.id == msg.author.id){
                  if (collected.first().content == "1") {
                  omsg.edit("")
                  collected.first().delete();
                  }
                }
            })
        });
            

        } else {
            Embeds.error(msg.channel, 'Sorry, only the bot dev is allowed to run this command', 'ACCES DENIED')
        }
    
}

module.exports.help = {
    name: "test",

}