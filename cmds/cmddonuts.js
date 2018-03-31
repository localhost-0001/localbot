const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

module.exports.run = async (msg, args) => {
  console.log(`donuts has been run by ${msg.author.username}#${msg.author.discriminator} (ID: "${msg.author.id}")` )
            msg.channel.send(`I give u some of mine. You get the hole! ( ͡° ͜ʖ ͡°)`)
            msg.channel.send(`Do u think i like you? (possible answers: yes, no)`)
   .then(() => {
  msg.channel.awaitMessages(response => response.content, {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
   
    if (collected.first().content == "yes") {
    msg.channel.send(`HOORAY`);
   } else {
     if (collected.first().content == "no") {
      msg.channel.send(`SO HEY, GO FUCK YOURSEEEELF!!!!!`);
     } else {
       msg.channel.send("Invalid Answer.")
     }
   }
   

    })
    .catch(() => {
    msg.channel.send('HAHAHHAH')
    });
});

    
}

module.exports.help = {
    name: "donut",

}
