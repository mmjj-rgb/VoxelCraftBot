exports.run = (client, message, args) => {
    message.channel.send({embed: {
        color: 3066993,
        title: "Lista Komend ()",
        fields: [{
            name: "ADMINISTRACYJNE (3)",
            value: '`ogloszenie, event, ankieta`'
          },
          {
            name: 'MODERACYJNE (5)',
            value: '`ban, kick, clear, vcbrole, invites`'
          },
          {
            name: 'PRZYDATNE (5)',
            value: '`formularz, strona, ping, botinfo, event, help`'
          },
          {
            name: '4FUN (7)',
            value: '`korwin, pikachu, cat, dog, panda, fox, meme`'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }
     })
};