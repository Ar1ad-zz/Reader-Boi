const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const dotenv = require('dotenv');

const Pg = require('pg');

const pgclient = new Pg.Client({
    connectionString: process.env.DATABES_URL,
    ssl:{
        rejectUnauthorized: false
    }
});

pgclient.connect();

dotenv.config()

client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.TOKEN)
client.on('message', message => {
    if (message.content === '${prefix}ping')  message.channel.send('pong.');
});