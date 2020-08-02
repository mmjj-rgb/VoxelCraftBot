exports.run = (client, message, args) => {
    const member = message.member;
    if (!member.roles.cache.some(role => role.name === '🔧vcb.perms.high')) {
        message.channel.send({embed: {
            color: 15158332,
            title: "ERROR",
            fields: [{
                name: "Brak Uprawnień",
                value: 'Aby móc wykonać tą komendę musisz mieć rolę `🔧vcb.perms.high`'
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
              text: "VoxelCraftBot ©"
            }
          }
        });
        return;
    } else 
    if(!args.length) {
      message.channel.send({embed: {
        color: 15158332,
        title: "ERROR",
        description: 'Błąd formatu wiadomości',
        fields: [{
            name: "Poprawne użycie:",
            value: '**!ogloszenie <treść>**'
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
      let text = args.join(" ")
      client.channels.cache.get(client.config.ogloszenia).send({embed: {
        color: 3066993,
        title: "OGŁOSZENIE",
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
    }