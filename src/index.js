const Discord = require('discord.js')

const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })

const prefix = 'a!'

const fs = require('fs')

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('src/commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command)
}

client.once('ready', () => {
  console.log('Bot is online!')
  client.user.setActivity('Gawr Gura', {
    type: 'WATCHING'
  })
})

// updated ping
client.on('message', (message) => {
  const commands = message.content.split(' ')
  if (commands[0] === '!ping') {
    message.channel.send('pong')
  }
})

client.login('ODE0NzAwOTQ0NzEyMjY5ODU0.YDhrYQ.WAuCuoNOD7LaOb6Yca6RGjPo9Uw')
