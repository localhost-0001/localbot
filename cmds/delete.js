

const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

module.exports.run = async (msg, args) => {
    
msg.channel.send('Not at all.')
    
}

module.exports.help = {
    name: "delete",

}




