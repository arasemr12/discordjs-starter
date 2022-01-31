module.exports = (interaction) => {
    //console.log(interaction);
    if (!interaction.isCommand()) return;
    let perms = client.elevation(interaction);
    let cmd;
    if (client.commands.has(interaction.commandName)) {
        cmd = client.commands.get(interaction.commandName);
    }
    if(cmd){
        if (perms < cmd.conf.permLevel) return message.reply('Yetersiz yetkiler!');
        try {
            cmd.run(interaction,perms);
        } catch (err) {
            interaction.reply({content:'Error giving error reported!',ephemeral:true});
            console.log(err);
        }
    }
}