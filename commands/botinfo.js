exports.run = async (client, message, args) => {
  const Discord = require('discord.js')
  let czas = client.uptime/1000
  let inline = true
  let bicon = client.user.displayAvatarURL;
  let usersize = client.users.cache.size
  let chansize = client.channels.cache.size
  let uptimxd = client.uptime 
  let servsize = client.guilds.cache.size
  const m = await message.channel.send("Pinguję ..")

  const embed = new Discord.MessageEmbed()
  .setColor("#00D166")
  .setThumbnail(bicon)
  .addField("Nazwa Bota:", `<:logo:739383557579079713> ${client.user.username}`, inline)
  .addField("Twórca Bota:", "<:mmjj:739384538253230147> <@355273172267827200>", inline )
  .addField("Serwery:", `🛡 ${servsize}`, inline)
  .addField("Kanały:", `📁 ${chansize}`, inline)
  .addField("Użytkownicy:", `👥 ${usersize}`, inline)
  .addField("Biblioteka Bota:", "<:logodjs:739391068986146841> Discord.js", inline)
  .addField("Założony :", 'Piątek 31 lipca 12:40')
  .addField("Uptime:", `${Math.round(czas)}s`, true)
  .addField("Ping:", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
  .addField("Ping API:", `${Math.round(client.ws.ping)}ms`, true)
  .setFooter('VoxelCraftBot ©', 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128')
  .setTimestamp()
  
  message.channel.send(embed);
  m.delete()

}