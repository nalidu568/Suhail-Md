const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_44_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyLFxuICAgICAgICA4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDI2LFxuICAgICAgICA5NCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1LFxuICAgICAgICA1LFxuICAgICAgICAxMixcbiAgICAgICAgNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImYxdlN3Y2dwTjBWTHAxSHJmaVlhZW5NbC81c0tYd2QzQXpjQUpFd2l0ZE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBRQldzdmcyVGFPMU9Qc21uZlNKX2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjk4N2Q5MzEtZDRiMC00OTYwLWJmNTItYmFmZjIxNjc4NjMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDIwNCxcbiAgICAgIDIyNyxcbiAgICAgIDUwLFxuICAgICAgMTA4LFxuICAgICAgMjU0LFxuICAgICAgMTk0LFxuICAgICAgMTk3LFxuICAgICAgMjExLFxuICAgICAgMTQ4LFxuICAgICAgMjQxLFxuICAgICAgNTgsXG4gICAgICAxNTYsXG4gICAgICAxMzksXG4gICAgICAxMjcsXG4gICAgICAyLFxuICAgICAgMTIzLFxuICAgICAgMTUwLFxuICAgICAgMTg0LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICAyMjUsXG4gICAgICAyMzEsXG4gICAgICA4NixcbiAgICAgIDI0OSxcbiAgICAgIDU0LFxuICAgICAgMjE4LFxuICAgICAgMjUsXG4gICAgICAyMTIsXG4gICAgICA0NSxcbiAgICAgIDEwMSxcbiAgICAgIDE1OCxcbiAgICAgIDE2OCxcbiAgICAgIDEyNCxcbiAgICAgIDIzNyxcbiAgICAgIDE0MixcbiAgICAgIDE1NyxcbiAgICAgIDE3NyxcbiAgICAgIDEzMixcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5Sk4zV1ZEWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTU5MzAxMzk6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZeX8J2XtyDwnZeh8J2XrvCdl7nwnZe28J2XsfCdmIJcIixcbiAgICBcImxpZFwiOiBcIjIzNzMxNDIwNjg1OTQ5Mzo5N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLalQybTBReW91K3RRWVlCeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIld0ODk0RUx6TGR4cXFVRFdXWGlMamN3QWptaEVyMU9xQktVTnViM01mWGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieU9IQU1OdDdkR2JWK0RiUGlqeWlCa0c0SCs0ZXREVmE5dW5RaCtiUUxPOVJBaTMxaER2WHhHSHVDVnpjM3ZRK3hSTlBkbnBPeVdHNnI5bmJoYjdxQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMTdvQzBPZlFKeVcwUUlTT3I0TUFCcExpeG1wOGYwRGZjdVJEemU1TE1nRVpBMmx3S2NkMTJrWmV6aUNxZEV2VnJGSVVRR0JHVG91YTlBQ3hlR2loQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTU5MzAxMzk6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc3OTA4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdXdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1d0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiejE4aHUwa00xSkVQMzBFYWlZN0pQYzE3ekgxeEVieStRaWRIRlhDaldQND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzAwNzQ3OTIsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Dj_Nalidu",
  ownername:process.env.OWNER_NAME|| "NALIDU",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
