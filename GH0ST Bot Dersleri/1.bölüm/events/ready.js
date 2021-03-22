const Discord = require("discord.js");
const ayarlar = require('../ayarlar.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "PLAYING", name: `GH0ST Bot dersleri`}, status: 'online' })
};


// Status //

// online - Çevrimiçi
// idle - Boşta
// dnd - Rahatsız Etmeyin

// Type //

// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR