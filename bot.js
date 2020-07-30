const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!"

const config = require('./config.json')

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setActivity('VOXELCRAFT.CSRV.PL', { type: "WATCHING" }).catch(console.error);
  });

client.on('message', (message) => {
    if (message.channel.type === "dm" || message.author.bot || message.author === client.user) return;
	  var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();
    const member = message.member;
    const amount = args.join(' ');
 
    if(command === 'ogloszenie') {
       if (!member.roles.cache.has(config.rolaadm)) {
             message.channel.send({embed: {
                color: 15158332,
                title: "ERROR",
                fields: [{
                    name: "Brak Uprawnień",
                    value: 'Aby móc wykonać tą komendę musisz mieć rolę `vcb.perms`'
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
          client.channels.cache.get(config.ogloszenia).send({embed: {
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
            });
    } else

    if(command === 'event') {
      let text = args.join(" ")
      if (!member.roles.cache.has(config.rolaadm)) {
        message.channel.send({embed: {
           color: 15158332,
           title: "ERROR",
           fields: [{
               name: "Brak Uprawnień",
               value: 'Aby móc wykonać tą komendę musisz mieć rolę `vcb.perms`'
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
        message.delete()
        client.channels.cache.get(config.ogloszenia).send({embed: {
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
          });
  } else

    if(command === 'strona') {
      message.channel.send({embed: {
        color: 1752220,
        title: "STRONA",
        fields: [{
            name: "Strona VoxelCrafta:",
            value: '[\*klik\*](https://voxel-craft.github.io)'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }
     })
    } else

    if(command === 'clear') {
      let ilosc = args.join(" ");
      if (!member.roles.cache.has(config.rolaadm)) {
        message.channel.send({embed: {
            color: 15158332,
            title: "ERROR",
            fields: [{
                name: "Brak Uprawnień",
                value: 'Aby móc wykonać tą komendę musisz mieć rolę `vcb.perms`'
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
      if (ilosc > 100) return message.reply('Nie możesz usunąć więcej niż 100 wiadomości naraz');
      if (ilosc < 1) return message.reply('Musisz usunąć przynajmniej 1 wiadomość');
      message.channel.bulkDelete(ilosc)
      const embed = new Discord.MessageEmbed()
        .setTitle('CLEAR')
        .setColor('#00FFFF')
        .setDescription('Usunięto ' + ilosc + ' wiadomości <a:emoji_01:738012159178571800>')
        .addField('Odpowiedzialny administrator:', `**${message.author.username}**`)
        .setTimestamp()
        .setFooter('VoxelCraftBot ©', 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128')
        message.channel.send(embed)
      return;
    } else

    if(command === 'ankieta') {
      let msgArgs = args.slice(1).join(" ")
      let text = args.join(" ")
      message.delete()
      if (!member.roles.cache.has(config.rolaadm)) {
        message.channel.send({embed: {
           color: 15158332,
           title: "ERROR",
           fields: [{
               name: "Brak Uprawnień",
               value: 'Aby móc wykonać tą komendę musisz mieć rolę `vcb.perms`'
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
              value: '**!ankieta <treść>**'
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
      client.channels.cache.get(config.ankiety).send({embed: {
        color: 1752220,
        title: "ANKIETA",
        fields: [{
            name: `VoxelCraft`,
            value: text
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
     }}).then(messageReaction => {
       messageReaction.react('👍');
       messageReaction.react('👎');
     })

    } else

    if(command === 'ban') {
      let msgArgs = message.content.split(' ').slice(1);
      let user = message.mentions.users.first();
      let banReason = args.slice(1).join(' ');
      if (!member.roles.cache.has(config.rolaadm)) {
        message.channel.send({embed: {
            color: 15158332,
            title: "ERROR",
            fields: [{
                name: "Brak Uprawnień",
                value: 'Aby móc wykonać tą komendę musisz mieć rolę `vcb.perms`'
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
          color: 15158332,
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
        messageReaction.react(config.emotka1);
       })}
      return;
    } else

    if(command === 'kick') {
      let msgArgs = message.content.split(' ').slice(1);
      let user = message.mentions.users.first();
      let kickReason = args.slice(1).join(' ');
      if (!member.roles.cache.has(config.rolaadm)) {
        message.channel.send({embed: {
            color: 15158332,
            title: "ERROR",
            fields: [{
                name: "Brak Uprawnień",
                value: 'Aby móc wykonać tą komendę musisz mieć rolę `vcb.perms`'
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
          color: 15158332,
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
      return;
    } else

    if(command === 'botinfo') {
      message.channel.send({embed: {
        color: 1752220,
        title: "Lista Komend",
        fields: [{
            name: "VoxelCraftBot by mmjj",
            value: '**Bot zrobiony 17 godzin :p.**'
          },
          {
            name: 'Ilość komend : 9',
            value: '**Ilość serwerów : 2.**'
          },
          {
            name: 'Ilość ramu : 2048MB',
            value: '**CPU : 1024MB**'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }
     })
    } else
    
    if(command === 'help') {
      message.channel.send({embed: {
        color: 1752220,
        title: "Lista Komend",
        fields: [{
            name: "!help",
            value: 'Pokazuje tą wiadomość.'
          },
          {
            name: '!ogloszenie <treść>',
            value: 'Wysyła ogłoszenie na kanał #ogłoszenia .'
          },
          {
            name: '!event <treść>',
            value: 'Wysyła informacje o evencie na kanał #eventy .'
          },
          {
            name: '!strona',
            value: 'Wysyła link do naszej strony.'
          },
          {
            name: '!clear <ilość>',
            value: 'Usuwa daną ilość wiadomości.'
          },
          {
            name: '!ankieta <treść>',
            value: 'Tworzy ankietę na kanale #ankiety .'
          },
          {
            name: '!ban <@użytkownik> <powód>',
            value: 'Banuje danego użytkownika.'
          },
          {
            name: '!kick <@użytkownik> <powód>',
            value: 'Wyrzuca danego użytkownika z serwera.'
          },
          {
            name: '!botinfo',
            value: 'Podaje informacje o bocie.'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }
     })
    }
});

client.login('process.env.BOT_TOKEN');
