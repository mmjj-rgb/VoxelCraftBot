exports.run = (client, message, args) => {
  let text = args.join(" ")
  const member = message.member;
  const Discord = require('discord.js')
  const webhook = new Discord.WebhookClient(client.config.logsId, client.config.logsToken);
  message.delete()
  if(!args.length) {
    message.channel.send({embed: {
      color: 15158332,
      title: "ERROR",
      description: 'Błąd formatu wiadomości',
      fields: [{
          name: "Poprawne użycie:",
          value: '**!event <treść>**'
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
  
  if (!member.roles.cache.some(role => role.name === '🔧vcb.perms.low')) {
    message.delete()
    client.channels.cache.get(client.config.eventygraczy).send({embed: {
      color: 2067276,
      title: "EVENT",
      fields: [{
          name: `Event gracza ${message.author.username}`,
          value: text
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
    message.delete()
    client.channels.cache.get(client.config.eventy).send({embed: {
      color: 3066993,
      title: "EVENT",
      fields: [{
          name: `VoxelCraft:`,
          value: text
        }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.webp?size=128',
          text: "VoxelCraftBot ©"
        }
        }
      })
      const embed = new Discord.MessageEmbed()
      .setTitle('LOGI')
      .setColor('#00D166')
      .setDescription(`Sworzono event na kanale <#${message.channel.id}>`)
      .setFooter(`${message.author.username}`)
      .setTimestamp()
      webhook.send(embed)
  }