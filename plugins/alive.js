const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "alive",
    react: "👋",
    desc: "check bot alive",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `*👋 ʜᴇʟʟᴏ ${pushname}* \n
❒ *ᴀᴋɪɴᴅᴜ ᴍᴅ ɴᴏᴡ ᴀʟɪᴠᴇ 😇* \n ❒ *ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ ᴛᴏᴀᴅʏ* \n ❒ *ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ɢᴇᴛ ʙᴏᴛ ᴍᴇɴᴜ ᴛʏᴘᴇ .ᴍᴇɴᴜ 📜* \n\n ❒ *${day}* \n ❒ *${hour}* \n ❒ *${seconds}* 🧚‍♂ \n\n ❒ *ꜰᴏʟʟᴏᴡ ᴏᴜʀ ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ ꜰᴏʀ ᴀʙᴏᴜᴛ ʙᴏᴛ ᴜᴘᴅᴀᴛᴇꜱ ᴀɴᴅ ᴛᴇᴄʜɴɪᴄᴀʟ ɪɴꜰᴏᴍᴀᴛɪᴏɴꜱ* \n\n https://whatsapp.com/channel/0029Vb5x0TSJP21B6svgXf2Z \n\n
> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
