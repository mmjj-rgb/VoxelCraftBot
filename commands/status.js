exports.run = (client, message, args) => {
    const fetch = require('node-fetch')
    const Discord = require('discord.js')
    message.delete()
    const { version } = await fetch('https://api.mcsrvstat.us/2/voxelcraft.csrv.pl').then(reponse => reponse.json());
    const { online } = await fetch('https://api.mcsrvstat.us/2/voxelcraft.csrv.pl').then(reponse => reponse.json());
    const { players } = await fetch('https://api.mcsrvstat.us/2/voxelcraft.csrv.pl').then(reponse => reponse.json());
    if(online === "true") {
      const embed = new Discord.MessageEmbed()
      .setTitle('Informacje o serwerze:')
      .addField('Status:', '<:1_:739812127308775456>')
      .setImage(link)
       return message.channel.send({embed})
    }
}
