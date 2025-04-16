// Load environment variables dulu
require('dotenv').config();

const DiscordMusicBot = require("./lib/DiscordMusicBot");
const { exec } = require("child_process");

// Optional: Jalankan slash command deploy (pilih salah satu)
require('./deploy/deployGlobal'); // atau gunakan deployGuild jika pakai GUILD_ID

if (process.env.REPL_ID) {
	console.log("Replit system detected, initiating special `unhandledRejection` event listener.");
	process.on('unhandledRejection', (reason, promise) => {
		promise.catch((err) => {
			if (err.status === 429) {
				console.log("Something went wrong whilst trying to connect to Discord gateway, resetting...");
				exec("kill 1");
			}
		});
	});
}

const client = new DiscordMusicBot();

console.log("Make sure to fill in the config.js before starting the bot.");

const getClient = () => client;

module.exports = {
	getClient,
};
