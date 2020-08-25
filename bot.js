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

client.on('guildMemberAdd', member => {
    if (member.guild.id != "683318858798596125") return;
    client.channels.get(747828285228187648 ).setName(`📊 LUDZIE: ${member.guild.membersCount}`);
});

client.on('guildMemberRemove', member => {
    if (member.guild.id !== "683318858798596125") return;
    client.channels.get(747828285228187648).setName(`📊 LUDZIE: ${member.guild.membersCount}`);
});

client.on('message', async message => {
    if (message.author.bot || message.author === client.user) return;
    let guild = client.guilds.cache.get('711234725955633173')
	  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();
    const member = message.member;
    const amount = args.join(' ');
    const webhook = new Discord.WebhookClient(config.logsId, config.logsToken);
    if (!message.channel.type === "dm") return;
      if (!message.content.startsWith('1.')) return;
      message.react('739812127308775456')
      const embed2 = new Discord.MessageEmbed()
      .setTitle('PODANIE')
      .setColor('#00D166')
      .setDescription('Pomyślnie wysłano twój formularz na kanał administracyjny')
      .setFooter('VoxelCraftBot ©', 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.webp?size=128')
      .setTimestamp()
      client.channels.cache.get(config.formularze).send(embed2)
      const embed = new Discord.MessageEmbed()
      .setTitle('LOGI')
      .setColor('#00D166')
      .setDescription('Użytkownik ' + message.author.username + ' stworzył podanie')
      .setFooter(`${message.author.username}`)
      .setTimestamp()
      webhook.send(embed)
});

client.login(process.env.BOT_TOKEN);
