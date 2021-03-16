const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'a!';


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.once('ready', () => {
  client.user.setActivity("Gawr Gura", {
      type: "WATCHING",
  })
});





['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


//});





 client.login('TOKEN');
