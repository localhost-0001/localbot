
var YTDL = require('ytdl-core') 
var opusscript = require('opusscript')
const fs     = require('fs')
const Embeds =  require('../embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

function play(connection, msg){
    var server = servers[msg.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function(){
        if (server.queue[0]) play(connection, msg);
        else connection.disconnect();
    })
}

module.exports.run = async (msg, args) => {

    var servers = {};
    if(!args[0]){
        Embeds.error(msg.channel, 'Please use a link to a youtube video', 'YOU TRIED')
        return;
    }
    if(!msg.member.voiceChannel) {
        Embeds.error(msg.channel, 'Please go in a voice channel!!111!!!!!!!!11', 'YOU TRIED')
        return;
    }
    if (!servers[msg.guild.id]) servers[msg.guild.id] = {
        queue: []
    }
    var server = servers[msg.guild.id]

    if (!msg.guild.voiceConnection) msg.member.voiceChannel.join().then(function(connection) {
        play(connection, msg)
    });
}

module.exports.help = {
    name: "play",

}




