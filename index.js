const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "js!"

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const sender = msg.author.username;
    if (msg.content === prefix+'ping') {
        msg.reply('Pong!!!!');
    } else if (msg.content === prefix+'pong') {
        msg.reply('We playing ping pong now?');
    } else if (msg.content === prefix+'paimon') {
        msg.reply('Paimon is clearly emergency food');
    } else if (msg.content === prefix) {
        msg.reply('N-word you suppose to use me with a command!');
    } else if (msg.content === prefix+'asam') {
        msg.reply('Ew wtf smh');
    } else if (msg.content === prefix+sender) {
        msg.reply('Are ya winning, son?');
    } else if (msg.content === prefix+'thicc') {
        msg.reply('Send noods');
    } else if (msg.content === prefix+'hotel?') {
        msg.reply('Trivago');
    } else if (msg.content === 'fnc') {
        msg.reply('Try harder next time');
    } else if (msg.content === prefix+'braindead') {
        const num = Math.random() * 100;
        msg.reply('The chances of not having brain damage is ' + num + '%');
    } else if (msg.content === prefix+'fuck') {
        msg.reply('asam fuck');
    }
});

client.login('NzY1MjczNTIxMDM0MzYyOTIw.X4SagQ.DtCqKlgsjeYtwfIEU5PkhYWbCVk');