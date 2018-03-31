const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

module.exports.run = async (msg, args) => {
  console.log(`permsystem has been run by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
msg.channel.send(`HOW THE PERMISSION SYSTEM WORKS

If you have no role, you only can use the ''basic'' commands
If you have 1 or more of the following roles, you unlock Perm level 1.

Roles : localbotadmin, Admin, Owner

Advantages of Perm level 1:

The Chat-Filter stops filtering your messages.
Following commands are unlocked:
ban
kick
filter
clear
addrole
remrole

`)
    
}

module.exports.help = {
    name: "permsystem",

}
