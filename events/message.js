module.exports = (client, message) => {
	const Discord = require("discord.js")
  if (message.content.startsWith("w!kick")) {
    const member = message.mentions.members.first()
    if (!member) {
      return message.reply(
        `Who are you trying to kick? You must mention a user.`
      )
    }
    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`)
    }
    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch((error) => message.reply(`Sorry, an error occured.`))
  }
	if (message.content === "w!ping"){
		const pingembd = {
      "title": "WgytBot Pinged",
      "description": `Pong! 🏓 I have a latency of ${Date.now() - message.createdTimestamp}ms.`,
      "color": 11730944,
      "footer": {
        "text": "WgytBot is made with ❤ by @wgyt#2120",
        "icon_url": "https://www.wgyt.tk/images/logo.png"
      }
    }
		message.channel.send({ embed: pingembd });
	}
	if (message.content === "w!help"){
		const helpembd = { "title": "WgytBot Help", "description": "Thanks for using WgytBot!", "color": 11730944, "fields": [ { "name": "Commands", "value": "To read about all of our commands go to https://bot.wgyt.tk/commands" }, { "name": "Help with other aspects of the bot", "value": "For help with the bot in general, message @Wgyt#2120 or join WgytBot's server at https://discord.gg/PhwN8A9Bgp" }, { "name": "Website", "value": "https://bot.wgyt.tk/" },{ "name": "Invite", "value": "Go to https://bot.wgyt.tk/invite to invite me to your server." },{ "name": "Offline", "value": "If I'm offline, I'm updating or down for maintenance, so don't worry!" } ], "footer": { "text": "WgytBot is made with ❤ by @wgyt#2120", "icon_url": "https://www.wgyt.tk/images/logo.png" } }
		message.author.send({ embed: helpembd });
	}

  if (message.content === "w!pingme"){
			message.channel.send(`Pong! 🏓 ${message.author}`);
    }
  if (message.content === "w!source") {
		message.channel.send("WgytBot is open-source! :partying_face: My source is available at https://github.com/wgyt735yt/wgytbot :)");
	}
}