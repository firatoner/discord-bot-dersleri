const Discord = require("discord.js")     
const client = new Discord.Client();       
const ayarlar = require("./ayarlar.js")    
const fs = require("fs");                
require('./util/Loader.js')(client);     

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} Komut Yüklenecek.`);
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} Komutu Yüklendi.`);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
});

client.on('ready', ()=>{
  client.channels.cache.get(ayarlar.seskanali).join()
  })


//////Otomatik Cevaplar//////

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
      msg.channel.send('Aleyküm Selam Hoşgeldin ^_^');
}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
      msg.channel.send('Aleyküm Selam Hoşgeldin ^_^');
}
});


client.login(ayarlar.token)
