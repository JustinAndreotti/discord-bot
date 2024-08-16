const {ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');

module.exports = {
    name: 'roll',
    description: 'rolls a dice of specified sieze',
    //devOnly: boolean,
    //testOnly: boolean,
    deleted: false,
    options: [
        {
            name: 'dice-type',
            description: 'Select what type of dice to roll.',
            type: ApplicationCommandOptionType.Number,
            choices: [
                {
                    name: 'd4',
                    value: 4
                },
                {
                    name: 'd6',
                    value: 6
                },
                {
                    name: 'd8',
                    value: 8
                },
                {
                    name: 'd10',
                    value: 10
                },
                {
                    name: 'd12',
                    value: 12
                },
                {
                    name: 'd20',
                    value: 20
                },
            ],
            required: true
        }
    ],
    

    callback: (client, interaction) => {
        const maxValue = interaction.options.get('dice-type').value;
        var randomNum = Math.random();
        randomNum = (randomNum * maxValue) + 1;
        randomNum = Math.floor(randomNum);

        interaction.reply("**" + interaction.user.displayName + "**" + " has rolled a " 
            + "**" + randomNum + "**" + " on a d" + maxValue);

    }
}