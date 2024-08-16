module.exports = {
    name: 'ping',
    description: 'Returns Latency of bot | websocket | user',
    deleted: false,
    //devOnly: boolean,
    //testOnly: boolean,
    //options: Object{},

    callback: async (client, interaction) => {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();

        const ping = reply.createdTimestamp - interaction.createdTimestamp;

        interaction.editReply(
            `Bot: ${ping}ms | Websocket: ${client.ws.ping}ms`
        );
    }
}