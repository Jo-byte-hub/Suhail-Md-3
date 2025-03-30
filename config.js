const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="okoyejoshi@gmail.com"
global.location="Lahore, Nigeria."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 𝐉𝐎𝐒𝐇𝐔𝐀" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349115983460";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_04_03_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICAxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU3LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicVNIYmpLcWhYWHo2Q2ZuYms5aGVwOGpkOGttRlZGSGFRMEZTamhwQ1pHMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSWh3T3NpRHNTWWEwZ043aENiV0JKQVwiLFxuICBcInBob25lSWRcIjogXCJlNzRhZTNiYy1hMjlkLTQyOTQtYTg3MS1lMGUzNzExMjk5NTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgMTY5LFxuICAgICAgMjA3LFxuICAgICAgMTQ3LFxuICAgICAgMTgxLFxuICAgICAgMTQsXG4gICAgICAxMTQsXG4gICAgICAxODUsXG4gICAgICAxNzQsXG4gICAgICA1MyxcbiAgICAgIDQ1LFxuICAgICAgMjM4LFxuICAgICAgNSxcbiAgICAgIDIyNixcbiAgICAgIDE1LFxuICAgICAgMTM2LFxuICAgICAgMjM4LFxuICAgICAgMTQxLFxuICAgICAgMjM2LFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgMTc4LFxuICAgICAgOTEsXG4gICAgICAxNjYsXG4gICAgICAxOTIsXG4gICAgICA2LFxuICAgICAgMTM1LFxuICAgICAgNzcsXG4gICAgICA4MyxcbiAgICAgIDE5OCxcbiAgICAgIDE5NCxcbiAgICAgIDE3NyxcbiAgICAgIDIzNixcbiAgICAgIDY2LFxuICAgICAgMjQsXG4gICAgICA4OCxcbiAgICAgIDM3LFxuICAgICAgMjQyLFxuICAgICAgMTI2LFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5ES1ZZRzZaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE1OTgzNDYwOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTU1MDQ3OTkxOTEyNTU6MjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkhlaExjQ0VMcWtvYjhHR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRd3JaZVQ3Q000cXBKNU9ydHBBRDI4VTIwb29tTEs1L3EvSVVMYUtnNldFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdXak53bWVMOXRxMy9PMWF0QkNjQmx1TkQrUmoxOVNKZGRxOEpYYTVGTURybmhjOWQzV2tuRVBKaWpZOWY0ZC9uS241d0FOLzVWcjhkREZ2eTEzSkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRBbEhoWXpvanppV2RKaXNvQlF5Y0hyeUYyaG5UYXV1RmloSmZXM0JlcENPVDNoaWk5Qklqa0t6T09jUHdvRWJMbS9VbnpOeHJDUVlzWFJ6WmFBSEFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTU5ODM0NjA6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzI3ODY1NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "> 𝐉𝐨𝐬𝐡𝐮𝐚" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "234915983460",
  packname: process.env.PACK_NAME || "𝐉𝐨𝐬𝐡𝐮𝐚",
  botname : process.env.BOT_NAME  || " 𝐉𝐎𝐒𝐇𝐓𝐄𝐂𝐇",
  ownername:process.env.OWNER_NAME|| "𝐉𝐎𝐒𝐇𝐔𝐀",


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
