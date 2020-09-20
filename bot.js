const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});

const fs = require('fs');

const { get } = require('snekfetch')

const Enmap = require("enmap");

client.commands = new Discord.Collection();

client.aliases = new Discord.Collection();

var config = require('./storages/config.json')

client.config = config;

const settings = new Enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Załadowano event : ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Załadowano komendę : ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on('message', async message =>  {
    if (message.author.bot || message.author === client.user) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const aha = message.content.toLowerCase();
    if(aha.includes("aha")) {
        message.delete()
	message.channel.send(`${message.author.username} jest patusem i pisze "aha" i elo benc :c`)
    } else
    if(command == "ts") {

        let channel = message.mentions.channels.first();
        if(!channel) return message.reply("Użycie: `!ts #kanał`");

        let sent = await channel.send(new Discord.MessageEmbed()
            .setTitle("Zgłoszenia")
            .setDescription("Znalazłeś/aś błąd lub chcesz się odwołać od bana lub złożyć skargę na gracza? Stwórz kanał na zgłoszenie poprzez kliknięcie w reakcje :ticket:")
            .addField("**Uwaga:** Jeśli na Discordzie posiadasz inny nick niż w Minecraft, to masz obowiązek podać w zgłoszeniu swój nick!", "\u200B")
            .setColor("00e1ff")
        );

        sent.react('🎫');
        settings.set(`${message.guild.id}-ticket`, sent.id);

        message.channel.send("Załozono kanał do ticketów!")
    } else
    if(command == "close") {
        if(!message.channel.name.includes("ticket-")) return message.channel.send("Nie możesz tu tego użyć!")
        message.channel.delete();
    } else
    if (message.content === '!join') {
	client.emit('guildMemberAdd', message.member);
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();

    if(user.bot) return;
    const msge = reaction;
    if(!msge.id === '752288391281770548') return;
    if(reaction.emoji.name == '🎫') {
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
            channel.send(new Discord.MessageEmbed().setTitle(`${user.username} Witaj na swoim zgłoszeniu!`).setDescription("Opisz błąd, który znalazłeś i poczekaj aż administracja ci odpisze").setColor("00ff00"))
        })}
    })

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === '「🎉」wejścia-wyjścia');
	if (!channel) return;
	const guild = client.guilds.cache.get("683318858798596125");
	const embed = new Discord.MessageEmbed()
	.setColor('ffffff')
	.setDescription(`Witaj **${member.user.username}**\n Teraz jest **${guild.members.cache.filter(member => !member.user.bot).size}** osób!`)
	channel.send(embed);
});

client.login(process.env.BOT_TOKEN);
