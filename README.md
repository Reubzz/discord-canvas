# Reubz - discord-canvas
- Welcome Channel Images for Welcome Module in Reubz Bot

## Installation

```bash
$ npm install https://github.com/Reubzz/discord-canvas
```


## Example GoodBye

```js
const Canvas = require("discord-canvas"),
  Discord = require("discord.js");

const image = await new Canvas.Goodbye()
  .setUsername("xixi52")
  .setDiscriminator("0001")
  .setMemberCount("140")
  .setGuildName("Server DEV")
  .setAvatar("https://www.site.com/avatar.jpg")
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://site.com/background.jpg")
  .toAttachment();

const attachment = new Discord.Attachment(image.toBuffer(), "goodbye-image.png");

message.channel.send(attachment);
```

## Example RankCard

```js
const Canvas = require("discord-canvas"),
Discord = require("discord.js");

let image = await new canvas.RankCard()
.setAddon("xp", false)
.setAddon("rank", false)
.setAvatar(message.author.avatarURL)
.setLevel(7)
.setReputation(450)
.setRankName("professional")
.setUsername("xixi52")
.setBadge(1, "gold")
.setBadge(3, "diamond")
.setBadge(5, "silver")
.setBadge(6, "bronze")
.setBackground("https://www.site.com/background.jpg")
.toAttachment();

let attachment = new MessageAttachment(image.toBuffer(), "rank-card.png");

message.channel.send(attachment)
```


## Credits

Made by [xixi52](https://github.com/xixi52), Forked and Edited by [Reubz](https://github.com/reubzz) for personal use.
