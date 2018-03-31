const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

module.exports.run = async (msg, args) => {
    
        if (msg.author.id == config.owner){
            msg.delete(100)
            msg.channel.send(args.join(' ')) 
        } else {
            Embeds.error(msg.channel, 'Sorry, only the bot dev is allowed to run this command', 'ACCES DENIED')
        }
    
}

module.exports.help = {
    name: "say",

}