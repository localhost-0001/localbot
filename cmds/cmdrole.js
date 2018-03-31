const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

module.exports.run = async (msg, args) => {
    if (args.length <= 1)
    {
        console.log(`Addrole has been run by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
        Embeds.error(msg.channel, 'Usage of this command: !addrole @member Name_of_the_role', 'YOU TRIED')
        return;
    }
    console.log(args.length)
    if (args.length == 2)
    {
        if (msg.member.roles.some(r=>config.perm.includes(r.name)) || msg.author.id == config.owner ) {
            try {
                console.log(args[1])
                
                console.log(`Addrole has been run by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
                let role = msg.guild.roles.find('name', args[1]);
                let member = msg.mentions.members.first();
                member.addRole(role).catch(error => {msg.channel.send(`Error: ${error}`)});;
                msg.channel.send("Done.")
                
            } catch (error) {
                console.log(error)
                msg.channel.send(error)
                Embeds.error(msg.channel, `Usage of this command: !addrole @member Name_of_the_role
MAKE SURE THERE ARE NO EMPTY SPACES! CASE SENSITIVE!
ALSO MAKE SURE THE BOT HAS THE NEEDED PERMISSIONS.`, 'YOU TRIED')

            }


        } else {

            Embeds.error(msg.channel, "Sorry, you don't have the needed permissions.", 'ACCES DENIED')
        }
        return;
    }

    
}

module.exports.help = {
    name: "addrole",

}