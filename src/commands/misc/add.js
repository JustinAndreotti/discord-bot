const {ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');

module.exports = {
    name: 'add',
    description: 'pong',
    deleted: true,
    //devOnly: boolean,
    //testOnly: boolean,
    options: [
        {
            name: 'first-number',
            description: 'The first number.',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'second-number',
            description: 'The second number.',
            type: ApplicationCommandOptionType.Number,
            required: true,
        }
    ],

    

    callback: (client, interaction) => {
        if (interaction.commandName === "add"){
            const num1 = interaction.options.get('first-number').value;
            const num2 = interaction.options.get('second-number').value;
    
            interaction.reply(`The sum is ${num1 + num2}`);
        }
    }
}