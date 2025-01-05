import fs from 'fs';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let img = "https://avatars.githubusercontent.com/u/120536940?v=4";
    let forwardMessage = `𝐂𝐚𝐮𝐬𝐞 𝐭𝐡𝐞 𝐰𝐞𝐚𝐤 𝐡𝐚𝐯𝐞 𝐧𝐨 𝐫𝐢𝐠𝐡𝐭𝐬 🫱`;
    let url = "https://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c";
    let murl = "https://instagram.com/abraham.dwamena.182";
    let hash = global.botname;
    let audioUrl = "https://cdn.ironman.my.id/q/DDEFR.mp4";

    let doc = {
      image: { url: img },
      caption: forwardMessage,
      contextInfo: {
        externalAdReply: {
          title: "↺ |◁ II ▷| ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
          showAdAttribution: true
        }
      }
    };

    await conn.sendMessage(m.chat, doc, { quoted: m });
    await conn.sendMessage(
      m.chat,
      { audio: { url: audioUrl }, mimetype: 'audio/mpeg', ptt: true },
      { quoted: m }
    );
  } catch (err) {
    throw '*Error!*';
  }
};

handler.customPrefix = /^(Arise|Ab|bot|test)$/i;
handler.command = new RegExp();

export default handler;
