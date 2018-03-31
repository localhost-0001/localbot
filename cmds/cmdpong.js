

const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

module.exports.run = async (msg, args) => {
    console.log(`Pong has been run by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
    msg.channel.send('Who pinged u??!???!?!??!?')
    
}

module.exports.help = {
    name: "pong",

}




