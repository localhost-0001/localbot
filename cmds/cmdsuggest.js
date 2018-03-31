
const fs     = require('fs')
const Embeds =  require('../embed.js')
const bl =  require('../blocks.json')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
const main =  require('../main.js')
const con = main.con

module.exports.run = async (msg, args) => {
    con.query(`SELECT * FROM bans WHERE id = '${msg.member.id}'`, (err, rows) => {

        let sql

        if(rows.length < 1 ) {
            sql = `INSERT INTO bans (id, banned) VALUES ('${msg.member.id}', '0')`
            con.query(sql);   
            if (args.length == 0) {
                console.log(`a suggestion has been sent by by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}"), was empty` )

                msg.channel.send('Please suggest something!')
                return;
            }
            console.log(`a suggestion has been sent by by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
            main.client.channels.get(`${config.suggestchannel}`).send(`A suggestion has been sent by by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}"), Channel name: `+ '`' + msg.channel.name + '` (ID:`' + msg.channel.id + "`)" + `
            Suggestion: ` + '```' +` ${msg.content}` + '```')
        msg.channel.send('Suggestion sent')
        }
            if (!rows[0]) return;
        if(err) throw err;
        let banned = rows[0].banned;
        if (banned == 0){
            if (args.length == 0) {
                console.log(`a suggestion has been sent by by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}"), was empty` )

                msg.channel.send('Please suggest something!')
                return;
            }
            console.log(`a suggestion has been sent by by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
            main.client.channels.get(`${config.suggestchannel}`).send(`A suggestion has been sent by by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}"), Channel name: `+ '`' + msg.channel.name + '` (ID:`' + msg.channel.id + "`)" + `
            Suggestion: ` + '```' +` ${msg.content}` + '```')
        msg.channel.send('Suggestion sent')
        } else {
            Embeds.error(msg.channel, "U HAVE BEEN BLACKLISTED FROM SENDING ANY SUGGESTIONS!", `ACCES DENIED`)
        }
    }

)
/*    

*/  
}
 
module.exports.help = {
    name: "suggest",

}




