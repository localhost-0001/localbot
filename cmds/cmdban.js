

const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

module.exports.run = async (msg, args) => {
    
    if(msg.member.roles.some(r=>config.perm.includes(r.name)) || msg.author.id == config.owner  ) {
        console.log(`Ban has been run by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
       try {
        let kickMember = msg.guild.member(msg.mentions.users.first());
        msg.guild.member(kickMember).ban().catch(error => {msg.channel.send(`Error: ${error}`)}); // If it finds an error, it posts it into the channel.
        if (error) return;
        msg.channel.send("Member Banned.");
        return;
       } catch (error) {
        if (error) 
        Embeds.error(msg.channel, "Please select a Member to ban.", `You tried`)   
        return;
       }
       

        } else {

            Embeds.error(msg.channel, "Sorry, you don't have the needed permissions.", `ACCES DENIED`)
        }
    
}

module.exports.help = {
    name: "ban",

}

