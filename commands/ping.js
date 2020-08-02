exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    const m = await message.channel.send("Pinguję ....")
  
    let pong = new Discord.MessageEmbed()
    .setTitle("🏓 Pong!")
    .setColor('RANDOM')
    .setTimestamp()
    .addField("Ping:", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
    .addField("Ping API:", `${Math.round(client.ws.ping)}ms`, true)
    .setFooter(`VoxelCraftBot ©`, 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128');
  
    await message.channel.send(pong)
    m.delete()
};