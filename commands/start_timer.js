module.exports = {
	name: 'pomo',
	description: 'Creates a pomodoro timer',
	execute(message, args) {
    // Check if the user provided any arguments
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} 
    // Check if the user provided a numeric argument
    else if (args.length == 1 && !(isNaN(parseInt(args[0], 10)))) {
      // Parse the time provided in seconds by the user
      user_time = parseInt(args[0], 10) * 1000;
      message.channel.send(`Starting ${user_time / 1000}s Pomodoro Timer...`);

      // Start the timer
      timer = setTimeout(function() {
        return message.channel.send('Timer has been finished. Good work!');
      }, user_time);
      console.log(timer);
		} 
    // Check if the user specifically wanted to cancel the timer
    else if (args.length == 1 && args[0] === 'cancel'){
      message.channel.send(`Stopping the most recent timer...`);
      console.log(`Cancelling...${timer}`);
      clearTimeout(timer); // Clears the Timeout Promise
      return;
    }
    // End of command
	},
};