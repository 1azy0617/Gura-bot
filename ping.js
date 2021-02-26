module.exports = {
    name: 'ping',
    description: "Ping commands!",
    execute(message, args){
        message.channel.send('pong!');
    }
}