exports.run = async (client, message, args) => {
    const Discord = require('discord.js')
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor(0x333333)
        .setAuthor(user.username)
        .setImage(message.author.avatarUrl);
    message.channel.send(avatarEmbed);
} 

