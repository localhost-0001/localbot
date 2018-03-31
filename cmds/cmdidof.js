const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

// hook = require('../hook.js')
module.exports.run = async (msg, args) => {
    if (args.length <= 0)
    {
        console.log(`Addrole has been run by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
        Embeds.error(msg.channel, 'Usage of this command: !idof @member', 'YOU TRIED')
        return;
    }
            msg.channel.send(`Id of ${msg.mentions.users.first()} : "${msg.mentions.users.first().id}"`)
            // let hookArgs = msg.content.slice(5).split(","); // This slices the first 6 letters (prefix & the word hook) then splits them by 'commas'

           // hook.hook('397767808320143368', hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);


    
}

module.exports.help = {
    name: "idof",

}