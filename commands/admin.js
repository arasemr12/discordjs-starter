const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

exports.run = async (interaction,perms) => {
    return interaction.reply("Hello admin :wave:")
}

exports.data = new SlashCommandBuilder()
    .setName('admin')
    .setDescription('admin.')

exports.conf = {
    perms: [Discord.Permissions.FLAGS.ADMINISTRATOR]
}
