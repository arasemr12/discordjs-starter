require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (msg) => {
	const commands = [];
	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

	if(msg == "no"){
		for (const file of commandFiles) {
			let command = require(`./commands/${file}`);
			let c = command.data.toJSON()
			client.commands.set(c.name, command);
		}
		return;
	}

	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		let c = command.data.toJSON()
		client.commands.set(c.name, command);
		commands.push(c);
	}

	const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

	(async () => {
		try {
			console.log('Started refreshing application (/) commands.');

			await rest.put(
				Routes.applicationCommands(process.env.CLIENT_ID),
				{ body: commands },
			);

			console.log('Successfully reloaded application (/) commands.');
		} catch (error) {
			console.error(error);
		}
	})();

}