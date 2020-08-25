exports.run = async (client, message, args) => {
    const fetch = require('node-fetch')
    const Discord = require('discord.js')
    message.delete()
    const { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(reponse => reponse.json());
    const embed = new Discord.MessageEmbed()
    .setImage(message) 
} 
