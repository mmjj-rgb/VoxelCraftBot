exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const member = message.member;
    const embed = new Discord.MessageEmbed()
        .setTitle('ZAPROSZENIA')
        .setColor('#00D166')
        .setDescription('Komenda dostępna tylko dla administracji serwera.')
        .addField('VoxelCraft (Główny serwer vc) - https://discord.gg/QfncsSj', '\u200B')
        .addField('VCB (VoxelCraftBot test server) - https://discord.gg/r4gxYeE' , '\u200B')
        .addField('VoxelCraftApps (Podania użtkowników) - https://discord.gg/GBdt8gR', '\u200B')
        .setFooter('VoxelCraftBot ©')
        message.react('739812127308775456')
        message.author.send(embed)
    }
