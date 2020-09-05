exports.run = async (client, message, args) => {
    const ms = require('ms');
    let tomute = client.users.cache.find(u => u.name === `${message.mentions.users.first()}`, `${message.guild.members.get(args[0])}`)
    if(!tomute) return message.reply("Nie znaleziono użytkownika.");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie mam uprawnień do wyciszenia tego użytkownika!");
    let muterole = message.channel.guild.cache.roles.find(`name`, "muted");
    if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Nie podałeś czasu!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> został zmutowany na ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> został odmutowany!`);
  }, ms(mutetime));
}
