require('dotenv').config();
const eventHandler = require('./handlers/eventhandler');
const {Client, IntentsBitField, EmbedBuilder, ActivityType} = require('discord.js');

//Give bot permissions
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

//Turn bot on
client.login(process.env.TOKEN);   

//import eventHandler
eventHandler(client);















