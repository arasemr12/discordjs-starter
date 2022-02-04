module.exports = () => {
    console.log(`BOT: Aktif, Komutlar yüklendi!`);
    console.log(`BOT: ${client.user.tag} ismi ile giriş yapıldı!`);
    client.user.setPresence({ activities: [{ name: `/help + ${client.guilds.cache.size} sunucu + ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcı` }], status: 'idle' });
    setInterval(() => {
        client.user.setPresence({ activities: [{ name: `/help + ${client.guilds.cache.size} sunucu + ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcı` }], status: 'idle' });
    },15000)
}