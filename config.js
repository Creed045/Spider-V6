//Bot by 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒//


require("./all/module")
global.owner = "254742491666" 
global.namaCreator = "𝕶𝖎𝖓𝖌 𝕾𝖆𝖒" 
global.autoJoin = false 
global.antilink = false 
global.versisc = '6.0' 
global.codeInvite = "https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e"
global.isLink = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.sessionName = '{"noiseKey":{"private":{"type":"Buffer","data":"iPSUJmc1D4j2WlluC51ADGm4OaeJISNZ3iBcJg2fGUo="},"public":{"type":"Buffer","data":"ylV44AIqwrFD/7Uem/mjJYvQRos6ckyiuWRn9llIJwE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"gB0kOc/3dAzzfsaoLrPeouGkVsDjM/7aJ8A0pvzj9E8="},"public":{"type":"Buffer","data":"qIThB3Zbrj8/kpysOuJev6PB7Pgwz4tiO6HSR3ULSlI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MMUZWTkmi42XTi9+HWxwxRJiP1Mab/jhjz6z5pWrpEs="},"public":{"type":"Buffer","data":"pZ8XFdS98TOPT7R0rtaz5gPOv6FDA3m3Z0uobusWZ1U="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"UJpC8ziFZdYPIciUc1ylxytjeyzSbx+POQcwEwXsTH0="},"public":{"type":"Buffer","data":"K9noVwFWOjnhOIS1XUkA8G9SMVYTKNC8/Ep7bitFTjg="}},"signature":{"type":"Buffer","data":"amvuLJEVKEzshfqOe5TCd8ADADFg/ywVTLm++TRnkQ/8/2AxcbE3DjQk8jLwy1xp/zL+cg5tXuidL+vTq0e3gQ=="},"keyId":1},"registrationId":93,"advSecretKey":"zrxoNaWtUyQQlU0Ph1VSn/MbiSPQtdu/KY5ziapGtoA=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"813-WUPGTuKl-a6us7Er0A","phoneId":"b3a6e47e-3c19-42ff-bab8-c8489f8ddc94","identityId":{"type":"Buffer","data":"P0+c1bKFI+a/cAf1jDh0gaeEv2U="},"registered":true,"backupToken":{"type":"Buffer","data":"o2ppTnm6nsCPtKjzdMDMxQO2MWg="},"registration":{},"pairingCode":"NR6KWH11","me":{"id":"2348163252131:24@s.whatsapp.net"},"account":{"details":"CIvxjO0GEIX55rYGGAQgACgA","accountSignatureKey":"0wv9lidB46j78wKUkrXvohDh71ZiHcjcph8XcO9jsw0=","accountSignature":"mTXP9rHsPO6EQV8wA5FVAXi9jju6Vjn6imuuGj0lq+kR0vJ9jZdzEaAErGdM12XX9626Tu/UGVBT8u3gLLX0Aw==","deviceSignature":"ed7xU1WpmZuiieP0fC8oIoka0t9yp2uYSSprLS8YSRB8AV/KVylcHldg7BuR4nTIkOoXWLDmWAtGAxOciy/0jA=="},"signalIdentities":[{"identifier":{"name":"2348163252131:24@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BdML/ZYnQeOo+/MClJK176IQ4e9WYh3I3KYfF3DvY7MN"}}],"platform":"android","lastAccountSyncTimestamp":1725545618,"myAppStateKeyId":"AAAAAICk"}'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "𝕶𝖎𝖓𝖌 𝕾𝖆𝖒" 
global.author = "𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6" 
global.jumlah = "5" 
global.namabot = "𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6" 
global.domain = 'https://kingsam.sellerpanelerol.me' // your domian
global.apikey = 'ptla_VRxkhvalZQ3EhHyAax9QYxgT5cbsx2MrO69gBpVZmmd' // Isi Apikey Plta Lu
global.capikey = 'ptlc_sQ3d4GxCiztyV5DbhUJSWtvnSCyKzeMXoWIr2lVyqal' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.apilinode = ''
global.apitokendo = ''
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
