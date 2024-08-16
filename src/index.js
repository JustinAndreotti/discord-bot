require('dotenv').config();
const eventHandler = require('./handlers/eventhandler');
const {Client, IntentsBitField, EmbedBuilder, ActivityType} = require('discord.js');
const mongoose = require('mongoose');

//Give bot permissions
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});


//connect to database
(async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB.");

        //import eventHandler
        eventHandler(client);

        //Turn bot on
        client.login(process.env.TOKEN);  

        //set status for bot
        client.on('ready', (c) => {     //c stands for client 
            client.user.setActivity({
                name: "Constantly Overseeing",
                type: ActivityType.Custom
            })
        });
        

    } catch (error) {
        console.log(`Error connecting to mongoDB, error: ${error}`);
    }
})();























