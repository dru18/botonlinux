
const Mastodon = require('mastodon-api');
const FS = require('fs');
const ENV = require('dotenv');

ENV.config();

console.log("Bot is running...");

const M = new Mastodon({
	access_token: process.env.ACCESS_TOKEN,
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  api_url: 'https://botsin.space/api/v1/', // optional, defaults to https://mastodon.social/api/v1/
})

function doStram(){
  
const listener = M.stream('streaming/user')

listener.on('error', err => console.log('err'))

listener.on('public', msg => console.log('msg'))
}

doStram();

