const { RichEmbed } = require('discord.js')


const COLORS = {
    red: 0xe74c3c,
    green: 0x2ecc71
}


module.exports = {

    error(chan, cont, title){
        /**
 * 

 * @param {Discord.Channel} chan Channel to send n
 * @param {string} cont The bottom
 * @param {string} title The actual title
 */
        var message
        var emb = new RichEmbed()
            .setColor(COLORS.red)
            .setDescription(cont)
        if (title){
            emb.setTitle(title)
        }
        chan.send('', emb).then((m) => {
            message = m
        })
        return message
    },

    info(chan, cont, title) {
        var emb = {
            embed:{
                color: COLORS.green,
                description: cont,
                title: title,
                fields: [
                    {
                        name: "test12",
                        value:"test23",
                        inline: false
                    }
                ]
            }
        }
        chan.send('',emb)
    }

    

}