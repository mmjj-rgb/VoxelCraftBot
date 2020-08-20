exports.run = (client, message, args) => {
    const { get } = require('snekfetch')
    const Discord = require('discord.js')
    message.delete()
    try {
        get('https://some-random-api.ml/img/fox').then(res => {
            const embed = new Discord.MessageEmbed()
            .setImage(res.body.link)
            return message.channel.send({embed});
        });
    } catch(err) {
        return message.channel.send(err.stack);
    }
}