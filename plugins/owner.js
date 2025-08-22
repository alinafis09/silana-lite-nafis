import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
《Developer Information》\n\n
《Bot channel》\n https://whatsapp.com/channel/0029VbB8fdr4inolWgXQ8l2a\n

《insta》\ninstagram.com//nafis.ali9

《chat owner》\nhttps://wa.me//212719558797

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
