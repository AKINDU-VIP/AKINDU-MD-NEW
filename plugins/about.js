const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "owner",
    alias: ["akindu","owner"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 AKINDU MD 〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ᴀᴋɪɴᴅᴜ ᴍᴅ*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : ᴀᴋɪɴᴅᴜ*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : ᴀᴋɪɴᴅᴜ ᴅɪᴍᴀɴꜱʜᴀ*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ᴀᴋɪ>>🖤*
*┃★│* *ᴀɢᴇ : 16 ʏᴇᴀʀ*
*┃★│* *ᴄɪᴛʏ : ᴍᴀᴛᴀʀᴀ*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
    ╰──────────────*
> AKINDU MD`

await conn.sendMessage(from,{image:{url:`https://i.ibb.co/nMjszVMd/SulaMd.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363400898693892@newsletter',
      newsletterName: 'AKINDU MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
