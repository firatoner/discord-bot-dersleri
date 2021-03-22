const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send('0 ping alıyorum')
};

exports.config = {
  name: "ping",
  guildOnly: true,
  aliases: [],
};