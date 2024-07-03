//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "keizzakeith@gmail.com";
global.location = "Migori.Kenya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Keithkeizzah/KEITH-MD2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8f30391e98707c9344db0.jpg";
global.devs = "233207415469";
global.sudo = process.env.SUDO || "233207415469";
global.owner = process.env.OWNER_NUMBER || "254748387615";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://keithweb-85c830c44249.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ljcjFuZG10ZGlGelpHZDVleDVJWlJLbWZxeWJ0c1h6ejFEaWphamhFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1kNTdNS1BpK1FzV1I1M0MvNW1ERmZPUnJJRE1ISjh1MC8wNzRva1htcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SzFGT3pDSVFZU3pDR0JSalpLMVp4REpvTlR0MGxzSkREKzZ6V2ZLN0dRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUzNmLzZHbXh2R3RrajBvTXlhalpIMkFLTHBZbkdvNjBWL0FvQytQVkZrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLU0xxT3lpYnhiK2h4d0Vmb3piblg4VUNMeW1CamRYYTN0aWZ3eEV0SDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5MY2FqaStvS0dPY0JJc2UzMktIajlJNUVJV1lXdE9kT21HU0tjMlFoQzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEtienBjUGtpSkN4TGJra213UGkwNW9Pb2lTcndzamVSZkVtN2R5aHRtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDYreW5lUkpBMWRoOU9PTE83MjRjenlRMW55cG9QZm02Yno0WWxoR3h4Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IisxbzZrblVOcEtZZDRNWXEvdUdXL1Z0elpKV20wYksyQU9ua2UwT1djOGNkdVdDRmo1WjdNZElNeWwxQytzZTZuMTh6eTFaQW81RitLVDQ1RDlZWGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6InV6UU95LzdSem12dlZGN0p5VVJET3UxMHdQNjA3dkxBVXlLREhJUlBZRWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRoR29FOHF0UjFxV1hpbzcwal9lUWciLCJwaG9uZUlkIjoiN2EwMmM4ODUtNGYzNC00MzYxLWJmMmUtNzNkZDZlY2FkZWRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBuckhGOXg4dFdld2Y0c3d0ZEtOSllYY1oyND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHd1B5YXA2Vnp4R1pnUjRoY1dlYWk4cGpqeVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQlhETkpUSzciLCJtZSI6eyJpZCI6IjIzMzIwNzQxNTQ2OToyOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0NTMGVVTkVKblBsclFHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM1FLUHo4QVlGRkdQa1ZZdUtqYmlML293RjZPMndTL3JjWEhUdm14Vnl6ST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQlczOU1ORkpsSXNNcHFWWEF1WFQvRjJiSk9nUitzWDlmbGpDQytaNHJQTEsxUkhITm5icW9RYmVWN3VBQnpQanhjaFNGRVdUSHRUckxmU0RLSzIvQWc9PSIsImRldmljZVNpZ25hdHVyZSI6InVSZmNiMVIwMVBQNTNVb0ZCNGlhUkNITVJTY0pPdElzQjVXK3l1OW5PMlNLOGt2eURHWHVKSXVtRmt3MGNIMnpUbjQweS9ySWpyV0VFaFRrQm5yQmh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzMjA3NDE1NDY5OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQwQ2o4L0FHQlJSajVGV0xpbzI0aS82TUJlanRzRXY2M0Z4MDc1c1Zjc3kifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDAzNTIzNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMa3cifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " 𝐊𝐄𝐈𝐓𝐇 𝐌𝐃",
  author: process.env.PACK_AUTHER || "𝐊𝐄𝐈𝐓𝐇",
  packname: process.env.PACK_NAME || "👁",
  botname: process.env.BOT_NAME || "𝐊𝐄𝐈𝐓𝐇-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "keithkeizzah",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KEITH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
