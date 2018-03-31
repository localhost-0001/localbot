
module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}`)
    let s = 0
    
    console.log(client.commands)
    client.guilds.forEach(function(entry) {
	    s = entry.memberCount + s

    /**    try {
   	entry.channels.find("name", "locallog").send("Started.")
	console.log(entry.name)
}
catch (e) {
   try {
   	entry.channels.find("name", "general").send("Started, also create a channel named ```locallog``` , then this will be put there.")
	console.log(entry.name)
}
catch (e) {
	try {
		entry.channels.find("name", "public").send("Started, also create a channel named ```locallog``` , then this will be put there.")
	console.log(entry.name)
}
catch (e) {
console.log(entry.name + " refused")
}

}
}
**/

	console.log(entry.name)

	/*.filter(c => c.type === "text") &&
	c.permissionsFor(client.user).has("SEND_MESSAGES")
	*/
	
	
}); 
/*{
    if(guild.channels.exists("name", "announcments")){
	guild.channels.find("name", "announcments")
	.filter(c => c.type === "text") &&
	c.permissionsFor(client.user).has("SEND_MESSAGES")
	console.log("+1")
	}
});*/
    //c = client.guilds.channels.find('name', "botout").catch(console.error);
    //c.send('TEST')
        //client.guilds.channels.type("text").name("botout").send("I think i've been started!")
        console.log(s)
client.user.setGame(`for ${s} members. :)`);
client.channels.get('389521828156276746').send("I've been started. Go and tell your mum about it.")
    console.log(`Init done.`)

}
