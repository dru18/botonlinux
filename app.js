
const Mastodon = require('mastodon-api');
const FS = require('fs');
const ENV = require('dotenv');

ENV.config();

console.log("Bot is running...");

const M = new Mastodon({
    access_token: process.env.ACCESS_TOKEN,
    timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
    api_url: 'https://botsin.space/api/v1/', // optional, defaults to https://mastodon.social/api/v1/
  });

  function topThreeNotice(){
    M.get('notifications', {limit: '3'}, (error, data) => {
        if(error){console.log(error);}
        else{
          console.log('\n*****notifications*****\n');
	  console.log(`${data[0].account.username} (${data[0].account.acct}) - ${data[0].type}`);
          console.log(`${data[1].account.username} (${data[1].account.acct}) - ${data[1].type}`);
          console.log(`${data[2].account.username} (${data[2].account.acct}) - ${data[2].type}`);
//	  console.log(data);
      }
    });
  }


function followBack(){
  M.get('timelines/home', {limit: '1'}, (error, data) => {
      console.log(JSON.stringify(data, null, 2));      
      const Uacct = data[0].account.acct;
      const Ntype = data[0].type;
      const Sid = data[0].account.id;
      //const Svisibility = data[0].status.visibility;
      if(error){console.log(error);}
      else{
        if(Uacct === 'dru@botsin.space'){
          console.log(Ntype);
          console.log(Sid);
          console.log(Uacct);
          console.log(Svisibility);            
          M.post('statuses',{
            status: `@${Uacct} hey, thanks to mention. :)`,
            //visibility: Svisibility,
            in_reply_to_id: Sid 
          },            
            (error, data) => {
              if(error){console.log(error)}
              else{console.log(data.content)}
            }
          );            
        // M.post(`accounts/${inid}/follow`);
        }
        // M.post('notifications/clear');      
      }
    }
  );
}

function toot(txt){
  M.post('statuses', {status: txt, visibility: 'public', spoiler_text: 'Jai Shree Ram'}, (error, data) => {
    if(error){console.log(error)}
    else{console.log(data.content)}
  });
}


function favouriteReply(){
  M.get('notifications', {}, (error, data) => {
    const stsType = data[0].type;
    const usrName = data[0].account.username;
    const usrAccount = data[0].account.acct;
    const stsContent = data[0].status.content;

    if(error){console.log(error);}
    
    else{
      M.post(`statuses/${data[0].status.id}/favourite`); 
      console.log("Favourited successfully.");
   }
  });
}

function boostReply(){
  M.get('notifications', {}, (error, data) => {
    const stsType = data[0].type;
    const usrName = data[0].account.username;
    const usrAccount = data[0].account.acct;
    const stsContent = data[0].status.content;

    if(error){console.log(error);}
    
    else{
      M.post(`statuses/${data[0].status.id}/reblog`);
      console.log("Reblogged successfully.");
    }
  });
}

function jsrReply(){
  M.get('notifications', {}, (error, data) => {
    const stsType = data[0].type;
    const usrName = data[0].account.username;
    const usrAccount = data[0].account.acct;
    const stsContent = data[0].status.content;

    if(error){console.log(error);}
    
    else{
      M.post('statuses', {status: `@${data[0].account.acct} Jai Shree Ram`, visibility: 'direct'}, (error, resp) => {
      console.log(`Replied ${resp.content} to ${resp.account.acct}`);
      console.log("Replied successfully.");
      });
    }
  });
}

function nClear(){
  M.post('notifications/clear', {}, (error, data) => {
    if(error){console.log(error);}
    else{
      console.log('succeed.');
      notify();
    }
  });
}

//topThreeNotice();
//setInterval(notify, 60*1000);

//favouriteReply();
//setInterval(favouriteReply, 60*1000);

//boostReply();
//setInterval(boostReply, 60*1000);

//jsrReply();
//setInterval(jsrReply, 60*1000);

//toot('The meaning of life is: "First of all proove for yourself then for others."');
//setInterval(notify, 60*1000);

//nClear();
//setInterval(notify, 60*1000);

