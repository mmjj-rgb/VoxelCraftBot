exports.run = async (client, message) => {
    const ms = require('ms');
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0];
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.reply('Please Provide a Member to TempMute.')

        let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
        let role = message.guild.roles.cache.find(role => role.name === "Muted");

        if (!role) {
            try{
              muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions:[]
              })
              message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
                });
              });
            }catch(e){
              console.log(e.stack);
            }
        }

        let time = args[1];
        if (!time) {
            return message.reply("Podaj czas wyciszenia!");
        }

        member.roles.remove(mainrole.id)
        member.roles.add(role.id);

        message.channel.send(`@${member.user.tag} został wyciszony na: ${ms(ms(time))}`)

        setTimeout( function () {
            member.roles.add(mainrole.id)
            member.roles.remove(role.id);
            message.channel.send(`@${member.user.tag} został odciszony.`)
        }, ms(time));
            
    } else {
        return message.channel.send('You dont have perms.')
    }
}
