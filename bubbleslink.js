const Discord = require("discord.js");
const client = new Discord.Client();
const FA = ['https://discordapp.com/assets/dd4dbc0016779df1378e7812eabaa04d.png', 'https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png?size=2048', 'https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png?size=2048', 'https://discordapp.com/assets/6debd47ed13483642cf09e832ed0bc1b.png?size=2048', 'https://discordapp.com/assets/1cbd08c76f8af6dddce02c5138971129.png?size=2048'];
let OwnerID = "385529907226345482"
let prefix = "-"

client.on("ready", function() {
	console.log("["+client.user.username+"] Is Online.")
});

client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
	if(message.content === prefix+"restart") {
        client.user.setStatus("invisible");
        message.channel.send(`**${message.author.username} | Restarting .**`).then(function(m) {
            setTimeout(function() {
               m.edit(`**${message.author.username} | Restarting ..**`)
             }, 500)
             setTimeout(function() {
               m.edit(`**${message.author.username} | Restarting ...**`)
             }, 1000)
             setTimeout(function() {
               m.edit(`**${message.author.username} | Restarting .**`)
             }, 1500)
             setTimeout(function() {
               m.edit(`**${message.author.username} | Restarting ..**`)
             }, 2000)
             setTimeout(function() {
             client.user.setStatus("online");
             }, 2500)
             setTimeout(function() {
             m.edit(`:white_check_mark: **${message.author.username} | Your bot has been restarted.**`)
             },2600)
        })
    }
	
    if (message.content.split(' ')[0] == prefix+'setgame') {
	 if(!args) return message.reply("**Please Type Bot New Game !!** ")
	  client.user.setGame(`${args}`)
	  message.channel.sendMessage('<@'+message.author.id +'> **Bot Playing Changed To **《 ` ' + args + ' ` 》 :white_check_mark:')
	}
	
	if (message.content.split(' ')[0] == prefix+'setstream') {
	 if(!args) return message.reply("**Please Type Bot New Stream !!**")
	  client.user.setGame(`${args}`,"https://twitch.tv/Gentle")
	  message.channel.sendMessage('<@'+message.author.id +'> **Bot Streaming Changed To **《 ` ' + args + ' ` 》 :white_check_mark:')
	}
	
	if (message.content.split(' ')[0] == prefix+'setname') {
	 if(!args) return message.reply("**Please Type Bot New Name !!**")
	  client.user.setUsername(`${args}`)
	  message.channel.sendMessage('<@'+message.author.id +'> **Bot Name Changed To **《 ` ' + args + ' ` 》 :white_check_mark:')
	}
	
	if (message.content.split(' ')[0] == prefix+'setavatar') {
	 if(!args) return message.reply("**Please Type Bot New Avatar Link !!**");
	  client.user.setAvatar(`${args}`)
	  message.channel.sendMessage('<@'+message.author.id +'> **Bot Avatar Changed To **《  ' + args + '  》 :white_check_mark:')
	}
	
	if (message.content.split(' ')[0] == prefix+'resetavatar') {
	  client.user.setAvatar(`${FA[Math.floor(Math.random() * FA.length)]}`)
	  message.channel.sendMessage('<@'+message.author.id +'> **Bot Avatar Removed **:white_check_mark:')
	}
	
	if (message.content === prefix+'setstat') {
  message.reply("**Please Type Bot New Situation : **`online` **|** `idle` **|** `dnd` **|** `invisible`**.**");
}
	
	if (message.content === prefix+'setstat online') {
	  client.user.setStatus(`online`)
	  message.channel.sendMessage('<@'+message.author.id +'> **Bot Situation Changed To **《  `online`  》 :white_check_mark:')
	}

	if (message.content === prefix+'setstat idle') {
      client.user.setStatus(`idle`)
	  message.channel.sendMessage('<@'+message.author.id +'> **Bot Situation Changed To **《  `idle`  》 :white_check_mark:')
	}

	if (message.content === prefix+'setstat dnd') {
	  client.user.setStatus(`dnd`)
	  message.channel.sendMessage('<@'+message.author.id +'> **Bot Situation Changed To **《  `dnd`  》 :white_check_mark:')
	}
	
	if (message.content === prefix + "help") {
message.author.send(`**  **
Owٍٍٍner Commands :
${prefix}**setname <New Name>**  :  Change bot name.
${prefix}**setavatar <AvatarURL>**  :  Change bot avatar.
${prefix}**resetavatar**  :  Reset bot avatar.
${prefix}**setgame <New Game>**  :  Change bot playing.
${prefix}**setstream <New Stream>**  :  Change bot streeming.
${prefix}**setstat <Type bot new situation>**  :  Change bot situation : \`online\` **|** \`idle\` **|** \`dnd\`.
${prefix}**restart**  :  Restart bot.
`)
}
})


 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 1 **")
      message.author.sendEmbed(Embed11)
    }
}); 

client.login(process.env.BOT_TOKEN);
