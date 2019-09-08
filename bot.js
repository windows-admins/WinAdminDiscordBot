const Discord = require('discord.js');
const express = require('express')
const events = require('./src/events')
const client = new Discord.Client();

 

const PORT = process.env.PORT || 80; // Let Heroku set the port.

// THIS  MUST  BE  THIS  WAY
client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    events.handleEvent(message)

});

client.login(process.env.DISCORD_TOKEN);//BOT_TOKEN is the Client Secret 

const bootstrap = ( options = {}) => {


    // Allow alternative implementations of both Express and Slack to be passed in.
    const server = options.express || express();
    return server.listen( PORT, () => {
        console.log( 'Listening on port ' + PORT + '.' );
      });
    
    }; // Bootstrap.

    // If module was called directly, bootstrap now.
if ( require.main === module ) {
    bootstrap();
  }
  
  module.exports = bootstrap;