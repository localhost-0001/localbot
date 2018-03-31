const fs     = require('fs')
const Embeds =  require('../embed.js')

const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
const main =  require('../main.js')

module.exports = async (client, msg) => {
    var cont    = msg.content
    author  = msg.member
    chan    = msg.channel
    guild   = msg.guild

    if(msg.author.id != client.user.id){
		if (msg.guild.id == "380851471295709194")
        {
         if (msg.content.toLowerCase().indexOf('enough') !== -1) {
             msg.channel.send('THIS SERVER IS NOT THE SUPPORT SERVER FOR ENOUGH')
        console.log(`enough has been written by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
      //    var channel = main.client.channels.get("name", "general").id;
          main.client.channels.get('401666653290627072').send(`enough has been written by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}"), Channel name: `+ '`' + msg.channel.name + '` (ID:`' + msg.channel.id + "`)" + `
          FULL MESSAGE ` + '```' +` ${msg.content}` + '```')
    
         } 
         
        }
    
        if(msg.content.toLowerCase() === 'trump'){
            msg.channel.send('He is the president of the United States of America!');
        }
            




    
        var kran = 0
    
        if(msg.member.roles.some(r=>config.perm.includes(r.name)) || msg.author.id == config.owner || msg.author.id == client.user.id ) {
			kran = 1
} else {
        const con = main.con
    
        con.query(`SELECT * FROM chatfilter WHERE id = '${msg.guild.id}'`, (err, rows) => {
    
            if (err) throw err;
            
            let sql;
            if(rows.length < 1 ) {
            sql = `INSERT INTO chatfilter (id, filtered) VALUES ('${msg.guild.id}', '7890798078978097987980978798008087707908')`
            con.query(sql);
            } else {
    
                    let chatfilter = rows[0].chatfilter;
                if(err) throw err;
                 let filtered = rows[0].filtered;
                 var filtereda = filtered.split(',')
                 filtereda.forEach(function(entry) {
                   if (kran == 1) {
    
                   } else {
                    if (msg.content.toLowerCase().indexOf(entry) !== -1){
                        if (entry == 7890798078978097987980978798008087707908){
                            
                        } else {
                        msg.channel.send(`Sorry, <@${msg.author.id}>, your message containes something that is in the Spam-Filter`)
                        msg.delete()
                        kran = 1
                        }
                    }
                }
                });
    
           
    
            }
            
        })
        
                   
        }
        
    }

if(msg.author.id != client.user.id && cont.startsWith(config.prefix)){


    var invoke = cont.toLowerCase().split(' ')[0].substr(config.prefix.length),
        args   = cont.split(' ').slice(1)
        
     
        let cmd = client.commands.get(invoke)
        if(cmd) cmd.run(msg, args)
        else
        console.log(`${msg.content}`)
    
}


}
