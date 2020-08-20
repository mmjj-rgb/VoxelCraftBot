exports.run = async (client, message, args) => {
  let ilosc = args.join(" ");
  const Discord = require('discord.js');
  const webhook = new Discord.WebhookClient(client.config.logsId, client.config.logsToken);
  const member = message.member;
    if (!member.roles.cache.some(role => role.name === '🔧vcb.perms.low')) {
        message.channel.send({embed: {
            color: 15158332,
            title: "ERROR",
            fields: [{
                name: "Brak Uprawnień",
                value: 'Aby móc wykonać tą komendę musisz mieć rolę `🔧vcb.perms.low`'
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
      if(!args.length) {
        message.channel.send({embed: {
          color: 15158332,
          title: "ERROR",
          description: 'Błąd formatu wiadomości',
          fields: [{
              name: "Poprawne użycie:",
              value: '**!clear <ilość wiadomości, którą mam usunąć>**'
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
      if (ilosc > 100) return message.reply(`Nie możesz usunąć więcej niż 100 wiadomości naraz`);
      if (ilosc < 1) return message.reply('Musisz usunąć przynajmniej 1 wiadomość');
      message.delete()
      message.channel.bulkDelete(ilosc)
      const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#00D166')
        .setDescription('Usunięto ' + ilosc + ' wiadomości <a:emoji_01:738012159178571800>')
        .addField('Odpowiedzialny administrator:', `**${message.author.username}**`)
        .setTimestamp()
        .setFooter('VoxelCraftBot ©', 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128')
        message.channel.send(embed)
      const embed2 = new Discord.MessageEmbed()
      .setTitle('LOGI')
      .setColor('#00D166')
      .setDescription(`Usunięto ` + ilosc + ` wiadomości, na kanale <#${message.channel.id}>`)
      .setFooter(`${message.author.username}`)
      .setTimestamp()
      webhook.send(embed2)
      return;
};