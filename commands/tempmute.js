exports.run = async (client, message) => {
    const ms = require('ms');
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0];
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
        var member = message.guild.member(message.mentions.users.first());
        if(!member) return message.reply('Please Provide a Member to TempMute.')

        let role = message.guild.roles.cache.find(role => role.name === "Muted");
        let mainrole = message.guild.roles.cache.find(role => role.name === "VOXELCRAFT");


        if (!role) {
            try{
              muterole = await message.guild.roles.create({
                name: "Muted",
                color: "#000000",
                permissions:[]
              })
              message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
                });
              });
            }catch(e){
              console.log(e.stack);
            }
            return;
        }

        let time = args[1];
        if (!time) {
            return message.reply("Podaj czas wyciszenia!");
        }

        member.roles.add(role.id)

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
