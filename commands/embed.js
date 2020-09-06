exports.run = (client, message, args) => {
    let msgArgs = args.slice(1).join(" ")
    let text = args.join(" ")
    const Discord = require('discord.js')
    
        const title = args['t'] || args['title'];
        const desc = args['d'] || args['description'];
        const image = args['i'] || args['image'];
        const color = args['c'] || args['color'];

        if (!title && !desc && !image && !color) {
            return;
        }

        if (title) {
            embed.setTitle(title);
        }
        if (desc) {
            embed.setDescription(desc);
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
}
