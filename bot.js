const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

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

client.on('message', async message => {
    if (message.author.bot || message.author === client.user) return;
    let guild = client.guilds.cache.get('711234725955633173')
	  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();
    const member = message.member;
    const amount = args.join(' ');
    const webhook = new Discord.WebhookClient(config.logsId, config.logsToken);
    const swearWords = ["aha"];
    if(swearWords.some(word => message.content.includes(word))) {
        message.delete()
	message.channel.send(`${message.author.username} jest patusem i pisze "aha" i elo benc :c`)
    }
});

client.login(process.env.BOT_TOKEN);
