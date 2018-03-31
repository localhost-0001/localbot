const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
const main = require('../main.js')
const con = main.con
module.exports.run = async (msg, args) => {
    
        if (msg.author.id == config.owner){		

con.query(`SELECT * FROM bans WHERE id = '${msg.mentions.users.first().id}'`, (err, rows) => {
    
    if (err) throw err;
    
    let sql;

    if(rows.length < 1 ) {
    sql = `INSERT INTO bans (id, banned) VALUES ('${msg.mentions.users.first().id}', '0')`
    } else {
        let bans = rows[0].bans;
        sql = `UPDATE bans SET banned = 0 WHERE id = '${msg.mentions.users.first().id}'`;
    }
    con.query(sql);
})

            msg.channel.send('done, i guess?') 
        } else {
            Embeds.error(msg.channel, 'Sorry, only the bot dev is allowed to run this command', 'ACCES DENIED')
        }
    
}

module.exports.help = {
    name: "unblock",

}
