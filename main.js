
const Discord = require('discord.js');
const bot = new Discord.Client(); 

bot.once('ready', () => {
    console.log('This bot is online');

});

const PREFIX = '!';

var version = '1.0.1'

bot.on('message', msg =>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]){
        case 'hello':
            msg.channel.send('Hi!');
            break; 

        case 'Hello':
            msg.channel.send('Hi!');
            break; 

        case 'Hi':
            msg.channel.send('Hi!');
            break; 

        case 'hi':
            msg.channel.send('Hi!');
            break; 

        case 'image':
            msg.channel.send('https://steamuserimages-a.akamaihd.net/ugc/172664455474453131/E49885ED9F32484D10FAB7F3EDBC3BCBDEAA6A53/');
            break;

        case 'info':
            if(args[1] === 'version'){
                msg.channel.send('Version ' + version)
            }else{
                msg.channel.send('Invalid Cmd')
            }
            break;

        case 'clear':
            if(!args[1]) return msg.reply('Error, please specify number')
            msg.channel.bulkDelete(args[1]);
            break; 
        
        case 'twitch':
            msg.channel.send('Watch Kasure on Twitch at WIP');
            break;
    }
})


bot.login('');
