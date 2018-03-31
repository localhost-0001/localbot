
const fs     = require('fs')
const Embeds =  require('../embed.js')
const bl =  require('../blocks.json')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
const main =  require('../main.js')
const con = main.con

module.exports.run = async (msg, args) => {
    con.query(`SELECT * FROM chatfilter WHERE id = '${msg.guild.id}'`, (err, rows) => {

        let sql

            if (!rows[0]) return;
        if(err) throw err;
        let filtered = rows[0].filtered;
console.log(filtered)
    }

)
/*    

*/  
}
 
module.exports.help = {
    name: "logfilter",

}




