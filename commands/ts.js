exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    const Enmap = require('enmap');
    
    const settings = new Enmap({
        name: "settings",
        autoFetch: true,
        cloneLevel: "deep",
        fetchAll: true
    });
    
    let channel = message.mentions.channels.first();
      if(!channel) return message.reply("Usage: `!ts #kanał`");
        let sent = await channel.send(new Discord.MessageEmbed()
            .setTitle("Zgłoszenia")
            .setDescription("Znalazłeś/aś błąd lub chcesz się odwołać od bana lub złożyć skargę na gracza? Stwórz kanał na zgłoszenie poprzez kliknięcie w reakcje :envelope_with_arrow:")
            .addField("**Uwaga:** Jeśli na Discordzie posiadasz inny nick niż w Minecraft, to masz obowiązek podać w zgłoszeniu swój nick!", "\u200B")
            .setColor("00e1ff")
        );
        sent.react('🎫');
        settings.set(`${message.guild.id}-zgloszenie`, sent.id);
}
