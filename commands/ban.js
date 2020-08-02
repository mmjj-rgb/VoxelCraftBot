exports.run = (client, message, args) => {
      let msgArgs = message.content.split(' ').slice(1);
      let user = message.mentions.users.first();
      let banReason = args.slice(1).join(' ');
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
              value: '**!ban <oznaczenie użytkownika, którego mam zbanować.> <powód>**'
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
      if (user) {
        const member = message.guild.member(user);
          if (member) {
            member.ban({reason: `${banReason}`})
          }
          message.channel.send({embed: {
          color: 3066993,
          title: "BAN",
          description: `Użytkownik ${user.username} został zbanowany.`,
          fields: [{
              name: "Odpowiedzialny administrator:",
              value: `${message.author.username}`
            },
            {
              name: 'Powód:',
              value: `${banReason}`
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
            text: "VoxelCraftBot ©"
          }
        }
       }).then(messageReaction => {
        messageReaction.react(client.config.emotka1);
       })}
    }
