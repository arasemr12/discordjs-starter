require('dotenv').config();

const { Client, Intents, Collection, Permissions } = require('discord.js');
global.client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
require('./deploy-commands')("no");

require('./util/eventLoader')();

client.elevation = (interaction,perms) => {
    if (!interaction.member.guild) return true;
    if (interaction.user.id === "441221465019514881") return true;
    if (interaction.member.permissions.has(perms)) return true;
    return false;
};

require('./boot/db').then(() => client.login(process.env.TOKEN));
