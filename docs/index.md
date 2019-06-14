# Coding easier way using *Vim*.
Blog 4:
Written by dru18

<hr>
Vim makes it easier to making a website. It uses *markdowns* to do this task that makes it more easy to make a website. But when you use it as a web page for your web site it automatically get converted to *HTML* tags. You can save a lot of energy to do it. It uses a lot of *shortcuts* for it so you can edit your files *faster*. You don't need to even touch your *mouse* till the end of the editing of your file. You can just write your *code*, use *markdowns* for it, use *vim editing shortcuts* and your done. Just look and compare the *source code* of this web page with the [markdowns](https://raw.githubusercontent.com/dru18/druBot/master/docs/index.md) of this web page. For source code Right Click on this page and Choose ***View Source Code***.

**Display *numbers*.**

`:set number`


**Display *Relative Numbers*.**

`:set relativenumber`


**Display the *matching bracket*.**

`:set showmatch`


**Ignore the *case* in find mode.**

`:set ignorecase`


Just *run these commands* in Vim while editing as temporary so will not see them enabled next time you run Vim or add theme to your */etc/vim/vimrc* file as permanent so will get all those enabled each time you launch Vim. Some of these properties are already there in your *vimrc* file so you just need to *uncomment* them and add manually only those which you don't see there.

#vim #markdown #web #webPage #webSite #coding #html
<hr>

# Install Google Chrome on a Linux Distro using a *.deb* archive.
Blog 3:
Written by dru18
<hr>
- Download Google Chrome *.deb* archive from google.com.
   - Search *download chrome* on your search engine.
   - Go to *ownload link*for Google Chrome on google.com.
   - Select *.deb* option and download it.
- Install Google Chrome using *.deb* archive.

**Open your terminal and go to the location where you saved your Google Chrome *.deb* archive.**

`cd *location*`

**Search for *.deb* archive of Google Chrome.**

`ls | grep \*chrome\*.deb`

**Install *.deb* archive using *dpkg*.**

`sudo dpkg --install $(ls | \*.chrome*.deb)`

**Enter your computer login password and hit *Enter*.**

**Done.**

#debArchive #dpkg #debianPackage #Google #googleChrome #install #linux
<hr>

# Verify your *SSH*
Blog 2:
Written by dru18
<hr>
**Check your *SSH* connection**

`ssh -T username@host`

**Verify your *SSH* key on GitHub for Git after adding your public ssh key to your GitHub account.**

`ssh -T git@github.com`

#ssh #git #github #publickey #sshkey
<hr>

# How to solved server SSH *hangup*
Blog 1:
Written by dru18
<hr>
[issue](https://github.com/dru18/druBot/blob/master/issue/screenshot/server%20ssh%20hangup%20issue.png)

![issue](https://github.com/dru18/druBot/blob/master/issue/screenshot/server%20ssh%20hangup%20issue.png)

It seems you are using firewall to deny incoming connections where you are blocking SSH too for incoming connections or possibly you have not install *openssh-server* So you need to filter it out to allow SSH for incoming connectins. **ufw** makes it easier to *add rule* in in your **iptalbes** to *allow ssh* for incoming connectins.

**Install openssh-server**

`sudo apt install openssh-server`

***Install* ufw**

`sudo apt install ufw`

***Enable* ufw**

`sudo ufw enable`

**Check ufw *status***

`sudo ufw status verbose`

**Add rule to *allow SSH* for incomming connections**

`sudo ufw allow ssh`

**You have finished. Now try login to your server SSH.**

`ssh username@server`

[solved](https://github.com/dru18/druBot/blob/master/issue/screenshot/server%20ssh%20hangup%20solved.png)

![solved](https://github.com/dru18/druBot/blob/master/issue/screenshot/server%20ssh%20hangup%20solved.png)

**Done.**

#server #ssh #ufw #firewall #openssh-server
<hr>
