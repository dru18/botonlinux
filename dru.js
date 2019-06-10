
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


function getUpdate(){
  M.get('timelines/home', {limit: '1'}, (error, data) => {
    console.log(JSON.stringify(data, null, 2));
    
    const Uacct = data[0].account.acct;
    const Ntype = data[0].type;
    const Sid = data[0].account.id;
    //const Svisibility = data[0].status.visibility;
    if(error){
      console.log(error);
    }
    else {
      
        if(Uacct === 'dru@botsin.space'){
          console.log(Ntype);
          console.log(Sid);
          console.log(Uacct);
          console.log(Svisibility);
          
          M.post('statuses', {
            status: `@${Uacct} hey, thanks to mention. :)`,
            //visibility: Svisibility,
            in_reply_to_id: Sid 
          },            
            (error, data) => {
            if(error){console.log(error)}
            else{console.log(data.content)}
          });
          
         // M.post(`accounts/${inid}/follow`);
        }
       // M.post('notifications/clear')
    
    }
  });
}
//  getUpdate();

  //setInterval(getUpdate, 1000);

function toot(txt){
  M.post('statuses', {status: txt, visibility: 'public', spoiler_text: 'Jai Shree Ram'}, (error, data) => {
    if(error){console.log(error)}
    else{console.log(data.content)}
  });
}

toot('The meaning of life is: "Remember what you have ACHIEVED."');
