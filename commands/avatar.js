exports.run = async (client, message, args) => {
    const Discord = require('discord.js')
    const text = args.join(" ") 
    const img = message.author.avatarUrl
    message.channel.send({embed: {
        title: "STRONA", 
        description: `[POBIERZ](${message.author.avatarUrl} )`, 
        image: {
		url: img,
	},
      }
   })
} 
