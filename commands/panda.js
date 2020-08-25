exports.run = async (client, message, args) => {
    const fetch = require('node-fetch')
    const Discord = require('discord.js')
    message.delete()
    const { link } = await fetch('https://some-random-api.ml/img/panda').then(reponse => reponse.json());
    const embed = new Discord.MessageEmbed()
    .setImage(link)
    return message.channel.send({embed})
} 
