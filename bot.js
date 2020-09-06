const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});

const fs = require('fs');

const { get } = require('snekfetch')

const Enmap = require("enmap");

client.commands = new Discord.Collection();

client.aliases = new Discord.Collection();

var config = require('./storages/config.json')

client.config = config;

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
    let guild = client.guilds.cache.get('711234725955633173')
	  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();
    const member = message.member;
    const amount = args.join(' ');
    const webhook = new Discord.WebhookClient(config.logsId, config.logsToken);
    const aha = message.content.toLowerCase();
    if(aha.includes("aha")) {
        message.delete()
	message.channel.send(`${message.author.username} jest patusem i pisze "aha" i elo benc :c`)
    }
});

const settings = new Enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});

if(command == "ticket-setup") {
    let channel = message.mentions.channels.first();
    if(!channel) return message.reply("Usage: `!ticket-setup #channel`");
    let sent = await channel.send(new Discord.MessageEmbed()
        .setTitle("Ticket System")
        .setDescription("React to open a ticket!")
        .setFooter("Ticket System")
        .setColor("00ff00")
    );
    sent.react('🎫');
    settings.set(`${message.guild.id}-ticket`, sent.id);
    message.channel.send("Ticket System Setup Done!")
}

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
        })}
    })

client.login(process.env.BOT_TOKEN);
