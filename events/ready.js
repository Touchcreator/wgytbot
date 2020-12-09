module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
			status:none,
        game: {
            name: "commands.",  //The message shown
            type: "LISTENING", //PLAYING: WATCHING: LISTENING: STREAMING:
						url: "httpss://bot.wgyt.tk"
        }
    });}