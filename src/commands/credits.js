const embed = require('../embeds/embeds');


module.exports = {
    name: 'credits',
    aliases: [],
    description: 'Information',
    usage: 'credits',
    options: [],

    execute(client, message) {
        message.reply({ embeds: [embed.Embed_credits(client.ws.credits)], allowedMentions: { repliedUser: false } });
    },

    slashExecute(client, interaction) {
        interaction.reply({ embeds: [embed.Embed_credits(client.ws.credits)], allowedMentions: { repliedUser: false } });
    },
};
