exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    
    const embed = new Discord.MessageEmbed()
    
    const [title, description, color, image] = message.content.slice(6).trim().split(' | ');

        if (!title && !description && !image && !color) {
            return;
        }

        if (title) {
            embed.setTitle(title);
        }
        if (description) {
            embed.setDescription(description);
        }
        if (image) {
            embed.setThumbnail(image);
        }
        if (color) {
            embed.setColor(color);
        }

        message.channel.send(embed);
        console.log(
            `s!customembed command used by ${message.author.username}`.rainbow
        );
    }
