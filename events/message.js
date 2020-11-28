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
    message.channel.send(`:nerd: Latency is ${Date.now() - message.createdTimestamp}ms.`);
	}
	if (message.content === "w!help"){
		message.author.send('**TochoGDPSBot Help**');

		message.author.send("Thanks for using TochoGDPSBow!");

		message.author.send("**Commands**");

		message.author.send("To read about all of our commands go to https://discordbot.touchcreator.repl.co/commands");

		message.author.send("**Help with other aspects of the bot**");

		message.author.send("For help with the bot in general, message @Touchcreator#1356 or join TochoGDPS's server at https://discord.gg/2ZZmhnTzkC");

		message.author.send("**Website**");

		message.author.send("https://discordbot.touchcreator.repl.co");

    message.author.send("**Offline**")

    message.author.send("`If I'm offline, I'm updating or down for maintenance, so don't worry!`")
		
		message.author.send("*TochoGDPSBot is made with ❤ by @Touchcreator#1356, based off WgytBot made by @wgyt#2120*");
	}
	if (message.content === "w!command") {
		// do stuff
		}
  if (message.content === "w!pingme"){
    message.channel.send(`${message.author}`);
	}
  if (message.content === "When will 2.2 come out?" || message.content === "when will 2.2 come out" || message.content === "Will 2.2 come out?" || message.content === "will 2.2 come out?") {
		message.channel.send("I don't know. Robtop is being a bit lazy, but cut him some slack.");
	}
  if (message.content === "When will the Apex legends update come?" || message.content === "when will the apex update come" || message.content === "Will Apex Legends Update come?" || message.content === "will apex legends update out?") {
		message.channel.send("I don't know. Respawn just realesed the Steam version. But, if you really want new things, just play Teeworlds.");
	}
  if (message.content === "Where is the source code of TochoGDPSBot?" || message.content === "where is the code" || message.content === "source code of the bot?" || message.content === "What about the source code") {
		message.channel.send("TochoGDPS Bot isn't open source, but our base, WgytBot is! Their source is available at https://github.com/wgyt735yt/wgytbot :)");
	}
}