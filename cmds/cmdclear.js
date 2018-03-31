const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

module.exports.run = async (msg, args) => {
    console.log(`Clear has been run by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
try {
    if(msg.member.roles.some(r=>config.perm.includes(r.name)) || msg.author.id == config.owner ) {
       
        if (isNaN(args[0])) {
            // Sends a message to the channel.
            Embeds.error(msg.channel, 'Please use a number as your arguments.', "You tried");
            // Cancels out of the script, so the rest doesn't run.
            return;
        }
        if (args[0] >= 100){
            Embeds.error(msg.channel, 'Please select a number beetween 1 and 99', "You tried")
            return;
        }

        
        delcnt = parseInt(args[0])
        delcount = delcnt + 1
        
        
        {
            const fetched = await msg.channel.fetchMessages({limit: delcount}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting
            
            // Deleting the messages
            msg.channel.bulkDelete(fetched)
                .catch(error => msg.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.
    
        }

      } else {
          if (msg.author.id == config.owner){
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                Embeds.error(msg.channel, 'Please use a number as your arguments.', "You tried");
                // Cancels out of the script, so the rest doesn't run.
                return;
            }
            if (args[0] >= 100){
                Embeds.error(msg.channel, 'Please select a number beetween 2 and 99', "You tried")
                return;
            }
            if (args[0] <= 1){
                Embeds.error(msg.channel, 'Please select a number beetween 2 and 99', "You tried")
                return;
            }
            delcnt = parseInt(args[0])
            delcount = delcnt + 1
            
            
            {
                const fetched = await msg.channel.fetchMessages({limit: delcount}); // This grabs the last number(args) of messages in the channel.
                console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting
                
                // Deleting the messages
                msg.channel.bulkDelete(fetched)
                    .catch(error => msg.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.
        
            }
          } else 
        Embeds.error(msg.channel, "Sorry, you don't have the needed permissions.", `ACCES DENIED`)
      }
      
} catch (error) {
    console.log(error)
}

}

module.exports.help = {
name: "clear",

}