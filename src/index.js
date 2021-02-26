const Discord = require('discord.js')

const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })

const prefix = 'a!'

const fs = require('fs')
const { type } = require('os')
const { types } = require('util')

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
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

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()

  if (command === 'ping') {
    client.commands.get('ping').execute(message, args)
  }
})

client.login('YOUR TOKEN')
