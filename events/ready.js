module.exports = (client) => {

    console.log(
      `Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`
    );

    const activities = ['VOXELCRAFT.CSRV.PL','voxel-craft.github.io','!help'];
    setInterval(() => {
      let activity = activities[Math.floor(Math.random() * activities.length)];
      client.user.setActivity(activity, { type: "WATCHING" });
    }, 2000);
    client.user.setStatus('dnd');
  
  };