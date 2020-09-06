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
        
client.on('messageReactionAdd', async (reaction, user) => {
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();

    if(user.bot) return;

    let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`);

    if(!ticketid) return;

    if(reaction.message.id == ticketid && reaction.emoji.name == '🎫') {
        reaction.users.remove(user);

        reaction.message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Welcome to your ticket!").setDescription("We will be with you shortly").setColor("00ff00"))
        })
    }
