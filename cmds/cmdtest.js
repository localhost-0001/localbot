

const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

module.exports.run = async (msg, args) => {
    
        if (msg.author.id == config.owner){
            Embeds.error(msg.channel, 'There is currently no test command.', 'NOPE')
        } else {
            Embeds.error(msg.channel, 'Sorry, only the bot dev is allowed to run the test command.', 'ACCES DENIED')
        }
    
}

module.exports.help = {
    name: "test",

}




