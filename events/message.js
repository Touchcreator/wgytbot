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
    message.channel.send(`Pong🏓Latency is ${Date.now() - message.createdTimestamp}ms.`);
	}
	if (message.content === "w!help"){
		message.author.send('**WgytBot Help**');

		message.author.send("Thanks For Using WgytBot!");

		message.author.send("**Commands**");

		message.author.send("To read about all of our commands go to https://bot.wgyt.tk/commands");

		message.author.send("**Help with other aspects of the bot**");

		message.author.send("For help with the bot in general, message @Wgyt#2120 or join Wgyt's server at https://wgyt.cf/discord");

		message.author.send("**Website**");

		message.author.send("https://bot.wgyt.tk/");
		
		message.author.send("*WgytBot is made with ❤ by @wgyt#2120*");
	}
}