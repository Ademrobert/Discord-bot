const Discord = require('discord.js');
const { RichEmbed, Attachment } = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`We got Fire In The server!`);
});

// Welcome to server
client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.find((ch) => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

// Moderation
client.on('message', (message) => {
  if (!message.guild) return;



  if (message.content.startsWith('!kick')) {
    if (message.member.roles.some(role => role.name === 'UR| Sir Mod')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch((err) => {
              message.reply('I was unable to kick the member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to kick!");
      }

    }
    else { message.reply('I was unable to kick the member'); };
  }
});

client.on('message', (message) => {
  if (!message.guild) return;

  if (message.content.startsWith('!ban')) {
    if (message.member.roles.some(role => role.name === 'UR| Managment')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: 'They were bad!'
            })
            .then(() => {
              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch((err) => {
              message.reply('I was unable to ban the member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to ban!");
      }
    }
    else { message.reply('I was unable to Ban the member'); };
  }
});


// Fortnite tryout command

// Need allot of fixing this command doesnt work !!

client.on('message', (message) => {
  if (!message.guild) return;

  let NeedtryoutfortniteRole = message.guild.roles.find('name', "Need Tryout Fortnite");

  if (message.content.startsWith('!tryoutfortnite')) {
    if (message.member.roles.some(role => role.name === 'Community')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .addRole(NeedTryoutFortniteRole.id)
            .then(() => {
              message.reply(`Successfully added "Muted" role to ${user.tag}`);
            })
            .catch((err) => {
              message.reply('I was unable to mute the member');
              console.error(err);
            });
        } else { message.reply("That user isn't in this guild!"); }
      }
    } else { message.reply("Adam is still working on this command so this bot doesnt work at the moment!!"); }
  }
});



// Mute Command code

client.on('message', (message) => {
  if (!message.guild) return;

  let muteRole = message.guild.roles.find('name', "Muted");

  if (message.content.startsWith('!mute')) {
    if (message.member.roles.some(role => role.name === 'UR| Chat Mod')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .addRole(muteRole.id)
            .then(() => {
              message.reply(`Successfully added "Muted" role to ${user.tag}`);
            })
            .catch((err) => {
              message.reply('I was unable to mute the member');
              console.error(err);
            });
        } else { message.reply("That user isn't in this guild!"); }
      }
    } else { message.reply("You Don't Have Permissions To Mute!!"); }
  }
});




client.on('message', (message) => {
  if (!message.guild) return;

  let muteRole = message.guild.roles.find('name', "Muted");

  if (message.content.startsWith('!unmute')) {
    if (message.member.roles.some(role => role.name === 'UR| Chat Mod')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .removeRole(muteRole.id)
            .then(() => {
              message.reply(`Successfully removed "Muted" role from ${user.tag}`);
            })
            .catch((err) => {
              message.reply('I was unable to Unmute the member');
              console.error(err);
            });
        } else { message.reply("That user isn't in this guild!"); }
      }
    } else { message.reply("You Don't Have Permissions To Unmute!!"); }
  }
});




// Bot Info
client.on('message', (message) => {
  if (message.content === '!fire author') {
    const embed = new RichEmbed()
      .setTitle('My awesome master is Adem')
      .setColor(15844367)
      .setDescription(
        "Adem made this Bot here is my Tag = Adem #4636"
      );
    message.channel.send(embed);
  }
});
// custom commands
client.on('message', (message) => {
  if (message.content === '!code') {
    const embed = new RichEmbed().setTitle('Use Code').setColor(15844367).setDescription('Use Our Creator Code is: "UnstableRengades" in the Fortnite item shop :)');
    message.channel.send(embed);
  }
});




client.on('message', (message) => {
  if (message.content === '!fire info') {
    const embed = new RichEmbed()
      .setTitle('About Firemod')
      .setColor(15844367)
      .setDescription('Firemod version 1.0.0  |  Firemod Website Portfolio: https://vibrant-noether-5215c2.netlify.com');
    message.channel.send(embed);
  }
});


client.on('message', (message) => {
  if (message.content === '!Need-tryout') {
    const embed = new RichEmbed()
      .setTitle('About-tyrout')
      .setColor(15844367)
      .setDescription('You have been added to the need tryout list Tryout Manager will DM you');
    message.channel.send(embed);
  }
});

client.on('message', (message) => {
  if (message.content === '!boost') {
    const embed = new RichEmbed()
      .setTitle('Nitro Boosts')
      .setColor(15844367)
      .setDescription(':dash:Remember That If You Have Discord Nitro To Boost Our Server:dash:   :fire:If You Boost Our Server It Will Give A Better Experience:fire:');
    message.channel.send(embed);
  }
});

client.on('message', (message) => {
  if (message.content === '!ip') {
    const embed = new RichEmbed()
      .setTitle('Ip adress for Unstable Minecraft server')
      .setColor(15844367)
      .setDescription('UnstableRengade.serv.gs');
    message.channel.send(embed);
  }
});


client.on('message', (message) => {
  if (message.content === '?online') {
    const embed = new RichEmbed()
      .setTitle('Bot Back Online')
      .setColor(15844367)
      .setDescription('I am back online :)');
    message.channel.send(embed);
  }
});

client.on('message', (message) => {
  if (message.content === '!isademlying') {
    const embed = new RichEmbed()
      .setTitle('adem')
      .setColor(15844367)
      .setDescription('adem is not lyning anyone who says that he lying then the guy who says it is gay and should get banned but if its spike then its ok :)');
    message.channel.send(embed);
  }
});






// Fun
client.on('message', (message) => {
  if (message.content === '!rip') {
    const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
    message.channel.send(attachment);
  }
});

client.on('message', (message) => {
  if (message.content === '!broken') {
    const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
    message.channel.send(attachment);
  }
});


client.on('message', (message) => {
  if (message.content === '!ew') {
    const attachment = new Attachment('https://media1.tenor.com/images/3b9036d3b602e6ab957d112769f8f417/tenor.gif');
    message.channel.send(attachment);
  }
});




client.login('NjgwMTA0NzEyNzI0Njc2NjM1.Xk7Djg.MrsdaerfS_M7D7pzPGPANM1PGts');
