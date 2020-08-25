exports.run = async (client, message, args) => {
    const fetch = require('node-fetch')
    const Discord = require('discord.js')
    message.delete()
    const { image } = await fetch('https://some-random-api.ml/meme ').then(reponse => reponse.json());
    const embed = new Discord.MessageEmbed()
    .setImage(image)
    return message.channel.send({embed});
    }
} 
