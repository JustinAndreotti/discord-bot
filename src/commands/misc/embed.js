module.exports = {
    name: 'embed',
    description: 'embeds a web link',
    deleted: true,
    //devOnly: boolean,
    //testOnly: boolean,
    //options: Object{},

    callback: (client, interaction) => {
        const embed = new EmbedBuilder()
        .setTitle('Embed Title')
        .setDescription('This is an embed')
        .setColor('Random')
        .addFields({name: 'field title', value: 'some random value', inline: true})
        .addFields({name: 'field title', value: 'some random value', inline: true})
        .addFields({name: 'field title', value: 'some random value', inline: true})
        
        interaction.channel.send({ embeds: [embed]});

    }
}