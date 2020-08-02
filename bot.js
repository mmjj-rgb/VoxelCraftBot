const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs')

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

client.on('message', (message) => {
    if (message.channel.type === "dm" || message.author.bot || message.author === client.user) return;
	  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();
    const member = message.member;
    const amount = args.join(' ');

    if(message.content === '<@!738707549917937766>') {
      const embed = new Discord.MessageEmbed()
        .setTitle('POMOC')
        .setColor('#00D166')
        .setDescription(`Hej ${message.author.username}! Mój prefix to ` + '`' + config.prefix + '`' + 'aby otrzymać listę komend wpisz komendę' + config.prefix + '`help`')
    }
});

client.login(process.env.BOT_TOKEN);
