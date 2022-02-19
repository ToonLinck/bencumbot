

//names.json is initiated as an object
const data = require('./names.json')

/* 
create a config.json file in the same directory as bot.js with the following syntax

{

    "token": "*YOUR BOTS TOKEN HERE*"

}

*/




// Require the necessary discord.js classes
const { Client, Intents, PermissionOverwrites } = require('discord.js');
const { token } = require('./config.json');
//arrays surnames and lastnames are pulled from the object "data"
const surnames = data.surname
const lastnames = data.lastname



// ***** Bot Stuff *****



// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('BenCUmBot is online');
});

// When the client joins a new Guild, run this code
client.once("guildCreate", (g) => {

    let cbChannelid

    // a new channel is created 
    g.channels.create("daily-benedict-cumberbatch", {
        type: 'GUILD_TEXT',
        topic: "Daily dose of Benedict Cumberbatch",
    }).then(result => {

        //the id of the newly created channel is saved
        cbChannelid = result.id;

    })


    // send a new message ever 24 hours
    setInterval(function() {


        try {
            client.channels.cache.get(cbChannelid).send(newCumberBatch())
        } catch (e) { console.log("couldnt send"); } 

    },86400000)


});


function newCumberBatch(){


    const sname = surnames[Math.floor(Math.random()*surnames.length)]
    const lname = lastnames[Math.floor(Math.random()*lastnames.length)]

    const cumberbatch = `${sname} ${lname}`

    return cumberbatch
}




// Login to Discord with your client's token
client.login(token);





