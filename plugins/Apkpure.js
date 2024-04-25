import fetch from 'node-fetch';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!text) throw 'Ex: ' + usedPrefix + command + ' whatsapp';

    await m.reply('*🕒In progress, please wait...📥*');

    let res = await apk(text);
    
    await conn.sendMessage(m.chat, {
    image: { url: res.icon },
    caption: `*Name:* ${res.name}\n*Downloads:* ${res.dc}\n*Package:* ${res.path}\n*File Size:* ${res.size}`*https://instagram.com/Hlimi_Imran*,
    footer: '_Apk files..._',
  });
    
    const fileName = `${res.path}.${res.format}`;
    await conn.sendMessage(
    m.chat,
    { document: { url: res.dl }, mimetype: res.mimetype, fileName: fileName },
    { quoted: m }
  );
}

handler.command = /^(apkpure)$/i;
handler.help = ['apkpure'];
handler.tags = ['downloader'];
export default handler;

async function apk(text) {
  let response = await fetch(`https://energetic-charm-mastodon.glitch.me/search?q=${text}`);
  let $ = await response.json();
  let name = $.appName;
  let icon = $.image;
  let dl = $.Downloadlink;
  let format = $.appFormat;
  if(!dl) throw 'Can\'t download the apk!';
  let dc = $.downloadCount;
  let path = $.packageName;
  let mimetype = (await fetch(dl, { method: 'head' })).headers.get('content-type');
  const getsize = (await fetch(dl, { method: 'head' })).headers.get('Content-Length');
  if (getsize > 9500000000) {
  throw 'حجم ملف apk كبير جدًا. الحد الأقصى لحجم التنزيل هو 500 ميغابايت.';
  }
  let size = formatBytes(parseInt(getsize));
  return { name, icon, dl, dc, path, format, size, mimetype}
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
