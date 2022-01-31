require('dotenv').config();

const { Client, Intents, Collection, Permissions } = require('discord.js');
global.client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
require('./deploy-commands')("yes");

require('./util/eventLoader')();

client.elevation = (interaction) => {
    let permlvl = 0;
    if (!interaction.member.guild) return permlvl = 3;
    if (interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) permlvl = 1;
    if (interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) permlvl = 2;
    if (interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) permlvl = 3;
    if (interaction.user.id === "441221465019514881") permlvl = 4;
    return permlvl;
};

require('./boot/db').then(() => client.login(process.env.TOKEN));
