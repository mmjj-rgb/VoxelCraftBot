exports.run = (client, message, args) => {
  const member = message.member;
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
    }
    else {
      return;
    }
  }