

//names.json is initiated as an object
const data = require('./names.json')
// Require the necessary discord.js classes
const { Client, Intents, PermissionOverwrites } = require('discord.js');
const { token } = require('./config.json');
//arrays surnames and lastnames are pulled from the object "data"
const surnames = data.surname
const lastnames = data.lastname




/*
    //a string from a random position is pulled from both the surnames and lastnames array
    const sname = surnames[Math.floor(Math.random()*surnames.length)]
    const lname = lastnames[Math.floor(Math.random()*lastnames.length)]
*/





// ***** Bot Stuff *****



// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('BenCUmBot is online');
});

// When the client joins a new Guild, run this code
client.once("guildCreate", (g) => {

    g.channels.create("daily-benedict-cumberbatch", {
        type: 'GUILD_TEXT',
        topic: "Daily dose of Benedict Cumberbatch",
    })

});



// Login to Discord with your client's token
client.login(token);





