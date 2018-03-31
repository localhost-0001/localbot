
module.exports = async (client) => {
    let s = 0

    client.guilds.forEach(function(entry) {
        s = entry.memberCount + s
        
    });
    client.user.setGame(`for ${s} members. :)`);
}
