const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send('FIRAT#9999')
};

exports.config = {
  name: "sahip",
  guildOnly: true,
  aliases: [],
};