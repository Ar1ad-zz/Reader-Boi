const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const dotenv = require('dotenv');
const aws = require('aws-sdk');

let s3 = new aws.S3({
    Token: process.env.S3_TOKEN
});
dotenv.config()

client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.TOKEN || Token)
client.on('message', message => {
    if (message.content === '${prefix}ping')  message.channel.send('pong.');
});