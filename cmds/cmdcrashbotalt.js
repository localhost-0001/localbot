const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

module.exports.run = async (msg, args) => {
    
        if (msg.author.id == config.owner){
        msg.author.args.args.args.send('hdsojfhdsf') 
        } else {
            Embeds.error(msg.channel, 'Sorry, only the bot dev is allowed to crash the bot *lol*.', 'ACCES DENIED')
        }
    
}

module.exports.help = {
    name: "crashbot",

}