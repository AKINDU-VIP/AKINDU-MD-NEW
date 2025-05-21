const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
*┃ 👋 ʜᴇʟʟᴏ ${pushname}*
*╏▸* *ʀᴜɴᴛɪᴍᴇ* : *${runtime(process.uptime())}*
*╏▸* *ᴍᴏᴅᴇ* : *${config.MODE}*
*╏▸* *ᴘʀᴇғɪx* : *${config.PREFIX}*
*╏▸* *ʀᴀᴍ ᴜsᴇ* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*╏▸* *ᴄʀᴇᴀᴛᴏʀ* : *ᴀᴋɪɴᴅᴜ ᴍᴅ*


*╭━━┉┉━━┉┉━━┉*
*┋1 • ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
*┋2 • ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
*┋3 • ᴀɪ ᴍᴇɴᴜ*
*┋4 • sᴇᴀʀᴄʜ ᴍᴇɴᴜ*
*┋5 • ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*
*┋6 • ᴍᴀɪɴ ᴍᴇɴᴜ*
*┋7 • ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
*┋8 • ғᴜɴ ᴍᴇɴᴜ*
*┋9 • ᴀɴɪᴍᴇ ᴍᴇɴᴜ*
*╿10 • ᴏᴛʜᴇʀ ᴍᴇɴᴜ*
*╰━━┉┉┉━━┉┉━━┉*⁠⁠

*╰┈➤ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴇʟᴇᴄᴛ*

> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`;

        const vv = await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`👤 𝙾𝚆𝙽𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 👤

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *.ᴏᴡɴᴇʀ*
┋ ◉ *.ʀᴇᴘᴏ*
┋ ◉ *.ꜱʏꜱᴛᴇᴍ*
┋ ◉ *.ꜱᴛᴀᴛᴜꜱ*
┋ ◉ *.ʙʟᴏᴄᴋ*
┋ ◉ *.ᴜɴʙʟᴏᴄᴋ*
┋ ◉ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋ ◉ *.sᴇᴛᴘᴘ*
┋ ◉ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋ ◉ *.ᴊɪᴅ*
┋ ◉ *.ɢᴊɪᴅ*
┋ ◉ *.ʀᴇꜱᴛᴀʀᴛ*
┋ ◉ *.ᴜᴘᴅᴀᴛᴇ*
┋ ◉ *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
┋ ◉ *.sʜᴜᴛᴅᴏᴡɴ*
┋ ◉ *.ᴀʟɪᴠᴇ*
┋ ◉ *.ᴀʙᴏᴜᴛ*
┋ ◉ *.ᴅᴇʟᴇᴛᴇ*
╰━━━━∙⋆⋅⋆∙━ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴡɴᴇʀ: 18*

> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`);
                        break;
                    case '2':               
                        reply(`🔄 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 🔄

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴄᴏɴᴠᴇʀᴛ* 
┋ ◉ *s* 
┋ ◉ sᴛɪᴄᴋᴇʀ
╰━━━━∙⋆⋅⋆∙━ •─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 2*

> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`);
                        break;
                    case '3':               
                        reply(`🤖 𝙰𝙸 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 🤖

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴀɪ* 
┋ ◉ *ɢᴏᴏɢʟᴇ*
┋ ◉ *ɢᴇᴍɪɴ*
┋ ◉ *ʟᴏʀᴅx*
╰━━━━∙⋆⋅⋆∙━ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɪ: 4*

> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`);
                        break;
                    case '4':               
                        reply(`🔍 𝚂𝙴𝙰𝚁𝙲𝙷 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 🔎

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴘʟᴀʏ* 
┋ ◉ *sᴏɴɢ*
┋ ◉ *ᴠɪᴅᴇᴏ* 
┋ ◉ *.ʏᴛ  <ᴛᴇxᴛ>*
┋ ◉ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
┋ ◉ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┋ ◉ *.ɪᴍɢ <ᴛᴇxᴛ>*
┋ ◉ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
╰━━━━∙⋆⋅⋆∙━ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴇᴀʀᴄʜ: 8*

> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`);
                        break;
                    case '5':               
                        reply(`📥 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 📥

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ɢɪᴛᴄʟᴏɴᴇ*
┋ ◉ *ᴀᴘᴋ* 
┋ ◉ *ᴛᴡɪᴛᴛᴇʀ* 
┋ ◉ *ɢᴅʀɪᴠᴇ* 
┋ ◉ *ᴍᴇᴅɪᴀғɪʀᴇ* 
┋ ◉ *ғʙ*
┋ ◉ *ɪɢ* 
┋ ◉ *ᴍᴏᴠɪᴇ*
┋ ◉ *soɴɢ* 
┋ ◉ *ᴠɪᴅᴇᴏ*
┋ ◉ *ᴠɪᴅᴇᴏ2*
┋ ◉ *ᴠɪᴅᴇᴏ3*
┋ ◉ *ᴠɪᴅᴇᴏ4*
┋ ◉ *ᴘʟᴀʏ*
┋ ◉ *ᴘʟᴀʏ2*
┋ ◉ *ᴘʟᴀʏ3*
┋ ◉ *ᴘʟᴀʏ4*
┋ ◉ *ʏᴛ*
┋ ◉ *ᴛɪᴋᴛᴏᴋ/ᴛᴛ* 
┋ ◉ *ɪᴍɢ* 
┋ ◉ *ʏᴛᴀ*
╰━━━━∙⋆⋅⋆∙┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴅᴏᴡɴʟᴏᴀᴅ: 21*

> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`);
                        break;
                    case '6':               
                        reply(`📜 𝙼𝙰𝙸𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 📜

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴀʟɪᴠᴇ* 
┋ ◉ *ᴀʙᴏᴜᴛ* 
┋ ◉ *ᴍᴇɴᴜ* 
┋ ◉ *ᴀʟʟᴍᴇɴᴜ*  
┋ ◉ *ꜱʏꜱᴛᴇᴍ* 
┋ ◉ *ᴘɪɴɢ* 
╰━━━━∙⋆⋅⋆∙━  • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴍᴀɪɴ: 6*

> *AKINDU MD*`);
                        break;
                    case '7':               
                        reply(`👥 𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 👥

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅
┋◉ ᴘʀᴏᴍᴏᴛᴇ
┋◉ ᴅᴇᴍᴏᴛᴇ
┋◉ ᴋɪᴄᴋ
┋◉ ᴀᴅᴅ
┋◉ ɢᴇᴛᴘɪᴄ 
┋◉ sᴇᴛᴡᴇʟᴄᴏᴍᴇ
┋◉ sᴇᴛɢᴏᴏᴅʙʏᴇ
┋◉ ᴀᴅᴍɪɴs
┋◉ ɢɴᴀᴍᴇ 
┋◉ ᴛᴀɢᴀʟʟ 
┋◉ ᴛᴀɢᴀᴅᴍɪɴ 
┋◉ ᴏᴘᴇɴᴛɪᴍʀ/ᴄʟᴏsᴇᴛɪᴍᴇ 
┋◉ ɢɪɴғᴏ
┋◉ ɢʟɪɴᴋ 
┋◉ ɢᴅᴇsᴄ
┋◉ ᴍᴜᴛᴇ
┋◉ ᴜɴᴍᴜᴛᴇ
┋◉ ʟᴏᴄᴋ
┋◉ ᴜɴʟᴏᴄᴋ
┋◉ ᴅᴇʟᴇᴛᴇ
┋◉ ᴋɪᴄᴋᴀʟʟ
╰━━━━∙⋆⋅⋆∙━ ─ • ─⊷
⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ɢʀᴏᴜᴘ: 21*

> *AKINDU MD*`);
                       break;
                    case '8':               
                        reply(`🤩 𝙵𝚄𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 🤩

╭┈┉┉┉┉┉┉┈┈┈┈┈┈┈
┋◉ ᴅᴏɢ
┋◉ ғᴀᴄᴛ 
┋◉ ʜᴀᴄᴋ
┋◉ ϙᴜᴏᴛᴇ
┋◉ ʀᴠɪᴅᴇᴏ
╰━━━━∙⋆⋅⋆∙━ ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ғᴜɴ: 6*

> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`);
                       break;
                    case '9':               
                        reply(`🖼️ 𝙰𝙽𝙸𝙼𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 🖼️

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈
┋◉ ᴡᴀɪғᴜ
┋◉ ɴᴇᴋᴏ
┋◉ ᴍᴇɢᴜᴍɪɴ
┋◉ ᴍᴀɪᴅ
┋◉ ᴀᴡᴏᴏ
┋◉ ʟᴏʟɪ
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 6*

> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`);
                        break;
                    case '10':               
                        reply(`*🧚‍♂️ 𝙾𝚃𝙷𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 🧚‍♂️*

╭┈┈┈┈┉┉┉┉┉┉┉┉┈┈┈
┋◉ ᴛʀᴛ
┋◉ ᴀɴɪᴍᴇ
┋◉ ᴍᴏᴠɪᴇ
┋◉ ɢɪᴛ
┋◉ ɢᴘᴀꜱꜱ
┋◉ ǫᴜᴏᴛᴇ
┋◉ ғᴀɴᴄʏ
┋◉ ᴅᴇꜰɪɴᴇ
┋◉ ᴜʀʟ
┋◉ sᴀᴠᴇ
┋◉ ᴘᴀɪʀ <ᴘᴜᴛ ᴜʀ #>
╰━━━━∙⋆⋅⋆∙━ ─┉─ ─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ 11*

> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option❗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
