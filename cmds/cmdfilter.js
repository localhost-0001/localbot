const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
const main =  require('../main.js')
const con = main.con
var filterran
module.exports.run = async (msg, args) => {
    con.query(`SELECT * FROM chatfilter WHERE id = '${msg.guild.id}'`, (err, rows) => {
        if(rows.length < 1 ) {
            sql = `INSERT INTO chatfilter (id, filtered) VALUES ('${msg.guild.id}', '7890798078978097987980978798008087707908')`
        con.query(sql)  
        msg.channel.send('PLEASE RUN COMMAND AGAIN')
        return;   
        }
   });
    console.log(`Filter has been run by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )

    if(msg.member.roles.some(r=>config.perm.includes(r.name)) || msg.author.id == config.owner  ) {
        

        if(msg.member.roles.some(r=>config.perm.includes(r.name)) || msg.author.id == config.owner  ) {
            let rmsg = msg

    rmsg.channel.send(`
    What do you want to do?
    
    add
    remove
    list
    clear
    cancel`).then((msg) => {
        let omsg = msg
        msg = rmsg

        msg.channel.awaitMessages(response => response.content, {
          max: 1,
          time: 30000,
          errors: ['time'],
        })
        .then((collected) => {
      if (collected.first().author.id == msg.author.id){
        collected.first().delete().catch(error => {msg.channel.send(`Error on deleting Message: ${error}`)});
          if (collected.first().content == "add") {
          omsg.edit(`What do you want to add to the Spam-Filter?`).then(() => {
            msg.channel.awaitMessages(response => response.content, {
              max: 1,
              time: 30000,
              errors: ['time'],
            })
            .then((collected) => {
                if (collected.first().author.id == msg.author.id){
                    collected.first().delete().catch(error => {msg.channel.send(`Error on deleting Message: ${error}`)});

                    if (collected.first().content.indexOf(',') !== -1)
                    {
                        msg.channel.send('YOU MUSTN' +"'" +'T INCLUDE `,` IN THE FILTER')
                        
                    } else {
                    con.query(`SELECT * FROM chatfilter WHERE id = '${msg.guild.id}'`, (err, rows) => {
        
                        if (err) throw err;
                        
                        let sql;
                
                let addcontent = collected.first().content.toLowerCase()
                        if(rows.length < 1 ) {
                        sql = `INSERT INTO chatfilter (id, filtered) VALUES ('${msg.guild.id}', '${addcontent}')`
                        } else {
                            let chatfilter = rows[0].chatfilter;
                            if(err) throw err;
                            let filtered = rows[0].filtered;
                    var filtereda = filtered.split(',')
                
                   filtereda.push(`${addcontent}`)
                   filtereda.toString()
                
                            sql = `UPDATE chatfilter SET filtered = '${filtereda}' WHERE id = '${msg.guild.id}'`;
                        }
                        if (filtereda.indexOf("\\") != -1){
                            msg.channel.send("Your message mustnt't include `\\` or any reaction.")
                            return;
                        }

                        try {
                            con.query(sql)
                            omsg.edit(`Added ` + '`' + addcontent +'` to the Spam-Filter') 

                         }
                         catch (e) {
                            console.log(e)
                            return;
                        }
                         
                        
                            
    
                        });
                    
                    
                    
                                
                }    
        }
                 else {
                    Embeds.error(msg.channel, "Sorry, you aren't the author of the request.", `ACCES DENIED`)
                }
            }
          )});
         } else {
           if (collected.first().content == "remove") {
//                        collected.first().delete();

            omsg.edit(`What do you want to remove from the Spam-Filter?`).then(() => {
                msg.channel.awaitMessages(response => response.content, {
                  max: 1,
                  time: 30000,
                  errors: ['time'],
                })
                .then((collected) => {
                    if (collected.first().author.id == msg.author.id){
                        collected.first().delete().catch(error => {msg.channel.send(`Error on deleting Message: ${error}`)});

                        if (collected.first().content.indexOf(',') !== -1)
                        {
                            msg.channel.send('YOU MUSTN' +"'" +'T INCLUDE `,` IN THE FILTER')
                            
                        } else {
                        con.query(`SELECT * FROM chatfilter WHERE id = '${msg.guild.id}'`, (err, rows) => {
        
                            if (err) throw err;
                            
                            let sql;
                    
                    
                            if(rows.length < 1 ) {
                            sql = `INSERT INTO chatfilter (id, filtered) VALUES ('${msg.guild.id}', '7890798078978097987980978798008087707908')`
                            } else {
                                let chatfilter = rows[0].chatfilter;
                                if(err) throw err;
                                let filtered = rows[0].filtered;
                        var filtereda = filtered.split(',')
                        filtereda = filtereda.filter(item => !collected.first().content.toLowerCase().includes(item))
    
                       filtereda.toString()
                    
                                sql = `UPDATE chatfilter SET filtered = '${filtereda}' WHERE id = '${msg.guild.id}'`;
                            }
                            con.query(sql);
                        })
                        
                                    omsg.edit(`Removed ` + '`' + collected.first().content.toLowerCase() +'` from the Spam-Filter') 
                    }
                    } else {
                        Embeds.error(msg.channel, "Sorry, you aren't the author of the request.", `ACCES DENIED`)
                    }
                }
              )});
           } else {
               if (collected.first().content == 'list'){
             //   collected.first().delete();

                if (collected.first().author.id == msg.author.id){
                    con.query(`SELECT * FROM chatfilter WHERE id = '${msg.guild.id}'`, (err, rows) => {
        
                        if (err) throw err;   
                        let sql;
                        if(rows.length < 1 ) {
                        sql = `INSERT INTO chatfilter (id, filtered) VALUES ('${msg.guild.id}', '7890798078978097987980978798008087707908')`
                        msg.channel.send('ERROR 404 - Nothing in here.')
                        } else {
    
                            
                            let chatfilter = rows[0].chatfilter;
                            if(err) throw err;
                            let filtered = rows[0].filtered;
                    var filtereda = filtered.split(',')
                    omsg.edit('ALL ITEM IN THE SPAM-FILTER FOR THIS SERVER, FOR EACH ITEM A NEW LINE')
                    if(filtereda.length < 1)
                    {
                        msg.channel.send('ERROR 404 - Nothing in here.')
                        return;
                    } else {
                   filtereda = filtereda.filter(item => !'7890798078978097987980978798008087707908'.includes(item))
                    if (filtereda.length < 1)
                       {
                        msg.channel.send('ERROR 404 - Nothing in here.')
                        }
                   else {
                   filtereda.toString()
                   msg.channel.send(filtereda)
                        }
                               }
                                   }        
                    })
                
                } else {
                    Embeds.error(msg.channel, "Sorry, you aren't the author of the request.", `ACCES DENIED`)
                }
               } else{
    if (collected.first().content == 'cancel') {
        if (collected.first().author.id == msg.author.id){
omsg.edit('canceld.')
return;
        } else {
            Embeds.error(msg.channel, "Sorry, you aren't the author of the request.", `ACCES DENIED`)
        }
    } else {
        if (collected.first().content == 'clear') {
            if (collected.first().author.id == msg.author.id){
                sql = `DELETE FROM chatfilter WHERE id = '${msg.guild.id}'`;
            con.query(sql);
    omsg.edit('Spam-Filter cleared.')
    return;
            } else {
                Embeds.error(msg.channel, "Sorry, you aren't the author of the request.", `ACCES DENIED`)
            }
        } 
    }
             omsg.edit("Invalid Answer.")
               }
            } 
            
         }
        } else {
            Embeds.error(msg.channel, "Sorry, you aren't the author of the request.", `ACCES DENIED`)
        }
      
          })
          .catch(() => {
          omsg.edit('Nothing selected')
          });
      });
}
} else {
    Embeds.error(msg.channel, "Sorry, you don't have the needed permissions.", `ACCES DENIED`)
}
}
exports.filterran = filterran
module.exports.help = {
    name: "filter",

}

