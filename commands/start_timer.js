const Database = require("@replit/database");
const Discord = require("discord.js");
// Create a link to Repl.it's database
const db = new Database()

module.exports = {
	name: 'pomo',
	description: 'Creates a pomodoro timer',
	execute(message, args) {
    //
    // Helper Embed Message Function
    //
    async function embedFieldAdd(EmbMsg){
      /*
      * Queries the database for the specific users total time studied
      * and displays it on the embed (adds it as a field)
      */
      const username = EmbMsg.author.name;
      const data = await db.get("users");
      data.map(function(val) {
        if (val.user_id.includes(username)){
          EmbMsg.addFields({name: 'You have studied in total for', value: `${val.minutes} seconds`, inline: true});
        }
      })
    }
  

    //
    // Start of command details
    //


    // Check if the user provided any arguments
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} 
    // Check if the user provided a numeric argument
    else if (args.length == 1 && !(isNaN(parseInt(args[0], 10)))) {
      // Parse the time provided in seconds by the user
      const user_time = parseInt(args[0], 10) * 1000;
      message.channel.send(`Starting ${user_time / 1000}s Pomodoro Timer...`);

      // Create EMBED
      const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#EC0101')
	    .setTitle('POMO BOT')
      .setAuthor(`${message.author.username}`)
	    .setDescription(`Pomodo Timer Stats`)
	    .setThumbnail('https://www.pngfind.com/pngs/m/564-5648078_tomato-sticker-tomato-cute-hd-png-download.png')
	    .addFields(
        { name: 'Time studied this session is:', value: `${user_time / 1000} seconds`},
        // {name: `You have studied in total for` + `${val.minutes}`, inline: true},
        // {name: 'This ranks you as', value: '(RANK)/(TOTAL) !', inline: true},
	    )
	    //.addField(`You have studied in total for `,`x (UNITS). Good work!`)
      //.addField(`This ranks you as`,` (RANK)/(TOTAL) !`)

      // Add a specific field as we query into the database
      embedFieldAdd(exampleEmbed);

      // Start the timer
      timer = setTimeout(function() {
      message.channel.send(exampleEmbed);
      return  message.channel.send(`Timer has been finished ${message.author}. Good work!`);
      }, user_time);

      // Grab the current users information
      current_user = {
        "user_id": message.author.tag,
        "minutes": user_time / 1000
      }
      
      // Check if the database is empty
      db.get("users").then(users => {
        if (!users || users.length < 1){
          db.set("users", [current_user]);
        }
      });

      // Update the database
      db.get("users").then(users => {
        // Check if the current user_id already exists in the DB
        if (users.some(user => user.user_id == current_user.user_id)) {
          //
          // Fixing the database
          //

          // Update the database for the current user
          index = users.findIndex((user) => { if (user.user_id === current_user.user_id){return true}});
          users[index].minutes += current_user.minutes;
          db.set("users", users);
        }
        else {
          // Add the person to the database
          users.push(current_user);
          db.set("users", users);
        }
      });
		} 
    // End of command
	},
};