const fs     = require('fs')
const Embeds =  require('../embed.js')
const main =  require('../main.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

module.exports.run = async (msg, args) => {
    
    if (msg.author.id == config.owner){
        a = args.join(' ')
        b = a.split(' ').slice(1)
        main.client.channels.get(args[0]).send(args.slice(1).join(' ')).catch()


        // let hookArgs = msg.content.slice(5).split(","); // This slices the first 6 letters (prefix & the word hook) then splits them by 'commas'

        // hook.hook('397767808320143368', hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);

    } else {
        Embeds.error(msg.channel, 'Sorry, only the bot dev is allowed to run this command', 'ACCES DENIED')
    }

}

module.exports.help = {
name: "sayin",

}