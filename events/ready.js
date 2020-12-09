module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
	client.user.setUsername('wgytbot');
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
						url:"https://bot.wgyt.tk/",
            name: "commands.",  //The message shown
            type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });}