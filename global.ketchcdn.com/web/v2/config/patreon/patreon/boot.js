!function(){var e={"organization":{"code":"patreon"},"environments":[{"code":"production","pattern":"cGF0cmVvbi5jb20=","hash":"15863506301364899067"},{"code":"staging","pattern":"c3RhZ2luZy5wYXRyZW9uLmNvbQ==","hash":"8572469233714453672"},{"code":"vercel.app","pattern":"dmVyY2VsLmFwcA==","hash":"8101620525445747151"}],"identities":{"_mkto_trk":{"type":"cookie","variable":"_mkto_trk","format":"string","priority":1},"deviceID":{"type":"window","variable":"amplitude.getInstance().options.deviceId","format":"string","priority":1},"patreonacctid":{"type":"window","variable":"window.patreon.userId","format":"string","priority":5},"patreondeviceid":{"type":"cookie","variable":"patreon_device_id","format":"string","priority":1},"visitorID":{"type":"window","variable":"window.pendo.visitorId","format":"string","priority":1}},"scripts":["https://cdn.ketchjs.com/lanyard/v1/lanyard.js","https://cdn.ketchjs.com/plugins/v1/plugins.js","https://cdn.ketchjs.com/ketchtag/stable/v2.12/ketch.js"],"languages":[{"code":"en","englishName":"English","nativeName":"English"}],"services":{"lanyard":"https://global.ketchcdn.com/transom/route/switchbit/lanyard/patreon/lanyard.js","scriptHost":"https://cdn.ketchjs.com","shoreline":"https://global.ketchcdn.com/web/v2/"},"options":{"appDivs":"hubspot-messages-iframe-container"},"property":{"code":"patreon","name":"Patreon Web","platform":"WEB"},"jurisdiction":{"defaultScopeCode":"default","scopes":{"AT":"gdpreea","BE":"gdpreea","BG":"gdpreea","CA":"caslca","CY":"gdpreea","CZ":"gdpreea","DE":"gdpreea","DK":"gdpreea","EE":"gdpreea","ES":"gdpreea","FI":"gdpreea","FO":"gdpreea","FR":"gdpreea","GB":"gdpreea","GF":"gdpreea","GG":"gdpreea","GP":"gdpreea","GR":"gdpreea","HR":"gdpreea","HU":"gdpreea","IE":"gdpreea","IM":"gdpreea","IS":"gdpreea","IT":"gdpreea","JE":"gdpreea","LI":"gdpreea","LT":"gdpreea","LU":"gdpreea","LV":"gdpreea","MF":"gdpreea","MQ":"gdpreea","MT":"gdpreea","NL":"gdpreea","NO":"gdpreea","PL":"gdpreea","PT":"gdpreea","RE":"gdpreea","RO":"gdpreea","SE":"gdpreea","SI":"gdpreea","SJ":"gdpreea","SK":"gdpreea","US-AK":"usgeneral","US-AL":"usgeneral","US-AR":"usgeneral","US-AZ":"usgeneral","US-CA":"ccpaus","US-CO":"usgeneral","US-CT":"usgeneral","US-DC":"usgeneral","US-DE":"usgeneral","US-FL":"usgeneral","US-GA":"usgeneral","US-HI":"usgeneral","US-IA":"usgeneral","US-ID":"usgeneral","US-IL":"usgeneral","US-IN":"usgeneral","US-KS":"usgeneral","US-KY":"usgeneral","US-LA":"usgeneral","US-MA":"usgeneral","US-MD":"usgeneral","US-ME":"usgeneral","US-MI":"usgeneral","US-MN":"usgeneral","US-MO":"usgeneral","US-MS":"usgeneral","US-MT":"usgeneral","US-NC":"usgeneral","US-ND":"usgeneral","US-NE":"usgeneral","US-NH":"usgeneral","US-NJ":"usgeneral","US-NM":"usgeneral","US-NV":"usgeneral","US-NY":"usgeneral","US-OH":"usgeneral","US-OK":"usgeneral","US-OR":"usgeneral","US-PA":"usgeneral","US-RI":"usgeneral","US-SC":"usgeneral","US-SD":"usgeneral","US-TN":"usgeneral","US-TX":"usgeneral","US-UT":"usgeneral","US-VA":"usgeneral","US-VT":"usgeneral","US-WA":"usgeneral","US-WI":"usgeneral","US-WV":"usgeneral","US-WY":"usgeneral","YT":"gdpreea"},"defaultJurisdictionCode":"default","jurisdictions":{"AT":"gdpreea","BE":"gdpreea","BG":"gdpreea","CA":"caslca","CY":"gdpreea","CZ":"gdpreea","DE":"gdpreea","DK":"gdpreea","EE":"gdpreea","ES":"gdpreea","FI":"gdpreea","FO":"gdpreea","FR":"gdpreea","GB":"gdpreea","GF":"gdpreea","GG":"gdpreea","GP":"gdpreea","GR":"gdpreea","HR":"gdpreea","HU":"gdpreea","IE":"gdpreea","IM":"gdpreea","IS":"gdpreea","IT":"gdpreea","JE":"gdpreea","LI":"gdpreea","LT":"gdpreea","LU":"gdpreea","LV":"gdpreea","MF":"gdpreea","MQ":"gdpreea","MT":"gdpreea","NL":"gdpreea","NO":"gdpreea","PL":"gdpreea","PT":"gdpreea","RE":"gdpreea","RO":"gdpreea","SE":"gdpreea","SI":"gdpreea","SJ":"gdpreea","SK":"gdpreea","US-AK":"usgeneral","US-AL":"usgeneral","US-AR":"usgeneral","US-AZ":"usgeneral","US-CA":"ccpaus","US-CO":"usgeneral","US-CT":"usgeneral","US-DC":"usgeneral","US-DE":"usgeneral","US-FL":"usgeneral","US-GA":"usgeneral","US-HI":"usgeneral","US-IA":"usgeneral","US-ID":"usgeneral","US-IL":"usgeneral","US-IN":"usgeneral","US-KS":"usgeneral","US-KY":"usgeneral","US-LA":"usgeneral","US-MA":"usgeneral","US-MD":"usgeneral","US-ME":"usgeneral","US-MI":"usgeneral","US-MN":"usgeneral","US-MO":"usgeneral","US-MS":"usgeneral","US-MT":"usgeneral","US-NC":"usgeneral","US-ND":"usgeneral","US-NE":"usgeneral","US-NH":"usgeneral","US-NJ":"usgeneral","US-NM":"usgeneral","US-NV":"usgeneral","US-NY":"usgeneral","US-OH":"usgeneral","US-OK":"usgeneral","US-OR":"usgeneral","US-PA":"usgeneral","US-RI":"usgeneral","US-SC":"usgeneral","US-SD":"usgeneral","US-TN":"usgeneral","US-TX":"usgeneral","US-UT":"usgeneral","US-VA":"usgeneral","US-VT":"usgeneral","US-WA":"usgeneral","US-WI":"usgeneral","US-WV":"usgeneral","US-WY":"usgeneral","YT":"gdpreea"}}};window.semaphore=window.semaphore||[],window.ketch=function(){window.semaphore.push(arguments)},window.semaphore.unshift(["init",e]);for(var n=document.getElementsByTagName("head")[0],t=0;t<e.scripts.length;t++){var i=document.createElement("script");i.type="text/javascript",i.defer=i.async=!0,i.src=e.scripts[t],n.appendChild(i)}}();