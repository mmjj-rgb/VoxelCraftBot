exports.run = (client, message, args) => {
  const member = message.member;
  const Discord = require('discord.js')
  const webhook = new Discord.WebhookClient(client.config.logsId, client.config.logsToken);
  message.delete()
  if (!member.roles.cache.some(role => role.name === 'ADMIN')) {
    message.channel.send({embed: {
        color: 15158332,
        title: "ERROR",
        fields: [{
            name: "Brak Uprawnień",
            value: 'Aby móc wykonać tą komendę musisz mieć rolę `ADMIN`'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }
    })
    return;
  } else
  
  if(!message.guild.roles.cache.some(role => role.name == '🔧vcb.perms.high')) {
    message.guild.roles.create({
      data:{
        name: '🔧vcb.perms.high',
        color: 'gray'
      }
    })
    console.log(`Stworzono rolę 🔧vcb.perms.high na sewerze ${message.guild.name}`)
    message.channel.send('Stworzono rolę `🔧vcb.perms.high`.')
    const embed = new Discord.MessageEmbed()
    .setTitle('LOGI')
    .setColor('#00D166')
    .setDescription('Sworzono role `vcb.perms.high`')
    webhook.send(embed)
  }
  else {
    return;
  }

  if(!message.guild.roles.cache.some(role => role.name == '🔧vcb.perms.low')) {
    message.guild.roles.create({
      data:{
        name: '🔧vcb.perms.low',
          color: 'gray'
        }
      })
      console.log(`Stworzono rolę 🔧vcb.perms.low na serwerze ${message.guild.name}`)
      message.channel.send('Stworzono rolę `🔧vcb.perms.low`.')
      const embed = new Discord.MessageEmbed()
      .setTitle('LOGI')
      .setColor('#00D166')
      .setDescription('Sworzono role `vcb.perms.low`')
      .setFooter(`${message.author.username}`)
      .setTimestamp()
      webhook.send(embed)
  }
  else {
      return;
    }
  }