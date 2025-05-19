/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
─██████████████──██████████──██████──────────██████████████──██████──────────██████──██████████████──██████──────────██████████████──██████──██████──██████████████──████████████████─── 
─██░░░░░░░░░░██──██░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██░░██████████──████░░████──██░░██──────────██░░██████████──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██──────────██░░██████░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░██────────────██░░██────██░░██──────────██░░██──────────██░░██████░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██────██░░██─── 
─██░░██████████────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░░░░░░░░░██────██░░██────██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██████████░░██────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░██████░░████─── 
─────────██░░██────██░░██────██░░██──────────██░░██──────────██░░██──██░░██████░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░░░██░░░░██──██░░██──────────██░░██──██░░██───── 
─██████████░░██──████░░████──██░░██████████──██░░██████████──██░░██──██░░░░░░░░░░██──────██░░██──────██░░██████████──██░░██████░░██──████░░░░░░████──██░░██████████──██░░██──██░░██████─ 
─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██──██░░░░░░░░░░██────████░░████────██░░░░░░░░░░██──██░░██──██░░░░░░██─ 
─██████████████──██████████──██████████████──██████████████──██████──────────██████──────██████──────██████████████──██████████████──────██████──────██████████████──██████──██████████─ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by Silent_lover432 🕵
contact me 923096287432 ♻️
© Copy coder alert ⚠
*/
const {
  downloadTiktok
} = require("@mrnima/tiktok-downloader");
const {
  facebook
} = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const {
  igdl
} = require("ruhend-scraper");
const axios = require("axios");
const fs = require('fs');
const path = require("path");
const {
  cmd,
  commands
} = require('../command');
cmd({
  'pattern': "tiktok2",
  'alias': ["tt2"],
  'react': '🎥',
  'desc': "download tt videos",
  'category': "download",
  'filename': __filename
}, async (_0x2e65d1, _0x304c19, _0x10a536, {
  from: _0x1f541a,
  quoted: _0x241f47,
  body: _0x4ac3e4,
  isCmd: _0x129ed2,
  command: _0x46146a,
  args: _0x948536,
  q: _0x7179db,
  isGroup: _0x42b34d,
  sender: _0x251a76,
  senderNumber: _0x577ed3,
  botNumber2: _0x6fcd0,
  botNumber: _0xe436de,
  pushname: _0x58323d,
  isMe: _0x395afe,
  isOwner: _0x4e3c0b,
  groupMetadata: _0x199d1a,
  groupName: _0x2269cf,
  participants: _0x4fa209,
  groupAdmins: _0x425905,
  isBotAdmins: _0x12d764,
  isAdmins: _0x4a26f6,
  reply: _0x405a5f
}) => {
  try {
    if (!_0x7179db && !_0x7179db.startsWith("https://")) {
      return _0x405a5f("*`Need url`*");
    }
    _0x10a536.react('⬇️');
    let _0x33deb3 = await downloadTiktok(_0x7179db);
    let _0x2089a3 = "\n*✧sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ᴛɪᴋᴛᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ✧*  \n*ᴛɪᴛʟᴇ*:  " + _0x33deb3.result.title + "\n\n*🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n*ᴠɪᴅᴇᴏ ꜰɪʟᴇ* 🎬\n\n*1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*\n*2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*\n\n*ᴀᴜᴅɪᴏ ꜰɪʟᴇ*🎧\n\n*3*     ┃  *ᴀᴜᴅɪᴏ*\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³² \n     ";
    const _0x51670c = await _0x2e65d1.sendMessage(_0x1f541a, {
      'image': {
        'url': _0x33deb3.result.image
      },
      'caption': _0x2089a3
    });
    const _0x18cdee = _0x51670c.key.id;
    _0x2e65d1.ev.on("messages.upsert", async _0x3f99cc => {
      const _0x513cbe = _0x3f99cc.messages[0x0];
      if (!_0x513cbe.message) {
        return;
      }
      const _0x545e0c = _0x513cbe.message.conversation || _0x513cbe.message.extendedTextMessage?.['text'];
      const _0x498d4c = _0x513cbe.key.remoteJid;
      const _0x42ed60 = _0x513cbe.message.extendedTextMessage && _0x513cbe.message.extendedTextMessage.contextInfo.stanzaId === _0x18cdee;
      if (_0x42ed60) {
        await _0x2e65d1.sendMessage(_0x498d4c, {
          'react': {
            'text': '⬇️',
            'key': _0x513cbe.key
          }
        });
        let _0x78828f = _0x33deb3.result;
        await _0x2e65d1.sendMessage(_0x498d4c, {
          'react': {
            'text': '⬆️',
            'key': _0x513cbe.key
          }
        });
        if (_0x545e0c === '1') {
          await _0x2e65d1.sendMessage(_0x498d4c, {
            'video': {
              'url': _0x78828f.dl_link.download_mp4_1
            },
            'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*"
          }, {
            'quoted': _0x513cbe
          });
        } else {
          if (_0x545e0c === '2') {
            await _0x2e65d1.sendMessage(_0x498d4c, {
              'video': {
                'url': _0x78828f.dl_link.download_mp4_2
              },
              'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*"
            }, {
              'quoted': _0x513cbe
            });
          } else if (_0x545e0c === '3') {
            await _0x2e65d1.sendMessage(_0x498d4c, {
              'audio': {
                'url': _0x78828f.dl_link.download_mp3
              },
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0x513cbe
            });
          }
        }
      }
    });
  } catch (_0x568d31) {
    console.log(_0x568d31);
    _0x405a5f('' + _0x568d31);
  }
});
cmd({
  'pattern': "fb4",
  'alias': ['facebook4'],
  'desc': "Download Facebook videos",
  'category': "download",
  'filename': __filename
}, async (_0x49f947, _0x126dca, _0x5e43bb, {
  from: _0x307530,
  quoted: _0x5af0b3,
  body: _0x16090a,
  isCmd: _0x3c50be,
  command: _0x359ddb,
  args: _0xb43d95,
  q: _0x1ee0e3,
  isGroup: _0x58294d,
  sender: _0x5c7bfb,
  senderNumber: _0x522296,
  botNumber2: _0x38201d,
  botNumber: _0x1025ae,
  pushname: _0x3ef1dc,
  isMe: _0x391d6e,
  isOwner: _0x17ae5d,
  groupMetadata: _0x42707b,
  groupName: _0x3d23f2,
  participants: _0x162c23,
  groupAdmins: _0x120029,
  isBotAdmins: _0x25a347,
  isAdmins: _0x3361d0,
  reply: _0x2eacaf
}) => {
  try {
    if (!_0x1ee0e3 || !_0x1ee0e3.startsWith("https://")) {
      return _0x49f947.sendMessage(_0x307530, {
        'text': "*`Need URL`*"
      }, {
        'quoted': _0x126dca
      });
    }
    await _0x49f947.sendMessage(_0x307530, {
      'react': {
        'text': '⏳',
        'key': _0x126dca.key
      }
    });
    const _0x482a05 = await facebook(_0x1ee0e3);
    const _0x35b026 = "\n*❖sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ғʙ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ❖*  \n*⌛ᴅᴜʀᴀᴛɪᴏɴ* : " + _0x482a05.result.duration + "\n\n*🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n*ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎬*\n\n*1.1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*\n*1.2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*\n\n*ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎧*\n\n*2.1*     ┃  *ᴀᴜᴅɪᴏ*\n*2.2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n*2.3*     ┃  *ᴠᴏɪᴄᴇ*\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²\n";
    const _0x2bbe3c = await _0x49f947.sendMessage(_0x307530, {
      'image': {
        'url': _0x482a05.result.thumbnail
      },
      'caption': _0x35b026
    }, {
      'quoted': _0x126dca
    });
    const _0x26b719 = _0x2bbe3c.key.id;
    _0x49f947.ev.on('messages.upsert', async _0x3409a0 => {
      const _0x174ae6 = _0x3409a0.messages[0x0];
      if (!_0x174ae6.message) {
        return;
      }
      const _0x170a48 = _0x174ae6.message.conversation || _0x174ae6.message.extendedTextMessage?.['text'];
      const _0x2eed76 = _0x174ae6.key.remoteJid;
      const _0xe1637f = _0x174ae6.message.extendedTextMessage && _0x174ae6.message.extendedTextMessage.contextInfo.stanzaId === _0x26b719;
      if (_0xe1637f) {
        await _0x49f947.sendMessage(_0x2eed76, {
          'react': {
            'text': '⬇️',
            'key': _0x174ae6.key
          }
        });
        let _0x15edea = _0x482a05.result;
        await _0x49f947.sendMessage(_0x2eed76, {
          'react': {
            'text': '⬆️',
            'key': _0x174ae6.key
          }
        });
        if (_0x170a48 === '1.1') {
          await _0x49f947.sendMessage(_0x2eed76, {
            'video': {
              'url': _0x15edea.links.SD
            },
            'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*"
          }, {
            'quoted': _0x174ae6
          });
        } else {
          if (_0x170a48 === "1.2") {
            await _0x49f947.sendMessage(_0x2eed76, {
              'video': {
                'url': _0x15edea.links.HD
              },
              'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*"
            }, {
              'quoted': _0x174ae6
            });
          } else {
            if (_0x170a48 === "2.1") {
              await _0x49f947.sendMessage(_0x2eed76, {
                'audio': {
                  'url': _0x15edea.links.SD
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x174ae6
              });
            } else {
              if (_0x170a48 === "2.2") {
                await _0x49f947.sendMessage(_0x2eed76, {
                  'document': {
                    'url': _0x15edea.links.SD
                  },
                  'mimetype': "audio/mpeg",
                  'fileName': "SILENT/FBDL.mp3",
                  'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*"
                }, {
                  'quoted': _0x174ae6
                });
              } else if (_0x170a48 === "2.3") {
                await _0x49f947.sendMessage(_0x2eed76, {
                  'audio': {
                    'url': _0x15edea.links.SD
                  },
                  'mimetype': 'audio/mp4',
                  'ptt': true
                }, {
                  'quoted': _0x174ae6
                });
              }
            }
          }
        }
      }
    });
  } catch (_0x4338fc) {
    console.log(_0x4338fc);
    _0x2eacaf('' + _0x4338fc);
  }
});
cmd({
  'pattern': "twitter",
  'alias': ["tweet", 'twdl'],
  'desc': "Download Twitter videos",
  'category': "download",
  'filename': __filename
}, async (_0x5f596f, _0x47e153, _0x14daaf, {
  from: _0x49ee2b,
  quoted: _0x1cb067,
  body: _0x37eb86,
  isCmd: _0x3bf137,
  command: _0x1f4402,
  args: _0x134742,
  q: _0x2a074d,
  isGroup: _0x382c5e,
  sender: _0x5d4c25,
  senderNumber: _0x1882a9,
  botNumber2: _0xa67ac2,
  botNumber: _0x28351a,
  pushname: _0x1cfd3e,
  isMe: _0xfe5d19,
  isOwner: _0x28abb7,
  groupMetadata: _0x3ef531,
  groupName: _0xd436e2,
  participants: _0x35ae2e,
  groupAdmins: _0x308447,
  isBotAdmins: _0x2fafc7,
  isAdmins: _0x152337,
  reply: _0x5e5bab
}) => {
  try {
    if (!_0x2a074d || !_0x2a074d.startsWith("https://")) {
      return _0x5f596f.sendMessage(_0x49ee2b, {
        'text': "❌ Please provide a valid Twitter URL."
      }, {
        'quoted': _0x47e153
      });
    }
    await _0x5f596f.sendMessage(_0x49ee2b, {
      'react': {
        'text': '⏳',
        'key': _0x47e153.key
      }
    });
    const _0x30e394 = await axios.get("https://www.dark-yasiya-api.site/download/twitter?url=" + _0x2a074d);
    const _0x153ef1 = _0x30e394.data;
    if (!_0x153ef1 || !_0x153ef1.status || !_0x153ef1.result) {
      return _0x14daaf.reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }
    const {
      desc: _0x22fc2f,
      thumb: _0x1842ce,
      video_sd: _0x191995,
      video_hd: _0x414838
    } = _0x153ef1.result;
    const _0x4df869 = await _0x5f596f.sendMessage(_0x49ee2b, {
      'image': {
        'url': _0x1842ce
      },
      'caption': "\n*❖sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ᴛᴡɪᴛᴛᴇʀ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ❖*  \n*🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n*ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎬*\n\n*1.1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*\n*1.2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*\n\n*ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎧*\n\n*2.1*     ┃  *ᴀᴜᴅɪᴏ*\n*2.2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n*2.3*     ┃  *ᴠᴏɪᴄᴇ*\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²\n"
    }, {
      'quoted': _0x47e153
    });
    const _0x27e739 = _0x4df869.key.id;
    _0x5f596f.ev.on('messages.upsert', async _0x171526 => {
      const _0x1ca93a = _0x171526.messages[0x0];
      if (!_0x1ca93a.message) {
        return;
      }
      const _0x4728d4 = _0x1ca93a.message.conversation || _0x1ca93a.message.extendedTextMessage?.['text'];
      const _0x5443f4 = _0x1ca93a.key.remoteJid;
      const _0x2bcb45 = _0x1ca93a.message.extendedTextMessage && _0x1ca93a.message.extendedTextMessage.contextInfo.stanzaId === _0x27e739;
      if (_0x2bcb45) {
        await _0x5f596f.sendMessage(_0x5443f4, {
          'react': {
            'text': '⬇️',
            'key': _0x1ca93a.key
          }
        });
        if (_0x4728d4 === "1.1") {
          await _0x5f596f.sendMessage(_0x5443f4, {
            'video': {
              'url': _0x191995
            },
            'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*"
          }, {
            'quoted': _0x1ca93a
          });
        } else {
          if (_0x4728d4 === "1.2") {
            await _0x5f596f.sendMessage(_0x5443f4, {
              'video': {
                'url': _0x414838
              },
              'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*"
            }, {
              'quoted': _0x1ca93a
            });
          } else {
            if (_0x4728d4 === "2.1") {
              await _0x5f596f.sendMessage(_0x5443f4, {
                'audio': {
                  'url': _0x191995
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x1ca93a
              });
            } else {
              if (_0x4728d4 === "2.2") {
                await _0x5f596f.sendMessage(_0x5443f4, {
                  'document': {
                    'url': _0x191995
                  },
                  'mimetype': "audio/mpeg",
                  'fileName': "sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ/TWDL.mp3",
                  'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*"
                }, {
                  'quoted': _0x1ca93a
                });
              } else if (_0x4728d4 === '2.3') {
                await _0x5f596f.sendMessage(_0x5443f4, {
                  'audio': {
                    'url': _0x191995
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                }, {
                  'quoted': _0x1ca93a
                });
              }
            }
          }
        }
      }
    });
  } catch (_0x5bff61) {
    console.log(_0x5bff61);
    _0x5e5bab("An error occurred: " + _0x5bff61);
  }
});
cmd({
  'pattern': 'mediafire',
  'alias': ["mfire"],
  'desc': "To download MediaFire files.",
  'react': '🎥',
  'category': 'download',
  'filename': __filename
}, async (_0x59b02a, _0x10b786, _0x39c8ed, {
  from: _0xa48221,
  quoted: _0x21c063,
  body: _0x2c7ecc,
  isCmd: _0x1b52db,
  command: _0x42266f,
  args: _0xad422f,
  q: _0x23aacd,
  isGroup: _0x2321ae,
  sender: _0x18e079,
  senderNumber: _0x8fb769,
  botNumber2: _0x20d0cd,
  botNumber: _0x576ec1,
  pushname: _0x51c9d3,
  isMe: _0x5456e7,
  isOwner: _0x582fa6,
  groupMetadata: _0x55c2af,
  groupName: _0x4c9b4e,
  participants: _0x1e6885,
  groupAdmins: _0xf602b5,
  isBotAdmins: _0xa93c94,
  isAdmins: _0x52c3ae,
  reply: _0xbb248e
}) => {
  try {
    if (!_0x23aacd) {
      return _0x39c8ed.reply("Please provide a valid MediaFire link.");
    }
    _0x39c8ed.react('⬇️');
    const _0x904849 = await axios.get("https://www.dark-yasiya-api.site/download/mfire?url=" + _0x23aacd);
    const _0x148a86 = _0x904849.data;
    if (!_0x148a86 || !_0x148a86.status || !_0x148a86.result || !_0x148a86.result.dl_link) {
      return _0x39c8ed.reply("Failed to fetch MediaFire download link. Ensure the link is valid and public.");
    }
    const _0x29a137 = _0x148a86.result.dl_link;
    const _0x37e2f5 = _0x148a86.result.fileName || "mediafire_download";
    const _0x40bf42 = _0x148a86.result.fileType || "application/octet-stream";
    _0x39c8ed.react('⬆️');
    let _0x1f22d1 = "\n*❖sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ᴍꜰɪʀᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ❖*\n*ꜰɪʟᴇ ɴᴀᴍᴇ :* " + _0x37e2f5 + "\n\n*ꜰɪʟᴇ ᴛʏᴘᴇ :* " + _0x40bf42 + "\n\n> sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ✻\n        ";
    await _0x59b02a.sendMessage(_0xa48221, {
      'document': {
        'url': _0x29a137
      },
      'mimetype': _0x40bf42,
      'fileName': _0x37e2f5,
      'caption': _0x1f22d1
    }, {
      'quoted': _0x10b786
    });
  } catch (_0x37756b) {
    console.error(_0x37756b);
    _0xbb248e("An error occurred: " + _0x37756b.message);
  }
});
cmd({
  'pattern': 'ig',
  'alias': ["insta", "fb3", "facebook3"],
  'desc': "To download instagram videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x8c6d60, _0x214651, _0x434a96, {
  from: _0x4af3cf,
  quoted: _0xabcac8,
  body: _0x738808,
  isCmd: _0x427059,
  command: _0xdc60d,
  args: _0x14db3f,
  q: _0x4bf617,
  isGroup: _0x539472,
  sender: _0x7d4b22,
  senderNumber: _0x4cb5cb,
  botNumber2: _0x78d72c,
  botNumber: _0x2f417d,
  pushname: _0x3b3779,
  isMe: _0x37a80c,
  isOwner: _0x500b13,
  groupMetadata: _0x29a7a1,
  groupName: _0x549c5f,
  participants: _0x311667,
  groupAdmins: _0x432191,
  isBotAdmins: _0x41ab2f,
  isAdmins: _0x58717e,
  reply: _0x23901f
}) => {
  try {
    if (!_0x4bf617) {
      return _0x434a96.reply("Please Give Me a vaild Link...");
    }
    _0x434a96.react('⬇️');
    let _0x15b7c2 = await igdl(_0x4bf617);
    let _0x3451e2 = await _0x15b7c2.data;
    for (let _0x43876e = 0x0; _0x43876e < 0x14; _0x43876e++) {
      let _0x322b90 = _0x3451e2[_0x43876e];
      let _0x46d742 = _0x322b90.url;
      _0x434a96.react('⬆️');
      await _0x8c6d60.sendMessage(_0x4af3cf, {
        'video': {
          'url': _0x46d742
        },
        'mimetype': "video/mp4",
        'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*"
      }, {
        'quoted': _0x214651
      });
      _0x434a96.react('✅');
    }
  } catch (_0x837aa3) {
    console.log(_0x837aa3);
  }
});
cmd({
  'pattern': "baiscope",
  'alias': ['movie2'],
  'react': '📑',
  'category': "download",
  'desc': "baiscope.lk",
  'filename': __filename
}, async (_0x12d870, _0x63ffd1, _0xa4b2b5, {
  from: _0x22c5db,
  q: _0x53478c,
  isDev: _0x28613e,
  reply: _0x13d803
}) => {
  try {
    if (!_0x53478c) {
      return await _0x13d803("*Please provide a search query! (e.g., Avatar)*");
    }
    const _0x2fa7f9 = 'https://www.baiscope.lk/?s=' + encodeURIComponent(_0x53478c);
    const _0xdce044 = await axios.get(_0x2fa7f9);
    const _0x1d4cb5 = cheerio.load(_0xdce044.data);
    let _0x22fe79 = [];
    _0x1d4cb5("article.elementor-post").each((_0x444a9a, _0x15d68f) => {
      const _0x3b6f19 = _0x1d4cb5(_0x15d68f).find("h5.elementor-post__title > a").text().trim();
      const _0x2b0d41 = _0x1d4cb5(_0x15d68f).find("h5.elementor-post__title > a").attr('href');
      const _0x55adcb = _0x1d4cb5(_0x15d68f).find(".elementor-post__thumbnail img").attr("src");
      if (_0x3b6f19 && _0x2b0d41 && _0x55adcb) {
        _0x22fe79.push({
          'title': _0x3b6f19,
          'episodeLink': _0x2b0d41,
          'imgUrl': _0x55adcb
        });
      }
    });
    if (_0x22fe79.length === 0x0) {
      return await _0x13d803("No results found for: " + _0x53478c);
    }
    let _0xa6d081 = "📺 Search Results for *" + _0x53478c + ":*\n\n";
    _0x22fe79.forEach((_0x330b1d, _0x3a5ce1) => {
      _0xa6d081 += '*' + (_0x3a5ce1 + 0x1) + ".* " + _0x330b1d.title + "\n🔗 Link: " + _0x330b1d.episodeLink + "\n\n";
    });
    const _0x5a91ec = await _0x12d870.sendMessage(_0x22c5db, {
      'text': _0xa6d081
    }, {
      'quoted': _0xa4b2b5
    });
    const _0x37d67e = _0x5a91ec.key.id;
    _0x12d870.ev.on("messages.upsert", async _0x695170 => {
      const _0x150904 = _0x695170.messages[0x0];
      if (!_0x150904.message) {
        return;
      }
      const _0x4d8fcb = _0x150904.message.conversation || _0x150904.message.extendedTextMessage?.['text'];
      const _0x320149 = _0x150904.key.remoteJid;
      const _0x57151d = _0x150904.message.extendedTextMessage && _0x150904.message.extendedTextMessage.contextInfo.stanzaId === _0x37d67e;
      if (_0x57151d) {
        const _0x13ae01 = parseInt(_0x4d8fcb.trim());
        if (!isNaN(_0x13ae01) && _0x13ae01 > 0x0 && _0x13ae01 <= _0x22fe79.length) {
          const _0x522938 = _0x22fe79[_0x13ae01 - 0x1];
          const _0x362150 = await axios.get(_0x522938.episodeLink);
          const _0x5cea4f = cheerio.load(_0x362150.data);
          const _0x228e5b = _0x5cea4f("a.dlm-buttons-button").attr("href");
          if (_0x228e5b) {
            await _0x12d870.sendMessage(_0x320149, {
              'image': {
                'url': _0x522938.imgUrl
              },
              'caption': "🎬 *" + _0x522938.title + "*\n🔗 Link: " + _0x522938.episodeLink + "\n⬇️ Download will follow."
            }, {
              'quoted': _0x150904
            });
            const _0x3296cb = path.join(__dirname, "downloaded_episode.zip");
            const _0x2c608b = fs.createWriteStream(_0x3296cb);
            const _0x242b8e = await axios({
              'url': _0x228e5b,
              'method': 'GET',
              'responseType': "stream"
            });
            _0x242b8e.data.pipe(_0x2c608b);
            _0x2c608b.on('finish', async () => {
              await _0x12d870.sendMessage(_0x320149, {
                'document': {
                  'url': _0x3296cb
                },
                'mimetype': 'application/zip',
                'fileName': _0x522938.title + ".zip",
                'caption': '*' + _0x522938.title + "*\n\n> Lααɾα-ᴍᴅ ✻"
              }, {
                'quoted': _0x150904
              });
              fs.unlinkSync(_0x3296cb);
            });
            _0x2c608b.on("error", _0x3d9b82 => {
              console.error("Error downloading ZIP file:", _0x3d9b82);
              _0x13d803("*Error downloading the episode ZIP file.*");
            });
          } else {
            await _0x13d803("*Download link not found for the selected episode.*");
          }
        } else {
          await _0x13d803("*Invalid selection. Please choose a valid number.*");
        }
      }
    });
  } catch (_0x5aa581) {
    console.error(_0x5aa581);
    await _0x13d803("*An error occurred while scraping the data.*");
  }
});
cmd({
  'pattern': 'ginisisila',
  'react': '📑',
  'category': "download",
  'desc': 'ginisisilacartoon.net',
  'filename': __filename
}, async (_0x36117a, _0x187dde, _0x2b6ae6, {
  from: _0x31a5b0,
  q: _0x62d7ae,
  isDev: _0x274e47,
  reply: _0x41563b
}) => {
  try {
    if (!_0x62d7ae) {
      return await _0x41563b("*Please provide a search query! (e.g., Garfield)*");
    }
    const _0x1a64df = "https://ginisisilacartoon.net/search.php?q=" + encodeURIComponent(_0x62d7ae);
    const _0xcf0f71 = await axios.get(_0x1a64df);
    const _0x5aa57a = cheerio.load(_0xcf0f71.data);
    let _0x4bc009 = [];
    _0x5aa57a('div.inner-video-cell').each((_0x22001f, _0x54bec9) => {
      const _0x5f32c1 = _0x5aa57a(_0x54bec9).find("div.video-title > a").attr("title");
      const _0x2180c6 = _0x5aa57a(_0x54bec9).find("div.posted-time").text().trim();
      const _0x16a010 = _0x5aa57a(_0x54bec9).find("div.video-title > a").attr('href');
      const _0x1276cf = _0x5aa57a(_0x54bec9).find("div.inner-video-thumb-wrapper img").attr('src');
      if (_0x5f32c1 && _0x16a010) {
        _0x4bc009.push({
          'title': _0x5f32c1,
          'postedTime': _0x2180c6,
          'episodeLink': "https://ginisisilacartoon.net/" + _0x16a010,
          'imageUrl': _0x1276cf
        });
      }
    });
    if (_0x4bc009.length === 0x0) {
      return await _0x41563b("No results found for: " + _0x62d7ae);
    }
    let _0x5007b1 = "📺 Search Results for *" + _0x62d7ae + ":*\n\n";
    _0x4bc009.forEach((_0x1fe29d, _0x57e32c) => {
      _0x5007b1 += '*' + (_0x57e32c + 0x1) + ".* " + _0x1fe29d.title + "\n🗓️ Posted: " + _0x1fe29d.postedTime + "\n🔗 Link: " + _0x1fe29d.episodeLink + "\n\n";
    });
    const _0x557236 = await _0x36117a.sendMessage(_0x31a5b0, {
      'text': _0x5007b1
    }, {
      'quoted': _0x2b6ae6
    });
    const _0x47c386 = _0x557236.key.id;
    _0x36117a.ev.on('messages.upsert', async _0x53af57 => {
      const _0x29bf9f = _0x53af57.messages[0x0];
      if (!_0x29bf9f.message) {
        return;
      }
      const _0x1a383b = _0x29bf9f.message.conversation || _0x29bf9f.message.extendedTextMessage?.["text"];
      const _0x4a62bf = _0x29bf9f.key.remoteJid;
      const _0x53f01d = _0x29bf9f.message.extendedTextMessage && _0x29bf9f.message.extendedTextMessage.contextInfo.stanzaId === _0x47c386;
      if (_0x53f01d) {
        const _0x49b830 = parseInt(_0x1a383b.trim());
        if (!isNaN(_0x49b830) && _0x49b830 > 0x0 && _0x49b830 <= _0x4bc009.length) {
          const _0x5384cf = _0x4bc009[_0x49b830 - 0x1];
          const _0x33d920 = "*🪄 ɴᴀᴍᴇ:-* " + _0x5384cf.title + "\n⏳ *ᴅᴀᴛᴇ:-* " + _0x5384cf.postedTime + "\n📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- " + _0x5384cf.episodeLink + "\n\n☘ *We are uploading the Movie/Episode you requested.*";
          const _0x11f49c = {
            'image': {
              'url': _0x5384cf.imageUrl
            },
            'caption': _0x33d920
          };
          await _0x36117a.sendMessage(_0x4a62bf, _0x11f49c, {
            'quoted': _0x29bf9f
          });
          const _0x56a53b = await axios.get(_0x5384cf.episodeLink);
          const _0x116994 = cheerio.load(_0x56a53b.data);
          const _0x501e43 = _0x116994("div#player-holder iframe").attr("src");
          if (_0x501e43) {
            const _0x2d9c48 = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x501e43 + "&apikey=mnp3grlZ";
            try {
              const _0x4cf221 = await axios.get(_0x2d9c48);
              const _0x7969b1 = _0x4cf221.data.result.downloadUrl;
              if (_0x7969b1) {
                await _0x36117a.sendMessage(_0x4a62bf, {
                  'document': {
                    'url': _0x7969b1
                  },
                  'mimetype': "video/mp4",
                  'fileName': "MR JANIYA | " + _0x5384cf.title + '.mp4',
                  'caption': _0x5384cf.title + " |  *sɪʟᴇɴᴛ ʟᴏᴠᴇʀ*\n\n> sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ"
                }, {
                  'quoted': _0x29bf9f
                });
              } else {
                await _0x41563b("Failed to retrieve the download link for this episode.");
              }
            } catch (_0x526203) {
              console.error("Error fetching the download link:", _0x526203);
              await _0x41563b("An error occurred while trying to fetch the download link.");
            }
          } else {
            await _0x41563b("No downloadable link found for this episode.");
          }
        } else {
          await _0x41563b("Please reply with a valid number from the list.");
        }
      }
    });
  } catch (_0x16061d) {
    _0x41563b("*Error occurred while scraping!*");
    console.error(_0x16061d);
  }
});
cmd({
  'pattern': 'apk',
  'desc': "Download apk.",
  'category': "download",
  'filename': __filename
}, async (_0x3a6c9e, _0x1f042b, _0x321a93, {
  from: _0x1eaaef,
  quoted: _0x458a60,
  body: _0x3ebbb2,
  isCmd: _0x520f61,
  command: _0x597329,
  args: _0x11b13f,
  q: _0x2997a4,
  isGroup: _0xade11c,
  sender: _0x12b7e5,
  senderNumber: _0x488ade,
  botNumber2: _0x4dec5d,
  botNumber: _0x127cf4,
  pushname: _0x17ad7d,
  isMe: _0x533f61,
  isOwner: _0x8ccdd6,
  groupMetadata: _0x4c744b,
  groupName: _0x2bade8,
  participants: _0x5d7632,
  groupAdmins: _0x11ad27,
  isBotAdmins: _0x1773d2,
  isAdmins: _0x3b9303,
  reply: _0x5667da
}) => {
  try {
    await _0x321a93.react('⬇');
    const _0x3a5a62 = "http://ws75.aptoide.com/api/7/apps/search/query=" + _0x2997a4 + "/limit=1";
    const _0x4cb8cd = await axios.get(_0x3a5a62);
    const _0x5722b2 = _0x4cb8cd.data;
    let _0x45b876 = _0x5722b2.datalist.list[0x0].size % 0xf4240;
    let _0x519323 = '.' + _0x45b876;
    let _0x54da22 = _0x5722b2.datalist.list[0x0].size / 0xf4240;
    let _0x531e07 = _0x54da22 - _0x519323;
    let _0x56eeb4 = "\n*❖sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ᴀᴘᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ❖*  \n*🏷️ Nᴀᴍᴇ :* " + _0x5722b2.datalist.list[0x0].name + "\n\n*📦 Sɪᴢᴇ :* " + _0x531e07 + "MB\n\n*🔖 Pᴀᴄᴋᴀɢᴇ :* " + _0x5722b2.datalist.list[0x0]["package"] + "\n\n*📆 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* " + _0x5722b2.datalist.list[0x0].updated + "\n\n*👤 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* " + _0x5722b2.datalist.list[0x0].developer.name + "\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²\n";
    await _0x321a93.react('⬆');
    await _0x3a6c9e.sendMessage(_0x1eaaef, {
      'document': {
        'url': _0x5722b2.datalist.list[0x0].file.path_alt
      },
      'fileName': _0x5722b2.datalist.list[0x0].name,
      'mimetype': "application/vnd.android.package-archive",
      'caption': _0x56eeb4
    }, {
      'quoted': _0x1f042b
    });
    await _0x321a93.react('✅');
  } catch (_0x448e49) {
    console.log(_0x448e49);
    _0x5667da('' + _0x448e49);
  }
});
const {
  sinhalaSub
} = require("mrnima-moviedl");
cmd({
  'pattern': 'sinhalasub',
  'alias': ["movie"],
  'react': '📑',
  'category': "download",
  'desc': "Search movies on sinhalasub and get download links",
  'filename': __filename
}, async (_0x320d4c, _0x2ecc6c, _0x882c16, {
  from: _0x249f38,
  q: _0x59591e,
  reply: _0x2f241d
}) => {
  try {
    if (!_0x59591e) {
      return await _0x2f241d("*Please provide a search query! (e.g., Deadpool)*");
    }
    var _0x2ad397 = await sinhalaSub();
    const _0x4141dc = await _0x2ad397.search(_0x59591e);
    const _0x3bb79e = _0x4141dc.result.slice(0x0, 0xa);
    if (!_0x3bb79e || _0x3bb79e.length === 0x0) {
      return await _0x2f241d("No results found for: " + _0x59591e);
    }
    let _0x9fad45 = "📽️ *Search Results for* \"" + _0x59591e + "\":\n\n";
    _0x3bb79e.forEach((_0x5943bc, _0x78a13b) => {
      _0x9fad45 += '*' + (_0x78a13b + 0x1) + ".* " + _0x5943bc.title + "\n🔗 Link: " + _0x5943bc.link + "\n\n";
    });
    const _0x316d36 = await _0x320d4c.sendMessage(_0x249f38, {
      'text': _0x9fad45
    }, {
      'quoted': _0x882c16
    });
    const _0x1b2025 = _0x316d36.key.id;
    _0x320d4c.ev.on("messages.upsert", async _0x2ecb2d => {
      const _0x26958a = _0x2ecb2d.messages[0x0];
      if (!_0x26958a.message) {
        return;
      }
      const _0x3c113f = _0x26958a.message.conversation || _0x26958a.message.extendedTextMessage?.['text'];
      const _0xb0b1c5 = _0x26958a.message.extendedTextMessage && _0x26958a.message.extendedTextMessage.contextInfo.stanzaId === _0x1b2025;
      if (_0xb0b1c5) {
        const _0x4f0ce9 = parseInt(_0x3c113f.trim());
        if (!isNaN(_0x4f0ce9) && _0x4f0ce9 > 0x0 && _0x4f0ce9 <= _0x3bb79e.length) {
          const _0x1f26c1 = _0x3bb79e[_0x4f0ce9 - 0x1];
          const _0x41c3e2 = 'https://api-site-2.vercel.app/api/sinhalasub/movie?url=' + encodeURIComponent(_0x1f26c1.link);
          try {
            const _0x1695ca = await axios.get(_0x41c3e2);
            const _0x295a75 = _0x1695ca.data.result;
            const _0x177fa0 = _0x295a75.dl_links || [];
            if (_0x177fa0.length === 0x0) {
              return await _0x2f241d("No PixelDrain links found.");
            }
            let _0x3cf06c = "🎥 *" + _0x295a75.title + "*\n\n";
            _0x3cf06c += "*Available PixelDrain Download Links:*\n";
            _0x177fa0.forEach((_0x41a05e, _0x581f38) => {
              _0x3cf06c += '*' + (_0x581f38 + 0x1) + ".* " + _0x41a05e.quality + " - " + _0x41a05e.size + "\n🔗 Link: " + _0x41a05e.link + "\n\n";
            });
            const _0x1be3c3 = await _0x320d4c.sendMessage(_0x249f38, {
              'text': _0x3cf06c
            }, {
              'quoted': _0x26958a
            });
            const _0x908223 = _0x1be3c3.key.id;
            _0x320d4c.ev.on('messages.upsert', async _0x3760ed => {
              const _0xfb917c = _0x3760ed.messages[0x0];
              if (!_0xfb917c.message) {
                return;
              }
              const _0x6e957e = _0xfb917c.message.conversation || _0xfb917c.message.extendedTextMessage?.["text"];
              const _0x9d9daa = _0xfb917c.message.extendedTextMessage && _0xfb917c.message.extendedTextMessage.contextInfo.stanzaId === _0x908223;
              if (_0x9d9daa) {
                const _0x31ef65 = parseInt(_0x6e957e.trim());
                if (!isNaN(_0x31ef65) && _0x31ef65 > 0x0 && _0x31ef65 <= _0x177fa0.length) {
                  const _0x1ea9a8 = _0x177fa0[_0x31ef65 - 0x1];
                  const _0x1f5b04 = _0x1ea9a8.link.split('/').pop();
                  await _0x320d4c.sendMessage(_0x249f38, {
                    'react': {
                      'text': '⬇️',
                      'key': _0x882c16.key
                    }
                  });
                  const _0xbc520 = "https://pixeldrain.com/api/file/" + _0x1f5b04;
                  await _0x320d4c.sendMessage(_0x249f38, {
                    'react': {
                      'text': '⬆',
                      'key': _0x882c16.key
                    }
                  });
                  await _0x320d4c.sendMessage(_0x249f38, {
                    'document': {
                      'url': _0xbc520
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x295a75.title + " - " + _0x1ea9a8.quality + '.mp4',
                    'caption': _0x295a75.title + "\nQuality: " + _0x1ea9a8.quality + "\nPowered by SinhalaSub",
                    'contextInfo': {
                      'mentionedJid': [],
                      'externalAdReply': {
                        'title': _0x295a75.title,
                        'body': "Download powered by Silentlover⁴³²",
                        'mediaType': 0x1,
                        'sourceUrl': _0x1f26c1.link,
                        'thumbnailUrl': _0x295a75.image
                      }
                    }
                  }, {
                    'quoted': _0xfb917c
                  });
                  await _0x320d4c.sendMessage(_0x249f38, {
                    'react': {
                      'text': '✅',
                      'key': _0x882c16.key
                    }
                  });
                } else {
                  await _0x2f241d("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x4b7115) {
            console.error("Error fetching movie details:", _0x4b7115);
            await _0x2f241d("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await _0x2f241d("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x12391f) {
    console.error("Error during search:", _0x12391f);
    _0x2f241d("*An error occurred while searching!*");
  }
});
cmd({
  'pattern': 'gdrive',
  'desc': "To download Gdrive files.",
  'react': '🌐',
  'category': "download",
  'filename': __filename
}, async (_0x4b1d2e, _0x3a50ad, _0x5b2235, {
  from: _0x240db4,
  quoted: _0x3c0f91,
  body: _0x11d8b7,
  isCmd: _0x3e2d30,
  command: _0x1ec78d,
  args: _0x450a82,
  q: _0x3a6f46,
  isGroup: _0x4626d0,
  sender: _0x57bcf1,
  senderNumber: _0x2333f3,
  botNumber2: _0x3b2f5f,
  botNumber: _0x53bf31,
  pushname: _0x4debcd,
  isMe: _0x312552,
  isOwner: _0x8f919,
  groupMetadata: _0x22cb58,
  groupName: _0x6d2498,
  participants: _0x10f853,
  groupAdmins: _0x2f3c3e,
  isBotAdmins: _0x38b2a2,
  isAdmins: _0x5c38ce,
  reply: _0x22014e
}) => {
  try {
    await _0x4b1d2e.sendMessage(_0x240db4, {
      'react': {
        'text': '⬇️',
        'key': _0x3a50ad.key
      }
    });
    if (!_0x3a6f46) {
      return _0x5b2235.reply("Please Give Me a vaild Link...");
    }
    const _0x104ab0 = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x3a6f46 + "&apikey=mnp3grlZ";
    const _0xcf12f3 = await axios.get(_0x104ab0);
    const _0xde2621 = _0xcf12f3.data.result.downloadUrl;
    if (_0xde2621) {
      await _0x4b1d2e.sendMessage(_0x240db4, {
        'react': {
          'text': '⬆️',
          'key': _0x3a50ad.key
        }
      });
      await _0x4b1d2e.sendMessage(_0x240db4, {
        'document': {
          'url': _0xde2621
        },
        'mimetype': _0xcf12f3.data.result.mimetype,
        'fileName': _0xcf12f3.data.result.fileName,
        'caption': "> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²"
      }, {
        'quoted': _0x3a50ad
      });
    }
    await _0x4b1d2e.sendMessage(_0x240db4, {
      'react': {
        'text': '✅',
        'key': _0x3a50ad.key
      }
    });
  } catch (_0x519986) {
    console.log(_0x519986);
  }
});
