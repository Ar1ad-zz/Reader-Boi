const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const dotenv = require('dotenv');
dotenv.config()

client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.TOKEN)
client.on('message', message => {
    if (message.content === '${prefix}ping')  message.channel.send('pong.');
});