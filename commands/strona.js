exports.run = (client, message, args) => {
    message.channel.send({embed: {
        color: 1752220,
        title: "STRONA",
        fields: [{
            name: "Strona VoxelCrafta:",
            value: '[\*klik\*](https://voxel-craft.github.io)'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/icons/683318858798596125/04ac8603160fbd773c3bcf8c4969151f.png?size=128',
          text: "VoxelCraftBot ©"
        }
      }
     })
    }