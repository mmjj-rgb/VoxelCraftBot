exports.run = (client, message, args) => {
    const { get } = require('snekfetch')
    const Discord = require('discord.js')
    message.delete()
    try {
        get('https://some-random-api.ml/meme').then(res => {
            const embed = new Discord.MessageEmbed()
            .setDescription(res.body.caption)
            .setImage(res.body.image)
            return message.channel.send({embed});
        });
    } catch(err) {
        return message.channel.send(err.stack);
    }
}