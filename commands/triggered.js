exports.run (client, message, args) => {
    let text = args.join(" ")
    message.channel.send(`https://some-random-api.ml/canvas/YouTube-comment?avatar=${message.author.avatarUrl}&username=${message.author.username}&comment=${text}`) 
} 
