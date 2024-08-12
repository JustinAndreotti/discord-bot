require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {   //basic response command
        name: 'hello',
        description: 'replies to the command',
    },

    {   //Command with required options
        name: 'add',
        description: 'Adds two numbers.',
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
        ]
    },

    {   //command with a required option and predetermined choices
        name: 'roll',
        description: 'Rolls a dice from a variety of standard dice.',
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
        ]
    },

    {
        name: 'embed',
        description: 'sends an embed'
    }

];  //end command list

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {

        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )

        console.log('Slash Commands were registered successsfully!');

    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();
