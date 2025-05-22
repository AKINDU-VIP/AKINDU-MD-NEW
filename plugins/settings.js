const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

function isEnabled(value) {
    // Function to check if a value represents a "true" boolean state
    return value && value.toString().toLowerCase() === "true";
}

cmd({
    pattern: "settings",
    alias: ["setting", "allvar"],
    desc: "Settings of bot",
    category: "menu",
    react: "⚙️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Define the settings message with the correct boolean checks
        let envSettings = `*ʙᴏᴛ ꜱᴇᴛᴛɪɴɢꜱ* \n\n
❒ *ᴀᴜᴛᴏ ʀᴇᴀᴅ ꜱᴛᴀᴛᴜꜱ* ${isEnabled(config.AUTO_READ_STATUS) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ʀᴇᴘʟʏ* ${isEnabled(config.AUTO_STATUS_REPLY) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴀᴜᴛᴏ ʀᴇᴘʟʏ* ${isEnabled(config.AUTO_REPLY) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴀᴜᴛᴏ ꜱᴛɪᴄᴋᴇʀ* ${isEnabled(config.AUTO_STICKER) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ* ${isEnabled(config.AUTO_VOICE) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴏᴡɴᴇʀ ʀᴇᴀᴄᴛ* ${isEnabled(config.OWNER_REACT) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ʜᴇᴀʀᴛ ʀᴇᴀᴄᴛ* ${isEnabled(config.HEART_REACT) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴀᴜᴛᴏ ʀᴇᴀᴄᴛ* ${isEnabled(config.AUTO_REACT) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴀɴᴛɪ ʟɪɴᴋ* ${isEnabled(config.ANTI_LINK) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴀɴᴛɪ ʙᴀᴅ ᴡᴏʀᴅꜱ* ${isEnabled(config.ANTI_BAD) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴀᴜᴛᴏ ᴛʏᴘɪɴɢ* ${isEnabled(config.AUTO_TYPING) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ* ${isEnabled(config.FAKE_RECORDING) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴀʟʟᴡᴀʏꜱ ᴏɴʟɪɴᴇ* ${isEnabled(config.ALWAYS_ONLINE) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ꜱᴇᴇɴ* ${isEnabled(config.CURRENT_STATUS) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}
❒ *ʀᴇᴀᴅ ᴍᴀꜱꜱᴇɢᴇ* ${isEnabled(config.READ_MESSAGE) ? "ᴇɴᴀʙʟᴇᴅ ✅" : "ᴅɪꜱᴀʙʟᴇᴅ ❌"}

> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})


