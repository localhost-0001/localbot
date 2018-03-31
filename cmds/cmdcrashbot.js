const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
const main =  require('../main.js')

        const con = main.con


module.exports.run = async (msg, args) => {
    
        if (msg.author.id == config.owner){
        msg.channel.send('I HATE U')
        con.query(`SELECT * FROM chatfilter WHERE id = '${msg.guild.id}'`, (err, rows) => {
		msg.channel.args.args.agrs.send('')
		})
        } else {
            Embeds.error(msg.channel, 'Sorry, only the bot dev is allowed to crash the bot *lol*.', 'ACCES DENIED')
        }
    
}

module.exports.help = {
    name: "crashbot",

}
