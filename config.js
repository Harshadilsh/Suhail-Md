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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94761299352";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_09_22_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjExLFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgODIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvWlNQMXNtUEwycE5JRHVnWE00SDRMWFcvSjdiNXVrU2lBNkVHK0lwMXVvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuSzlCOHhYWlFIcV9MaFZqc2VTQjdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNjMmYzNTdmLTI1MmMtNGZmNi04NjFiLWYyMDAwY2FmNjMxM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDE4MSxcbiAgICAgIDI0NyxcbiAgICAgIDcyLFxuICAgICAgMTYxLFxuICAgICAgMTk5LFxuICAgICAgODksXG4gICAgICAxNjUsXG4gICAgICAxMzgsXG4gICAgICAxNCxcbiAgICAgIDExNyxcbiAgICAgIDExMCxcbiAgICAgIDE4NSxcbiAgICAgIDgxLFxuICAgICAgMjE3LFxuICAgICAgMTU3LFxuICAgICAgMzEsXG4gICAgICAyMjcsXG4gICAgICAyMjgsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAxNDgsXG4gICAgICA1OSxcbiAgICAgIDIzMSxcbiAgICAgIDczLFxuICAgICAgMTc5LFxuICAgICAgMTczLFxuICAgICAgMTUzLFxuICAgICAgMTU3LFxuICAgICAgMTAsXG4gICAgICA2MSxcbiAgICAgIDE5MCxcbiAgICAgIDgzLFxuICAgICAgNjksXG4gICAgICA1OCxcbiAgICAgIDE2OSxcbiAgICAgIDgyLFxuICAgICAgNDksXG4gICAgICA0MSxcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXOUZEUUY3UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjEyOTkzNTI6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMzE1Mzk5MjkwOTA0MDo1NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJK2FqdDBFRU9XanhiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNaR3RqUmVHREtXWTIzT29MZDFiWXN4YlBCQkJEa09yK1N1RWVpVmR3Q289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUzBGMWh6eDBnMkFVcVlQNVF3VWdwWW5iSEVmeDVDazJ1YkR2NVhtUkxBNW1ZdDBmdGZKdk5pRVRpc0dVWHN0Z1pXMkY4NUdWV00zUEE2N0d5N0ZPQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRUZ3ODhGNmp0UXFOeFFsWTBveFlRc1lvVTZ1azZkV0Z5UFBXMHdrTEd6NXZxcUQrMVpVczZGd1hpL0ZXOFNBdnJ6M1Y2QmJud1ZIUHI3NXhQemVMREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjEyOTkzNTI6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3MDI1NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNeDBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU14MC5qc29uIjogIntcImtleURhdGFcIjpcIkJEaXVjYld0RGFKMUtqdldFVjR2aE4yaGhIOG5hbFlnbFVrdm9lN0VUQ289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2OTAwOTY3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
