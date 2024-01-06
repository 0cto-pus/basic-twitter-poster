const { twClient } = require("./client.js");
const { getQuote } = require("./quote.js");
const CronJob = require("cron").CronJob;



const tweet = async () => {
    try {
        var quote = await getQuote();
        await twClient.v2.tweet(`"${quote.quote}" \n\n —  ${quote.author}`);
    } catch (e) {
        console.log(e)
    }
}


const cronTweet = new CronJob("*/5 * * * *", async () => {
    tweet();
});

cronTweet.start();  