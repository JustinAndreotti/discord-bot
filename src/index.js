require('dotenv').config();
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





//Console log when the bot is ready
client.on('ready', (c) => {             //c stands for client 
    console.log(`${c.user.username}` + " is now watching");

    client.user.setActivity({
        name: "Constantly Overseeing",
        type: ActivityType.Custom
    })
});





//Respond to messages
client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content ===  "am i being watched?" || message.content === "Am I being watched?") {
        message.reply('You are under surveillance.')
    }
    //add a random chance for the bot to call you out
    var surveillanceChance = Math.random();
    var chanceMax = 100;
    surveillanceChance = (surveillanceChance * chanceMax) + 1;
    surveillanceChance = Math.floor(surveillanceChance);
    console.log("Surveillance Chance: " + surveillanceChance);
    if (surveillanceChance === 50)
    {
        message.reply(message.user.displayName + ', you are under surveillance');
    }
});





//handle interactions
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;  //only run if the command was a slash command
    
    console.log( interaction.user.displayName + " entered the command: /" + interaction.commandName);

    //respond to /hello command
    if (interaction.commandName === "hello"){
        interaction.reply("...");
    }

    //respond to /add command
    if (interaction.commandName === "add"){
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`The sum is ${num1 + num2}`);
    }

    //respond to the /roll command
    if (interaction.commandName === "roll"){
        const maxValue = interaction.options.get('dice-type').value;
        var randomNum = Math.random();
        randomNum = (randomNum * maxValue) + 1;
        randomNum = Math.floor(randomNum);

        interaction.reply("**" + interaction.user.displayName + "**" + " has rolled a " 
            + "**" + randomNum + "**" + " on a d" + maxValue);
    }

    //respond to the /embed command
    //TODO: Flesh out the embed command
    if (interaction.commandName === "embed"){
        const embed = new EmbedBuilder()
        .setTitle('Embed Title')
        .setDescription('This is an embed')
        .setColor('Random')
        .addFields({name: 'field title', value: 'some random value', inline: true})
        .addFields({name: 'field title', value: 'some random value', inline: true})
        .addFields({name: 'field title', value: 'some random value', inline: true})
        
        interaction.channel.send({ embeds: [embed]});
    } 
}); //end InteractionCreate event listener




















