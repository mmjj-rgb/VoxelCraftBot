exports.run = (client, message, args) => {
    let text = args.join(" ")
    const member = message.member;
    const Discord = require('discord.js')
    const webhook = new Discord.WebhookClient(client.config.logsId, client.config.logsToken);
    message.react('739812127308775456')
    message.author.send({embed: {
        color: 3066993,
        title: "FORMULARZ",
        description: 'Aby napisać formularz, napisz do bota wiadomość prywatną według wzoru podanego niżej. (Na)',
        fields: [{
            name: '\u200B',
            value: '**1. Nick z minecraft**'
          },
          {
            name: '\u200B',
            value: '**2. Email**'
          },
          {
            name: '\u200B',
            value: '**3. Odpowiedzi na pytania** (pytania znajdują się na kanale <#739818450905595924>)'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }})
      const embed = new Discord.MessageEmbed()
      .setTitle('LOGI')
      .setColor('#00D166')
      .setDescription('Użytkownik ' + message.author.username + ' stworzył podanie')
      .setFooter(`${message.author.username}`)
      .setTimestamp()
      webhook.send(embed)
     return;
};