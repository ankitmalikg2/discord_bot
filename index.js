const Discord = require("discord.js")
const config = require("./config.json")
const news = require("./news")
const token = config.bot_token;
const client = new Discord.Client()
client.login(token)


client.on("message", (msg) => {
    if (msg.content.toLowerCase() == "#hi") {
        msg.channel.send(`Hows you ${msg.author}`)
    }

    if (msg.content.toLowerCase() == "#ankit") {
        msg.channel.send("This is Malik bot")
    }

    if (msg.content.toLowerCase() == "#news") {
        msg.channel.send("fetching the news ....")
        news.getNews.then(response => {
            let newsList = response.articles.map(function (source) {
                return {
                    name: source.title,
                    value: source.url
                }
            })
            
            const embedMsg = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('News Headlines')
                .setURL('https://github.com/ankitmalikg2/discord_bot')
                .setDescription('These are top technology news headlines at this time')
                .addFields(newsList)
                .setTimestamp()
                .setFooter('Ankit Malik');

            msg.channel.send(embedMsg);
        })

    }

})

client.on("ready", () => {
    console.log("yeah I am ready");
})

