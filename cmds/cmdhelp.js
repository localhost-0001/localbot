const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

// hook = require('../hook.js')
module.exports.run = async (msg, args) => {
    console.log(`help has been run by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
    msg.channel.send(`My current prefix is ! 
!!!WARNING!!! THIS BOT IS MORE SAVAGE THEN RALF & LOCALHOST THOGETHER!!!      
To use a command do following things:

1. Have the needed permissions to use the command
2. Do not be a retard
3. Put the prefix in front of the command (Example: !help)

List of commands:
1.  ban
2.  clear
3.  help
4.  idof
5.  kick
6.  myid
7.  ping
8.  pong
9.  pingpong
10. addrole
11. say
12. test
13. suggest
15. donut
16. remrole
17. filter 		     {a chatfilter :)}
18. permsystem 		 {explains the permission system of the bot}
X. (WIP) play, won't work
    `)
            // let hookArgs = msg.content.slice(5).split(","); // This slices the first 6 letters (prefix & the word hook) then splits them by 'commas'

            // hook.hook('397767808320143368', hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);


    
}

module.exports.help = {
    name: "help",

}
