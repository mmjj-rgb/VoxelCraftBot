exports.run = (client, message, args) => {
    message.channel.send({embed: {
        color: 3066993,
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
            name: '**!ankieta <pytanie> | <odp1> | <odp2> | <odp3> | <odp4> | <odp5>**',
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
          },
          {
            name: "!vcbrole",
            value: 'Dodaje na serwer role z permisjami.'
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