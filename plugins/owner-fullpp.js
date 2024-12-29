import axios from 'axios';

let handler = async (m, { conn, text }) => {
    if (!text || !text.startsWith('https://')) {
        throw `*Please provide a valid image URL after the command.*`;
    }

    try {
        let imageUrl = text.trim();
        let response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        let imageBuffer = Buffer.from(response.data, 'binary');
        await conn.updateProfilePicture(conn.user.id, { buffer: imageBuffer });
        m.react('✅');
        m.reply(`*Profile picture updated successfully!*`);
    } catch (err) {
        console.error(err);
        m.reply(`*Failed to update the profile picture:*\n${err.message || err}`);
    }
};

handler.help = ['fullpp'];
handler.tags = ['owner'];
handler.command = /^(fullpp)$/i;
handler.owner = true;

export default handler;
