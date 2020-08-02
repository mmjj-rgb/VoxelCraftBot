exports.run = (client, message, args) => {
  let msgArgs = message.content.split(' ').slice(1);
  let user = message.mentions.users.first();
  let kickReason = args.slice(1).join(' ');
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
        member.kick({reason: `${kickReason}`})
      }
      message.channel.send({embed: {
      color: 3066993,
      title: "KICK",
      description: `Użytkownik ${user.username} został wyrzucony.`,
      fields: [{
          name: "Odpowiedzialny administrator:",
          value: `${message.author.username}`
        },
        {
          name: 'Powód:',
          value: `${kickReason}`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
        text: "VoxelCraftBot ©"
      }
    }
   }).then(messageReaction => {
    messageReaction.react(config.emotka1);
   })}
};
