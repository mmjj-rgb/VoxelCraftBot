exports.run = (client, message, args) => {
    let msgArgs = args.slice(1).join(" ")
    let text = args.join(" ")
    const member = message.member;
    const [pytanie, odp1, odp2, odp3, odp4, odp5] = message.content.slice(8).trim().split(' | ');
    message.delete()
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
      }})
    } else
    if(!args.length){
      message.channel.send({embed: {
        color: 15158332,
        title: "ERROR",
        description: 'Błąd formatu wiadomości',
        fields: [{
            name: "Poprawne użycie:",
            value: '**!ankieta <pytanie> | <odp1> | <odp2> | <odp3> | <odp4> | <odp5>**'
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
    if(odp5) {
      client.channels.cache.get(client.config.ankiety).send({embed: {
        color: 3066993,
        title: '📊 ' + pytanie,
        fields: [{
            name: '🇦 ' + odp1,
            value: '\u200B'
          },
          {
            name: '🇧 ' + odp2,
            value: '\u200B'
          },
          {
            name: '🇨 ' + odp3,
            value: '\u200B'
          },
          {
            name: '🇩 ' + odp4,
            value: '\u200B'
          },
          {
            name: '🇪 ' + odp5,
            value: '\u200B'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }}).then(messageReaction => {
        messageReaction.react('🇦');
        messageReaction.react('🇧');
        messageReaction.react('🇨');
        messageReaction.react('🇩');
        messageReaction.react('🇪');
      })
    } else
    if(odp4) {
      client.channels.cache.get(client.config.ankiety).send({embed: {
        color: 3066993,
        title: '📊 ' + pytanie,
        fields: [{
          name: '🇦 ' + odp1,
          value: '\u200B'
          },
          {
          name: '🇧 ' + odp2,
          value: '\u200B'
          },
          {
          name: '🇨 ' + odp3,
          value: '\u200B'
          },
          {
          name: '🇩 ' + odp4,
          value: '\u200B'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }}).then(messageReaction => {
        messageReaction.react('🇦');
        messageReaction.react('🇧');
        messageReaction.react('🇨');
        messageReaction.react('🇩');
      })
    } else

    if(odp3) {
      client.channels.cache.get(client.config.ankiety).send({embed: {
        color: 3066993,
        title: '📊 ' + pytanie,
        fields: [{
          name: '🇦 ' + odp1,
          value: '\u200B'
          },
          {
          name: '🇧 ' + odp2,
          value: '\u200B'
          },
          {
          name: '🇨 ' + odp3,
          value: '\u200B'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }}).then(messageReaction => {
        messageReaction.react('🇦');
        messageReaction.react('🇧');
        messageReaction.react('🇨');
      })
    } else

    if(odp2) {
      client.channels.cache.get(client.config.ankiety).send({embed: {
        color: 3066993,
        title: '📊 ' + pytanie,
        fields: [{
          name: '🇦 ' + odp1,
          value: '\u200B'
          },
          {
          name: '🇧 ' + odp2,
          value: '\u200B'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }}).then(messageReaction => {
        messageReaction.react('🇦');
        messageReaction.react('🇧');
      })
    } else 

    if(odp1) {
      message.channel.send({embed: {
        color: 15158332,
        title: "ERROR",
        description: 'Błąd formatu wiadomości',
        fields: [{
            name: "Poprawne użycie:",
            value: '**!ankieta <pytanie> | <odp1> | <odp2> | <odp3> | <odp4> | <odp5>**'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }})
    }
};