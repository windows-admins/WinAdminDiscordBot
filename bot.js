const Discord = require('discord.js');
const express = require('express')
const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.DISCORD_TOKEN);//BOT_TOKEN is the Client Secret 


express.listen( process.env.PORT , () => {
    console.log( 'Listening on port ' + PORT + '.' );
  });