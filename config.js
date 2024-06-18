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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94740944923";




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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_04_37_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAzLFxuICAgICAgICA1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFSY2c1aTFPTDVtN1dIRzNpWXQ3SFNTNUE4YmRrQUpNVXc5UUtxOHRMR1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDA5NDQ5MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQkI4NkU1MDMxQkIzOTlDMjVEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODY4NTQ1MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJNk1zQm1zUVFLT1JoNFZLWVFJTXdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRiZGJiYWRiLTZlM2MtNGE2MS05Zjk2LTNmMTEyZGE0MjU5Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICAxNjAsXG4gICAgICAzNixcbiAgICAgIDg0LFxuICAgICAgMTE4LFxuICAgICAgMjMyLFxuICAgICAgNjcsXG4gICAgICAyNTUsXG4gICAgICAxMzQsXG4gICAgICAxMzUsXG4gICAgICAyMzgsXG4gICAgICAyNDYsXG4gICAgICAxNDAsXG4gICAgICAxMzYsXG4gICAgICAyMzUsXG4gICAgICAyOSxcbiAgICAgIDk1LFxuICAgICAgMjA0LFxuICAgICAgMTI3LFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMTEyLFxuICAgICAgMjQ3LFxuICAgICAgMTUsXG4gICAgICAxOCxcbiAgICAgIDgwLFxuICAgICAgMTgxLFxuICAgICAgMTg0LFxuICAgICAgMzMsXG4gICAgICAxNzksXG4gICAgICAxMTYsXG4gICAgICAyNDksXG4gICAgICAyMjAsXG4gICAgICAxNDMsXG4gICAgICA4OCxcbiAgICAgIDE0MixcbiAgICAgIDIyOSxcbiAgICAgIDExOCxcbiAgICAgIDE0NSxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCRDhCTTFYOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDA5NDQ5MjM6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNTE3NDMxMjgyOTA0NzoxN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJIXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS9JOWZBTEVJV2V4TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJabTNGYWQ1d0QwaXFwVHhQdm1hUnoxSS9GNjJxMG90c1hBS05tUkJwbUdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkk1TXg1aXRPbGNDamlmaldpN2ZkQjhQQUpNZk12RlFNL016YUIxd1hOUmJQcnhTd3p4NitYbXU5YVZlQ3pZWm9hMHREZGduTXprRE5ZWVQ3cW02eWlnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJVT3hnNmJ3dTNjNXFLbUtLVVNia2R4aWZxcGlmWEN3cVFQL0d1WWswWkZNY2FsMGJIR05WQ2t6RGsxdzJIRWZTbnV6MnI2by8wVWtPZ0tOZTd2ekFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQwOTQ0OTIzOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4Njg1NDQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXV4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBdXguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmM2hhV2lPa0hNc3FxZXAxdzdwcitJTHZ5NzMxZU8xd1FOTVFUUmdqOGg4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxODk1OTcyNjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODY4NTQ0OTQyNFwifSIKfQ==


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
