const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `*👋 ʜᴇʟʟᴏ ${pushname}* \n
❒ *ɪ'ᴍ ᴀᴋɪɴᴅᴜ ᴅɪᴍᴀɴꜱʜᴀ.* \n
❒ *ᴏᴡɴᴇʀ ᴏꜰ ᴀᴋɪɴᴅᴜ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ.* \n
❒ *ɪ'ᴍ ꜰʀᴏᴍ ꜱʀɪ ʟᴀɴᴋᴀ.* \n
❒ *16 ʏᴇᴀʀꜱ ᴏʟᴅ.* \n

> ᴀᴋɪɴᴅᴜ ᴍᴅ`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
