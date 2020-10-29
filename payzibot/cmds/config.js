exports.run = (client, message, args) => {
    const { MessageEmbed } = require('discord.js'),
          Guild = require('../db/guild.js');
    Guild.findOne({ guildID: message.guild.id }, (err, data) => {
        if (err) return client.channels.cache.get("716291186645794878").send(`:x: | Произошла ошибка при поиске сервера в базе-данных`);
        if (!data) message.reply('Сервер отсутствует в базе данных!')
        else {
           /*let premium;
           if (data.premium === true) premium = `Активен`
           if (data.premium === false) premium = `Неактивен`*/
           message.channel.send(new MessageEmbed()
          .setTitle('Конфиг бота на сервере server'.replace('server', message.guild.name))
          .addField('Главное', 'Префикс - `pref`\nВалюта - val\nПремиум - premium'.replace('pref', data.prefix).replace('val', data.currency).replace('premium', data.premium ? "Активен" : "Неактивен")))
        }
    })
}
exports.help = {
    name: "config",
    aliases: ['conf'],
    info: "settings",
    usage: "config",
    description: "Посмотреть настройки бота для данного сервера"
}
