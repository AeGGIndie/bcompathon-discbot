// Import the corresponding libraries and information required
// to create the pomodiscord bot
const Discord = require("discord.js");
const config = require("./config.json");
// const lib = require("./lib");

// Creates a link to the discord client to our code
const client = new Discord.Client();
const ONE_SECOND = 1000; // In miliseconds

// Output to the console the bots user tag once it's ready to run
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Create a global variable for the use of maintaining the timer
var timer;

// Listen to an event where a message is entered
const command_prefix = "+";
client.on('message', message => {
  // Create a command prefix that we can refer to for each message
	if (!message.content.startsWith(command_prefix) || message.author.bot) return;
  const args = message.content.slice(command_prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  // Check if the message that the person entered is followed by
  // the corresponding 'command' string
  if (command === 'pomo') {
    // Check if the user provided any arguments
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} 
    // Check if the user provided a numeric argument
    else if (args.length == 1 && !(isNaN(parseInt(args[0], 10)))) {
      // Parse the time provided in seconds by the user
      user_time = parseInt(args[0], 10) * ONE_SECOND;
      message.channel.send(`Starting ${user_time / ONE_SECOND}s Pomodoro Timer...`);

      // Start the timer
      timer = setTimeout(function() {
        return message.channel.send('Timer has been finished!');
      }, user_time);


      // console.log(timer);
      // timer = lib.timer(user_time);
      // console.log(`timer ${timer}`);
      // timer.then(function(result){
      //   return message.channel.send('Timer has been finished!');
      // });
		} 
    // Check if the user specifically wanted to cancel the timer
    else if (args.length == 1 && args[0] === 'cancel'){
      message.channel.send(`Stopping the most recent timer...`);
      console.log(`Cancelling...${timer}`);
      clearTimeout(timer); // Clears the Timeout Promise
      return;
    }
    // console.log(args)
		// message.channel.send(`First argument: ${args[0]}`);
	}
});

// // Listen to an event where a message is entered
// client.on('message', msg => {
//   // Do not listen to messages created by the bot itself
//   if (msg.author == client.user){
//     return;
//   }

//   // Check if a message contains strictly 25
//   if (msg.content === '25') {
//     var TIME = 3000; 
//     msg.reply('Starting 25 millisecond pomo');
//     var timer = lib.timer(TIME);
//     timer.then(function(result){
//       console.log(result)
//     });

//   }
// });






client.login(config['TOKEN']);


