exports.run = async (client, message, args) => {
    const Discord = require('discord.js')
    const text = args.join(" ") 
    const embed = new Discord.MessageEmbed 
    .setTitle(`Avatar użytkownika ${text}`) 
    .setDescription('Pobierz')
    .setUrl(`${message.author.avatarUrl}`)
    .setImage(`${message.author.avatarUrl}`)
    message.channel.send(embed)
} 
