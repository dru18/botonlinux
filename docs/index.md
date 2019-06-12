###### Blog 2:

> Verify your *SSH*

<hr>

###### Check your *SSH* connection

`ssh -T username@host`

###### Verify your *SSH* key on GitHub for Git after adding your public ssh key to your GitHub account.

`ssh -T git@github.com`

<hr>
#ssh #git #github #publickey #sshkey
<hr>

###### Blog 1:

> How to solved server SSH *hangup*

<hr>

[issue](https://github.com/dru18/druBot/blob/master/issue/screenshot/server%20ssh%20hangup%20issue.png)

![issue](https://github.com/dru18/druBot/blob/master/issue/screenshot/server%20ssh%20hangup%20issue.png)

It seems you are using firewall to deny incoming connections where you are blocking SSH too for incoming connections or possibly you have not install *openssh-server* So you need to filter it out to allow SSH for incoming connectins. **ufw** makes it easier to *add rule* in in your **iptalbes** to *allow ssh* for incoming connectins.

###### Install openssh-server

`sudo apt install openssh-server`

###### *Install* ufw

`sudo apt install ufw`

###### *Enable* ufw

`sudo ufw enable`

###### Check ufw *status*

`sudo ufw status verbose`

###### Add rule to *allow SSH* for incomming connections

`sudo ufw allow ssh`

###### You have finished. Now try login to your server SSH.

`ssh username@server`

[solved](https://github.com/dru18/druBot/blob/master/issue/screenshot/server%20ssh%20hangup%20solved.png)

![solved](https://github.com/dru18/druBot/blob/master/issue/screenshot/server%20ssh%20hangup%20solved.png)

###### Done.

<hr>
#server #ssh #ufw #firewall #openssh-server
<hr>
