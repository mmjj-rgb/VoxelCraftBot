exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    
    const [title, description, color, thumbnail, image] = message.content.slice(6).trim().split(' | ');

        if (!title && !desc && !image && !color) {
            return;
        }

        if (title) {
            embed.setTitle(title);
        }
        if (desc) {
            embed.setDescription(description);
        }
        if (image) {
            embed.setThumbnail(image);
        }
        if (title) {
            embed.setThumbnail(thumbnail);
        }
        if (color) {
            embed.setColor(color);
        }

        message.channel.send(embed);
        console.log(
            `s!customembed command used by ${message.author.username}`.rainbow
        );
    }
