const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const fs = require('fs');

const AntiSpam = require('discord-anti-spam');

const { get } = require('snekfetch')

const Enmap = require("enmap");

const antiSpam = new AntiSpam({
    warnThreshold: 5, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 15, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 25, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Nie spam!', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** Został wyrzucony za spamienie.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** Został zbanowany za spamienie.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});

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

client.on('message', (message) => antiSpam.message(message)); 

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

client.login(process.env.BOT_TOKEN);
