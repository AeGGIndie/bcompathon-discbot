// Import the corresponding libraries and information required
// to create the pomodiscord bot
const Database = require("@replit/database");
const Discord = require("discord.js");
const { command_prefix, token } = require("./config.json");
const fs = require("fs");

// Create a link to the discord client to our code
const client = new Discord.Client();

// Creates an extension of the Map, holding commands
client.commands = new Discord.Collection();

// Grab a list of the command files
const commandFiles = fs.readdirSync('./bcompathon-discbot/commands').filter(file => file.endsWith('.js'));

// Iterate through each file
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// Output to the console the bots user tag once it's ready to run
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Listen to an event where a message is entered
client.on('message', message => {
  // Create a command prefix that we can refer to for each message
	if (!message.content.startsWith(command_prefix) || message.author.bot) return;
  const args = message.content.slice(command_prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  // Check if the command being looked for exists
  if (!client.commands.has(command)) return;

  // Attempt to run the command (assuming it exists)
	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}

});







client.login(token);


