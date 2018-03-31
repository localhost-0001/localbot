 
const mysql = require("mysql")
const Discord = require('discord.js')
const fs      = require('fs')
const Embeds =  require('./embed.js')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

var client = new Discord.Client() 
exports.client = client;
client.commands = new Discord.Collection()


     fs.readdir("./cmds/", (err, files) => {
         
        
         if(err){console.error(err)};
         
    
    
    
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    
    if(jsfiles.length <= 0){
        console.log("No commands found");
        return;
    } else
    console.log(`Loading ${jsfiles.length} commands.`)


    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded`);
        client.commands.set(props.help.name, props);
    });
});

const evtFiles = fs.readdirSync("./events/")

evtFiles.forEach(file =>{
    if (file.split(".").slice(-1)[0] !== "js") return;
    const evtName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(evtName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
})

client.on('ready', () => {


})


client.on('message', (msg) => {


})

var con = mysql.createConnection({
    insecureAuth: "true",
    host: "localhost",
    user: config.sqlname,
    password: config.sqlpw,
    database: config.sqldat
})
con.connect(err => {
    if(err) throw err;
    console.log("Connected to database!");
    con.query("SHOW TABLES", console.log)
})
exports.con = con;
exports.client = client;
client.login(config.token)
exports.client = client;
