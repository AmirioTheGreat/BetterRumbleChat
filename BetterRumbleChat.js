// ==UserScript==
// @name         Rumble Rant TTS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Read tips on rumble streams out loud using WebSpeech API
// @author       MrQianHuZi
// @match        https://rumble.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const emotes = {
        '😆':'https://yt3.ggpht.com/0FLRqpIWPYql08oDl3pYSE_JytvVdSnB8MI4saumn1JeaUa6Boz_9Bvx70QIP3009caHGfHBJA=w48-h48-c-k-nd',
	'⚾️':'https://yt3.ggpht.com/CT_QFIvY2WfvOIJvLqYoVTDx4tpchXWo5-KiLhPlPqn7HoFknoPBY86NNxq8i44MH2JPvw5m4JQ=w48-h48-c-k-nd',
	'😔':'https://yt3.ggpht.com/jTUFpfVfjnfTMvCteNf4v2e1_V730fD14fGtgz4c5rU4Yw-VeDRQOw6vIULWMNxalvGXj1NKdA=w48-h48-c-k-nd',
	  ":VISION:": "https://yt3.ggpht.com/FUCoZvCR6Kt03oPOpY_1NOQMOEswS5hWKDKSmoQvJal1aAhYq7LvhFDoCmSdQhiSKGsweGqD3A=w24-h24-c-k-nd",
  ":SOLAR:": "https://yt3.ggpht.com/eJmsmD9_wmmltD-ETwSpqcBJdm6856VhK1jL0eMVzblDr6K0HLz6tVRDLMVa40TBCA2mMx3ESg=w24-h24-c-k-nd",
  ":HazWut:": "https://yt3.ggpht.com/xxUTdiUmawMq5gKK1SPvfRYzul5LJXYLh2Vm9Zx0BAfXS4HZEdRxPCnZtyZb55XwXQFOlYtjyQ=w24-h24-c-k-nd",
  ":SUNGORILLA:": "https://yt3.ggpht.com/XBXToDY1yY8wleHYs7B0F1YpffkG7Tp-fsVt9HMw52DmqhRzqYPqcFDtiR9X4BRJjxAbAwHZyQ=w24-h24-c-k-nd",
  ":SAMIREBEL:": "https://yt3.ggpht.com/kCJXsN8Jb7xv9JGMl7q2CCTkAT0jUEdQHSgm9xJXAOG-0c0rAQ6JXBGug219LPYggQlwR7kT=w24-h24-c-k-nd",
  ":5Head:": "https://yt3.ggpht.com/NQMRhrsKBk5NJS8dq4izJSAB6vHcxbFE25r5mgCLPD7zHfqX92mCMZifqxWGqQ3mdxEYzaBE=w24-h24-c-k-nd",
  ":CRUEL:": "https://yt3.ggpht.com/9ziio1cqsfmlRlOEYenquFoZD9V3LdnIZdlISawv-QXp2-hHojuOxJLu1SUFQCPLbJOSsd8ipA=w24-h24-c-k-nd",
  ":KRABS:": "https://yt3.ggpht.com/cMJMmRlO_i48Nwjj8ch2vndV1JFnSeUy6Lh1Oz3Fe_bY-l6FZierVu61VOISP70UIPYtglmHGg=w24-h24-c-k-nd",
  ":TANKIE:": "https://yt3.ggpht.com/Y6W4-udZiWeDnxof2c-u5PA81UEkZ2jJrh9lP1rzpIy5BHwUMx7uhog5ymkKbWRbteWPHg83DA=w24-h24-c-k-nd",
  ":MECHATANKE:": "https://yt3.ggpht.com/gcrXpfUUpJpMzysol81-gzigC9GPrmg-UtL3QI0UK14NdmULNRUufi1I1Ed9y9A7FDO52OKk=w24-h24-c-k-nd",
  ":BASED:": "https://yt3.ggpht.com/r31zlBfTICIsN3nc98PFTdaKBRDJEmEisMtaFkHMeGzGLnqlEx6BZJIo62wKky6ma2CVwLOIMg=w24-h24-c-k-nd",
  ":KEKW:": "https://yt3.ggpht.com/0FLRqpIWPYql08oDl3pYSE_JytvVdSnB8MI4saumn1JeaUa6Boz_9Bvx70QIP3009caHGfHBJA=w24-h24-c-k-nd",
  ":Pog:": "https://yt3.ggpht.com/gKBwdnyylvKn1dD9o0lRhQXjx1pYAPftzCQPnPyTluDjwdhmr1LEk1VHTj-dTWOwqko2i-ntWw=w24-h24-c-k-nd",
  ":CPUSA2036:": "https://yt3.ggpht.com/NCNJ0AOXxUeIOZ3PZnzjdeaGkWMSnWUadrD-8rQUco3IaCA9DLpBeKBPYMCTu6ALk7U7HTHSNQ=w24-h24-c-k-nd",
  ":KEKWait:": "https://yt3.ggpht.com/jypN1BGMUnlGKAFLSpcsiMIRvw3Mb3JnQ-ca8erL8abx0FMAlUKd6F5_eQPGBvwdmoUKuvmPccw=w24-h24-c-k-nd",
  ":ANGLOBOX:": "https://yt3.ggpht.com/RGrzWPEzJCyz94yBb_wTb1U3NKKolGDc3R57YzMwAYvTmQBJTQpnzyWkbZadxHoBPElKqIMRsQ=w24-h24-c-k-nd",
  ":GLOW:": "https://yt3.ggpht.com/WGbCBHgmRfmUn7MQikZf_6f2r-WQbKmZ4ZL7bbWAiHjp4AILq5S3C9KKc9D-i18xLqKcs8eHbQ=w24-h24-c-k-nd",
  ":BAN:": "https://yt3.ggpht.com/yyafi5vqtBuozyI7pU0dHAtb23PnBo8yPb9USgsR_sxr4Yz1E8txzo7JainhONSuA_9pz59DbA=w24-h24-c-k-nd",
  ":INFRATROOP:": "https://yt3.ggpht.com/8o-EThpx1NHmV4tgLFb-cOOaEXWLBd_BYe7FY0Idr4SxB-a0SPzsVbNl3k9O7LrewmaR5fhy5Ns=w24-h24-c-k-nd",
  ":Soynerd:": "https://yt3.ggpht.com/u3JGpmizwBSvnZf3GSEfDXsPE-WQAsRUSNBtfc9ht-ynFiiDZHU52g_mRgxhbWE6LfGFZ6WG=w24-h24-c-k-nd",
  ":ANTINATO:": "https://yt3.ggpht.com/Dq5CQ4wyp3WUy_W4m5WotVG_Grrkrh3xvPoBu5_BQT-Q5X9j9-wsqcoHJbL-g6IZxbwCrMyfRQ=w24-h24-c-k-nd",
  ":RedPeter:": "https://yt3.ggpht.com/I_f_vv2X5V6S13mexYEd0mozVhpogkKT44b5xu7aLJ5bCxW1UfU6zmTDJiSbYEb-WIh1xvIZKw=w24-h24-c-k-nd",
  ":MECHAape:": "https://yt3.ggpht.com/XRzvRxysTzoqgp87rw9xQDB1l30NGFFe-XEP_AxZvgUSayisYf3FY-tHkYS9Bw4JjuDpyFAcrfw=w24-h24-c-k-nd",
  ":SOLARMECHA:": "https://yt3.ggpht.com/XZ53hqpl48RUgQpIjBLpgfUwfgZV0NmwxmMZL2InfU99ihKBRp5Z3-7xOJDIGUhxK_7R2F8sNNI=w24-h24-c-k-nd",
  ":SKYNET2036:": "https://yt3.ggpht.com/jBKL9Ht3S3yq_E7IjYMcywhT8IOhFRIr7xkqzM2-BK4_Lv7MQUtNoiOFVPAd4EWKdpy_SkxrfA=w24-h24-c-k-nd",
  ":WOKEFUTURE:": "https://yt3.ggpht.com/jYYvRycThqoXlD9mcopUtHQh8TkUP4ZavdkM0MtPb9J065DwTAh9SeJVLo_XO8ItMF9Cni9W=w24-h24-c-k-nd",
  ":Sadge:": "https://yt3.ggpht.com/jTUFpfVfjnfTMvCteNf4v2e1_V730fD14fGtgz4c5rU4Yw-VeDRQOw6vIULWMNxalvGXj1NKdA=w24-h24-c-k-nd",
  ":DuginBASED:": "https://yt3.ggpht.com/CT_QFIvY2WfvOIJvLqYoVTDx4tpchXWo5-KiLhPlPqn7HoFknoPBY86NNxq8i44MH2JPvw5m4JQ=w24-h24-c-k-nd",
  ":Trumptroll:": "https://yt3.ggpht.com/_i4fCE7YFcGtqol_g8-BMnSNs88zBItMtlTtc7w71raYIhKTM3pojR5I28PMpxdEHqHbx3e7=w24-h24-c-k-nd",
  ":REDMAGA:": "https://yt3.ggpht.com/E1mnDKYecgFOe6YRuMOfPotVBTERr8TyoakfvxGV1bSlIMy6uAW3COb9skLTghDsPF_WUFFejZw=w24-h24-c-k-nd",
  ":Hypers:": "https://yt3.ggpht.com/pgKgFAqVDCvcTT2Ct7h8mhuOg85YoE7ow3SoUbUdfKmcAjyh7twJ4szyIcueAN77utYAsGcmPkE=w24-h24-c-k-nd",
  ":Copium:": "https://yt3.ggpht.com/ouy329oZaKHOX3I_LVs4BNDuRDiaQzptnQO7oqrgPcAtkUu9pIza8PfIFXfmcpCw06GLhLHDuw=w24-h24-c-k-nd"
    };
    let currentMessageNumber = 1;
    function replaceEmotesForNthMessage(n) {
        const messageElem = document.querySelector(`#chat-history-list .chat-history--row:nth-child(${n}) .chat-history--message`);
        let messageHTML = messageElem.innerHTML;
        for (const emote of Object.entries(emotes)) {
	    const oldValue = messageElem.innerHTML;
	    messageElem.innerHTML = messageElem.innerHTML.replaceAll(emote[0], '');
            if (messageElem.innerHTML.length < oldValue.length) {
                const imgTag = `<img src="${emote[1]}" style="width:24px;height:24px;">`;
                messageHTML = messageHTML.replaceAll(emote[0], imgTag);
            }
        }
        messageElem.innerHTML = messageHTML;
    }
    function replaceEmotesForNewMessages() {
        const numMessages = document.querySelectorAll('#chat-history-list .chat-history--row').length;
        for (let i = currentMessageNumber; i <= numMessages; i++ ) {
            replaceEmotesForNthMessage(i);
        }
        currentMessageNumber = numMessages;
    }
    function initChat() {
        console.log('initializing tts...');
        const rumbleChatText = document.querySelector('aside script:last-of-type').textContent;
        const chatID = rumbleChatText.split(',')[1].trim();
        const chatStream = new EventSource('https://web9.rumble.com/chat/api/chat/'+chatID+'/stream');
        chatStream.onmessage = (e) => {
            const data = JSON.parse(e.data);
            if (data.type === "messages") {
                const users = data.data.users;
                const userMap = {};
                for (const user of users) {
                    userMap[user.id] = user.username;
                }
                const numMessages = document.querySelectorAll('#chat-history-list .chat-history--row').length;
                for (let i = 0; i < data.data.messages.length; i++) {
                    const message = data.data.messages[i];
                    if (message.rant) {
                        const username = userMap[message.user_id];
                        const donationAmount = message.rant.price_cents/100;
                        let utterance = new SpeechSynthesisUtterance(username + " donated " + donationAmount + " dollars. " + message.text);
                        window.speechSynthesis.speak(utterance);
                    } else if (message.text === ':TEST12345:') {
			let utterance = new SpeechSynthesisUtterance('Joe Sims is a small D democrat');
                        window.speechSynthesis.speak(utterance);
		    }
                }
                setTimeout(() => {
                    replaceEmotesForNewMessages();
                }, 100);
            } else if (data.type === "init") {
                setTimeout(() => {
                    replaceEmotesForNewMessages();
                }, 100);
            }
        }
    }

    initChat();
})();
