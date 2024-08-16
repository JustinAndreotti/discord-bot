module.exports = {
    name: 'ping',
    description: 'pong',
    deleted: false,
    //devOnly: boolean,
    //testOnly: boolean,
    //options: Object{},

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`);
    }
}