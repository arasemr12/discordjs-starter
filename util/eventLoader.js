const reqEvent = (event) => require(`../events/${event}`);
module.exports = () => {
  //client.on('eventismi', reqEvent('dosyaismi'));
  client.once('ready', reqEvent('ready'));
  client.on('interactionCreate', reqEvent('interactionCreate'));
};
