// Required libs/imports
// const Database = require("@replit/database");
// // const Discord = require("discord.js");
// // Create a link to Repl.it's database
// const db = new Database()

module.exports = class Timer {
  constructor(waitTime, userMessage, statsEmbed, Discord){
    this.time = waitTime; // Miliseconds
    this.statsEmbed = statsEmbed;
    this.userMessage = userMessage; // The most rececnt message sent by a user
    this.Discord = Discord;
  }
  /*
   * Create methods that replicate a timer
   */

  /*
   *
   * Methods that provide support to query into
   * the Sequelize DB
   * 
   */

  // Starts a Timer to run for waitTime
  async start (){

  }

  

  


  // start(){
  //   async function embedFieldAdd(EmbMsg){


  //     /*
  //     * Queries the database for the specific users total time studied
  //     * and displays it on the embed (adds it as a field)
  //     */

  //     // Uncomment Later
  //     /*
  //     const username = EmbMsg.author.name;
  //     const users = await db.get("users");
  //     console.log(users);
  //     db.get("users").then(users => {
  //       users.map((user) => {
  //         if (user.user_id.includes(username)){
  //           EmbMsg.addFields({name: 'You have studied in total for', value: `${user.minutes} seconds`, inline: true});
  //         }
  //       })
  //     });
  //     */


  //     // data.map(function(val) {
  //     //   if (val.user_id.includes(username)){
  //     //     EmbMsg.addFields({name: 'You have studied in total for', value: `${val.minutes} seconds`, inline: true});
  //     //   }
  //     // })
  //   }

  //   // console.log(`Message: ${this.message}`);
  //   // console.log('Embed: ', this.embed);
  //   // console.log('Discord: ', this.Discord);

  //   // Uncomment later

  //   // // Function to update the DB
  //   // function updateDB(userid, time){
  //   //   // Create a user to insert into the database
  //   //   const current_user = {"user_id": userid, "minutes": time};

  //   //   // Check if the database is empty
  //   //   db.get("users").then(users => {
  //   //     if (!users || users.length < 1){
  //   //       db.set("users", [current_user]);
  //   //     }
  //   //   });

  //   //   // Update the database
  //   //   db.get("users").then(users => {
  //   //     // Check if the current user_id already exists in the DB
  //   //     if (users.some(user => user.user_id == current_user.user_id)) {
  //   //       // Update the database for the current user
  //   //       let index = users.findIndex((user) => { if (user.user_id === current_user.user_id){return true}});
  //   //       users[index].minutes += current_user.minutes / 1000;
  //   //       console.log(users);
  //   //       db.set("users", users);
  //   //     }
  //   //     else {
  //   //       // Add the person to the database
  //   //       users.push(current_user);
  //   //       db.set("users", users);
  //   //     }
  //   //   });
  //   // }


  //   // Uncomment later


  //   // // Start timer
  //   // this.message.channel.send(`Starting ${this.time / 1000}s Pomodoro Timer...`);
  //   // updateDB(this.userid, this.time);

  //   // // Add a specific field as we query into the database
  //   // embedFieldAdd(this.embed);
    
  //   // // End timer message
  //   // setTimeout(() => {
  //   //   // Send embed
  //   //   this.message.channel.send(this.embed);
  //   //   return this.message.channel.send(`Timer has been finished ${this.message.author}. Good work!`)
  //   // },this.time);
  
  //   // // // Rest Timer start    
  //   // switch(this.time) {
  //   // case 3000:
  //   // setTimeout(() => {
  //   //     this.message.channel.send(`Rest has started, I'll ping you in 3 seconds!`);
  //   //     setTimeout(() => {
  //   //         this.message.channel.send(`${this.message.author} Rest is over, send another command to continue the train!`);
  //   //     }, this.time);
  //   // }, this.time);
  //   // break;
  //   // case 30000:
  //   //   setTimeout(() => {
  //   //     this.message.channel.send(`Rest has started, I'll ping you in 10 mins!`);
  //   //     setTimeout(() => {
  //   //         this.message.channel.send(`${this.message.author} Rest is over, send another command to continue the train!`);
  //   //     }, 600000);
  //   // }, this.time);
  //   // break;
  //   // }

  // }
}

