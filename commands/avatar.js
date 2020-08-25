exports.run = async (client, message, args) => {
    const Discord = require('discord.js')
    const text = args.join(" ") 
    message.channel.send({embed: {
        title: "STRONA", 
        description: `[POBIERZ](${message.author.avatarUrl} )`, 
        image: {
		url: `${message.author.avatarUrl}`,
	},
      }
   })
} 
