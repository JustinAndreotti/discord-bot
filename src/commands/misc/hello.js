module.exports = {
    name: 'hello',
    description: 'respons to the user',
    deleted: true,
    //devOnly: boolean,
    //testOnly: boolean,
    //options: Object{},
    

    callback: (client, interaction) => {
        interaction.reply("...");
    }
}