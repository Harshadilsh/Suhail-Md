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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_05_55_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA5LFxuICAgICAgICA4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM3LFxuICAgICAgICA3LFxuICAgICAgICA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NixcbiAgICAgICAgNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2LFxuICAgICAgICA4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxOTY0c3RnRlRWM3RFQWJxU3dzbXJmRWlnNXd2b0xud3FITFI4ZDBPcm5ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzOVZiOFZoN1JBQzU0VXBxWmZGMV93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3YjJhYzZlLTFhOWUtNDYzOS04MDBmLTgxNGE3MTE5MTVhZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDQwLFxuICAgICAgMTY5LFxuICAgICAgNTQsXG4gICAgICAxMzMsXG4gICAgICAxMzAsXG4gICAgICAyMjQsXG4gICAgICA2MixcbiAgICAgIDE5OCxcbiAgICAgIDIwMCxcbiAgICAgIDkxLFxuICAgICAgODYsXG4gICAgICAxOTcsXG4gICAgICAxMDgsXG4gICAgICAzMyxcbiAgICAgIDE3NixcbiAgICAgIDE3OCxcbiAgICAgIDE3OSxcbiAgICAgIDUxLFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDkxLFxuICAgICAgMTc5LFxuICAgICAgMjM3LFxuICAgICAgMTU2LFxuICAgICAgNTUsXG4gICAgICAyNTIsXG4gICAgICA2MCxcbiAgICAgIDU0LFxuICAgICAgMTc1LFxuICAgICAgOTMsXG4gICAgICA4OSxcbiAgICAgIDIyMSxcbiAgICAgIDksXG4gICAgICAxMjgsXG4gICAgICAxLFxuICAgICAgMjE3LFxuICAgICAgMTYwLFxuICAgICAgMTcsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUxXRjlFRzVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYxMjk5MzUyOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjMxNTM5OTI5MDkwNDA6NTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTZhanQwRUVMREN4TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzWkd0alJlR0RLV1kyM09vTGQxYllzeGJQQkJCRGtPcitTdUVlaVZkd0NvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdDMkFkRUttbVR4UkRMNWdNZ1FvTVpFTmtGOEQxM1E5OUlkUWxQd2ZOc2x4STJrMUo2U3BadFVDM3lXME9WNEd3clF0SjFXamM3MmF1TSttWGZ4Z0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImw2OFMwVGx6cFhCcThWVDYzUlRMdXZrb0NsR0FYOWhndnlkbXRBdG5GU0p0WXdyR3kyZ0lxT2VlNlFtZERTYVlzVC8xUFNJNERRRUhhckZTNkpkMmp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYxMjk5MzUyOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NjkwMDk5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==


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
