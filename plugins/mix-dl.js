const { cmd } = require('../command');
const axios = require('axios');

cmd({
  pattern: "fb",
  alias: ["facebook", "fb3", "fbdl"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename
}, async (conn, m, store, { from, q, reply }) => {
  try {
    if (!q || !q.startsWith("https://")) {
      return reply("*`Need a valid Facebook URL!`*");
    }

    await conn.sendMessage(from, { react: { text: '📥', key: m.key } });

    const apiUrl = `https://lance-frank-asta.onrender.com/api/downloader?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    if (!data?.content?.status || !data?.content?.data?.result?.length) {
      throw new Error("Invalid API response or no video found.");
    }

    let videoData = data.content.data.result.find(v => v.quality === "HD") || 
                    data.content.data.result.find(v => v.quality === "SD");

    if (!videoData) {
      throw new Error("No valid video URL found.");
    }

    await conn.sendMessage(from, {
      video: { url: videoData.url },
      caption: `📥 *ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ*\n\n> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`
    }, { quoted: m });

  } catch (error) {
    console.error("FB Download Error:", error);

    // Send error details to bot owner
    const ownerNumber = conn.user.id.split(":")[0] + "@s.whatsapp.net";
    await conn.sendMessage(ownerNumber, {
      text: `⚠️ *FB Downloader Error!*\n\n📍 *Group/User:* ${from}\n💬 *Query:* ${q}\n❌ *Error:* ${error.message || error}`
    });

    // Notify the user
    reply("❌ *Error:* Unable to process the request. Please try again later.");
  }
});


cmd({
    pattern: "insta",
    alias: ["igdl", "instagram"],
    desc: "Download Instagram reels or image posts",
    category: "downloader",
    react: "📥",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide an Instagram post or reel link.");
        if (!q.includes("instagram.com")) return reply("Invalid Instagram link.");

        const apiUrl = `https://delirius-apiofc.vercel.app/download/igv2?url=${q}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data) {
            await react("❌"); 
            return reply("Failed to fetch Instagram media.");
        }

        const { username, fullname, caption, likes, comments, followed, download } = data.data;

        const captionText = `*ɪɴꜱᴛᴀɢʀᴀᴍ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*` +
                            `📸 *Instagram Post* 📸\n\n` +
                            `👤 *User:* ${fullname} (@${username})\n` +
                            `❤️ *Likes:* ${likes}\n💬 *Comments:* ${comments}\n👥 *Followers:* ${followed}\n` +
                            `📝 *Caption:*\n${caption || "> ᴀᴋɪɴᴅᴜ ᴍᴅ"}`;

        for (const media of download) {
            if (media.type === "image") {
                await conn.sendMessage(from, {
                    image: { url: media.url },
                    caption: captionText,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: mek });
            } else if (media.type === "video") {
                await conn.sendMessage(from, {
                    video: { url: media.url },
                    caption: captionText,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: mek });
            }
        }

        await react("✅"); // React after successfully sending media
    } catch (e) {
        console.error("Error in Instagram downloader command:", e);
        await react("❌");
        reply(`An error occurred: ${e.message}`);
    }
});


cmd({
  pattern: "tiktok",
  alias: ['tt', 'ttdown'],
  react: "🎥",
  desc: "Download For Tiktok Videos",
  category: "download",
  filename: __filename
}, async (bot, message, args, { from, quoted, reply, q }) => {
  try {
    if (!q) {
      return await reply("Please provide a TikTok URL.");
    }
    
    if (!q.includes('tiktok.com')) {
      return await reply("This URL is invalid.");
    }

    const contextInfo = {
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterName: "𝛭𝑅 𝐿𝛥𝛫𝑆𝛪𝐷𝑈",
        newsletterJid: ""
      }
      
    };

    const apiResponse = await fetchJson(`https://api.agatz.xyz/api/tiktok?url=${q}`);

    const downloadMessage = `
*𝐓𝐈𝐊𝐓𝐎𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃*
    
*TITLE :* ${apiResponse.data.title}
*Author :* ${apiResponse.data.author.fullname}
*DURATION :* ${apiResponse.data.duration}
*VIEWS :* ${apiResponse.data.stats.views}

*1.1 ║❯❯ No-Watermark-01*
*1.2 ║❯❯ No-Watermark-SD*
*1.3 ║❯❯ No-Watermark-HD*
*1.4 ║❯❯ AUDIO DOWNLOAD*
 
> 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 𝐿𝛥𝛫𝛪𝑌𝛥 𝛭𝐷
`;

    const sentMessage = await bot.sendMessage(from, {
      image: { url: apiResponse.data.cover || '' },
      caption: downloadMessage,
      contextInfo
    }, { quoted: message });

    bot.ev.on("messages.upsert", async (msgUpdate) => {
      const receivedMessage = msgUpdate.messages[0];

      if (!receivedMessage.message || !receivedMessage.message.extendedTextMessage) {
        return;
      }

      const userResponse = receivedMessage.message.extendedTextMessage.text.trim();

      if (receivedMessage.message.extendedTextMessage.contextInfo &&
          receivedMessage.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        
        switch (userResponse) {
          case '1.1':
            await bot.sendMessage(from, {
              video: { url: apiResponse.data.data[0].url },
              mimetype: "video/mp4",
              caption: `*𝛭𝑅 𝐿𝛥𝛫𝑆𝛪𝐷𝑈*`,
              contextInfo
            }, { quoted: receivedMessage });
            break;

          case '1.2':
            await bot.sendMessage(from, {
              video: { url: apiResponse.data.data[1].url },
              mimetype: "video/mp4",
              caption: `*𝛭𝑅 𝐿𝛥𝛫𝑆𝛪𝐷𝑈*`,
              contextInfo
            }, { quoted: receivedMessage });
            break;

          case '1.3':
            await bot.sendMessage(from, {
              video: { url: apiResponse.data.data[2].url },
              mimetype: "video/mp4",
              caption: `*𝛭𝑅 𝐿𝛥𝛫𝑆𝛪𝐷𝑈*`,
              contextInfo
            }, { quoted: receivedMessage });
            break;

          case '1.4':
            await bot.sendMessage(from, {
              audio: { url: apiResponse.data.music_info.url },
              mimetype: "audio/mpeg",
              contextInfo
            }, { quoted: receivedMessage });
            break;

          default:
            await bot.sendMessage(from, {
              text: " Invalid option. Please select a valid number."
            }, { quoted: receivedMessage });
            break;
        }
    });

  
