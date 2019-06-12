# How to solved server SSH *hangup* 

###### Server SSH *hangup*
https://github.com/dru18/druBot/blob/master/issue/screenshot/server%20ssh%20hangup%20issue.png

It seems you are using firewall to deny incoming connections where you are blocking SSH too for incoming connections. So you need to filter it out to allow SSH for incoming connectins. **ufw** makes it easier to *add rule* in in your **iptalbes** to *allow ssh* for incoming connectins.

###### *Install* ufw

`sudo apt install ufw`

###### *Enable* ufw

`sudo ufw enable`

###### Check ufw *status*

`sudo ufw status verbose`

###### Add rule to *allow SSH* for incomming connections

`sudo ufw allow ssh`

###### Server SSH hangup *solved*
https://github.com/dru18/druBot/blob/master/issue/screenshot/server%20ssh%20hangup%20solved.png

# Done.

#server #ssh #ufw #firewall #i
