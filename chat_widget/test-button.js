var channelNameOld;

window.addEventListener('onWidgetLoad', function (obj) {
    channelNameOld = obj.detail.channel.username;
});

window.addEventListener('onEventReceived', function (obj) {
    if (obj.detail.event.listener === 'widget-button') {
        if (obj.detail.event.field === 'broadcasterMessage') {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": 1688895263266,
                            "tags": {
                                "badge-info": "subscriber/14",
                                "badges": "broadcaster/1,subscriber/0",
                                "color": "#FF69B4",
                                "display-name": channelNameOld,
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "54b903a4-1130-4c46-820b-f589b7102c4b",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "146575108",
                                "subscriber": "1",
                                "tmi-sent-ts": "1688895262653",
                                "turbo": "0",
                                "user-id": "146575108",
                                "user-type": ""
                            },
                            "nick": channelNameOld,
                            "userId": "146575108",
                            "displayName": channelNameOld,
                            "displayColor": "#FF69B4",
                            "badges": [
                                {
                                    "type": "broadcaster",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                                    "description": "Broadcaster"
                                },
                                {
                                    "type": "subscriber",
                                    "version": "0",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                    "description": "Subscriber"
                                }
                            ],
                            "channel": channelNameOld,
                            "text": "This is a broadcaster message!",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "54b903a4-1130-4c46-820b-f589b7102c4b"
                        },
                        "renderedText": "This is a broadcaster message!"
                    }
                }
            });
            window.dispatchEvent(emulated);
        } else if (obj.detail.event.field === 'moderatorMessage') {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": 1688897515520,
                            "tags": {
                                "badge-info": "",
                                "badges": "moderator/1",
                                "color": "#1E90FF",
                                "display-name": "SomeMod",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "314588ea-eb54-4047-bdd9-7d2f6e3bbd68",
                                "mod": "1",
                                "returning-chatter": "0",
                                "room-id": "146575108",
                                "subscriber": "0",
                                "tmi-sent-ts": "1688897514912",
                                "turbo": "0",
                                "user-id": "882005875",
                                "user-type": "mod"
                            },
                            "nick": "somemod",
                            "userId": "882005875",
                            "displayName": "SomeMod",
                            "displayColor": "#1E90FF",
                            "badges": [
                                {
                                    "type": "moderator",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
                                    "description": "Moderator"
                                }
                            ],
                            "channel": channelNameOld,
                            "text": "Mod check modCheck",
                            "isAction": false,
                            "emotes": [
                                {
                                    "type": "bttv",
                                    "name": "modCheck",
                                    "id": "5d7eefb7c0652668c9e4d394",
                                    "gif": true,
                                    "urls": {
                                        "1": "https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/1x",
                                        "2": "https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/2x",
                                        "4": "https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/3x"
                                    },
                                    "start": 10,
                                    "end": 18
                                }
                            ],
                            "msgId": "314588ea-eb54-4047-bdd9-7d2f6e3bbd68"
                        },
                        "renderedText": "Mod check <img src=\"https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/1x\" srcset=\"https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/1x 1x, https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/2x 2x, https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/3x 4x\" title=\"modCheck\" class=\"emote\">"
                    }
                }
            });
            window.dispatchEvent(emulated);
        } else if (obj.detail.event.field === 'vipMessage') {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": 1688897999996,
                            "tags": {
                                "badge-info": "",
                                "badges": "vip/1",
                                "color": "#1E90FF",
                                "display-name": "VeryImportantPerson",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "f64d86b5-dd6a-4a10-8924-916c89c499bb",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "146575108",
                                "subscriber": "0",
                                "tmi-sent-ts": "1688897999440",
                                "turbo": "0",
                                "user-id": "882005875",
                                "user-type": "",
                                "vip": "1"
                            },
                            "nick": "veryimportantperson",
                            "userId": "882005875",
                            "displayName": "VeryImportantPerson",
                            "displayColor": "#1E90FF",
                            "badges": [
                                {
                                    "type": "vip",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3",
                                    "description": "VIP"
                                }
                            ],
                            "channel": channelNameOld,
                            "text": "Super cool VIP POGGERS",
                            "isAction": false,
                            "emotes": [
                                {
                                    "type": "ffz",
                                    "name": "POGGERS",
                                    "id": "214129",
                                    "gif": false,
                                    "urls": {
                                        "1": "https://cdn.frankerfacez.com/emote/214129/1",
                                        "2": "https://cdn.frankerfacez.com/emote/214129/2",
                                        "4": "https://cdn.frankerfacez.com/emote/214129/4"
                                    },
                                    "start": 15,
                                    "end": 22
                                }
                            ],
                            "msgId": "f64d86b5-dd6a-4a10-8924-916c89c499bb"
                        },
                        "renderedText": "Super cool VIP <img src=\"https://cdn.frankerfacez.com/emote/214129/1\" srcset=\"https://cdn.frankerfacez.com/emote/214129/1 1x, https://cdn.frankerfacez.com/emote/214129/2 2x, https://cdn.frankerfacez.com/emote/214129/4 4x\" title=\"POGGERS\" class=\"emote\">"
                    }
                }
            });
            window.dispatchEvent(emulated);
        } else if (obj.detail.event.field === 'subscriberMessage') {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": 1688898287282,
                            "tags": {
                                "badge-info": "subscriber/14",
                                "badges": " subscriber/0",
                                "color": "#FF69B4",
                                "display-name": "CoolSub",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "22c694d7-53fd-4d9f-bde4-dfa9507cda30",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "146575108",
                                "subscriber": "1",
                                "tmi-sent-ts": "1688898286742",
                                "turbo": "0",
                                "user-id": "146575108",
                                "user-type": ""
                            },
                            "nick": "coolsub",
                            "userId": "146575108",
                            "displayName": "CoolSub",
                            "displayColor": "#FF69B4",
                            "badges": [
                                {
                                    "type": "subscriber",
                                    "version": "0",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                    "description": "Subscriber"
                                }
                            ],
                            "channel": channelNameOld,
                            "text": "Subscriber message!",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "22c694d7-53fd-4d9f-bde4-dfa9507cda30"
                        },
                        "renderedText": "Subscriber message!"
                    }
                }
            });
            window.dispatchEvent(emulated);
        } else if (obj.detail.event.field === 'regularMessage') {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": 1688896811497,
                            "tags": {
                                "badge-info": "",
                                "badges": "",
                                "color": "#1E90FF",
                                "display-name": "RegularViewer",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "5903d3a2-6408-463b-9ffd-66bb89f2a280",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "146575108",
                                "subscriber": "0",
                                "tmi-sent-ts": "1688896810916",
                                "turbo": "0",
                                "user-id": "882005875",
                                "user-type": ""
                            },
                            "nick": "regularviewer",
                            "userId": "882005875",
                            "displayName": "RegularViewer",
                            "displayColor": "#1E90FF",
                            "badges": [],
                            "channel": channelNameOld,
                            "text": "A message from a regular viewer",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "5903d3a2-6408-463b-9ffd-66bb89f2a280"
                        },
                        "renderedText": "A message from a regular viewer"
                    }
                }
            });
            window.dispatchEvent(emulated);
        } else if (obj.detail.event.field === 'emoteOnlyMessage') {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": 1688898729378,
                            "tags": {
                                "badge-info": "subscriber/14",
                                "badges": "broadcaster/1,subscriber/0",
                                "color": "#FF69B4",
                                "display-name": channelNameOld,
                                "emote-only": "1",
                                "emotes": "emotesv2_e6fd8cf6274a41ce92e744e2472440c4:0-9",
                                "first-msg": "0",
                                "flags": "",
                                "id": "328c2bd1-5ece-454a-8788-352e7da38ce2",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "146575108",
                                "subscriber": "1",
                                "tmi-sent-ts": "1688898728820",
                                "turbo": "0",
                                "user-id": "146575108",
                                "user-type": ""
                            },
                            "nick": channelNameOld,
                            "userId": "146575108",
                            "displayName": channelNameOld,
                            "displayColor": "#FF69B4",
                            "badges": [
                                {
                                    "type": "broadcaster",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                                    "description": "Broadcaster"
                                },
                                {
                                    "type": "subscriber",
                                    "version": "0",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                    "description": "Subscriber"
                                }
                            ],
                            "channel": channelNameOld,
                            "text": "sarueiFire",
                            "isAction": false,
                            "emotes": [
                                {
                                    "type": "twitch",
                                    "name": "sarueiFire",
                                    "id": "emotesv2_e6fd8cf6274a41ce92e744e2472440c4",
                                    "gif": false,
                                    "urls": {
                                        "1": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_e6fd8cf6274a41ce92e744e2472440c4/default/dark/1.0",
                                        "2": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_e6fd8cf6274a41ce92e744e2472440c4/default/dark/2.0",
                                        "4": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_e6fd8cf6274a41ce92e744e2472440c4/default/dark/3.0"
                                    },
                                    "start": 0,
                                    "end": 9
                                }
                            ],
                            "msgId": "328c2bd1-5ece-454a-8788-352e7da38ce2"
                        },
                        "renderedText": "<img src=\"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_e6fd8cf6274a41ce92e744e2472440c4/default/dark/1.0\" srcset=\"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_e6fd8cf6274a41ce92e744e2472440c4/default/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_e6fd8cf6274a41ce92e744e2472440c4/default/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_e6fd8cf6274a41ce92e744e2472440c4/default/dark/3.0 4x\" title=\"sarueiFire\" class=\"emote\">"
                    }
                }
            });
            window.dispatchEvent(emulated);
        } else if (obj.detail.event.field === 'replyMessage') {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": 1688899241736,
                            "tags": {
                                "badge-info": "",
                                "badges": "",
                                "color": "#FF69B4",
                                "display-name": "Redo_7",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "5e81cde0-9aa2-4434-a7bc-bb00d71e85a0",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "146575108",
                                "subscriber": "0",
                                "tmi-sent-ts": "1688899241181",
                                "turbo": "0",
                                "user-id": "882005875",
                                "user-type": ""
                            },
                            "nick": "redo_7",
                            "userId": "882005875",
                            "displayName": "Redo_7",
                            "displayColor": "#FF69B4",
                            "badges": [],
                            "channel": "redo_7",
                            "text": "May I have a random cool fact?",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "5e81cde0-9aa2-4434-a7bc-bb00d71e85a0"
                        },
                        "renderedText": "May I have a random cool fact?"
                    }
                }
            });
            let emulated2 = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": 1688899278747,
                            "tags": {
                                "badge-info": "subscriber/14",
                                "badges": "broadcaster/1,subscriber/0",
                                "color": "#FF69B4",
                                "display-name": "Redo_7",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "649535f8-cc0e-4dec-a708-4dcaa3ce5d74",
                                "mod": "0",
                                "reply-parent-display-name": "Redo_7",
                                "reply-parent-msg-body": "May\\sI\\shave\\sa\\srandom\\scool\\sfact?",
                                "reply-parent-msg-id": "5e81cde0-9aa2-4434-a7bc-bb00d71e85a0",
                                "reply-parent-user-id": "882005875",
                                "reply-parent-user-login": "redo_7",
                                "reply-thread-parent-msg-id": "5e81cde0-9aa2-4434-a7bc-bb00d71e85a0",
                                "reply-thread-parent-user-login": "Redo_7",
                                "returning-chatter": "0",
                                "room-id": "146575108",
                                "subscriber": "1",
                                "tmi-sent-ts": "1688899278150",
                                "turbo": "0",
                                "user-id": "146575108",
                                "user-type": ""
                            },
                            "nick": channelNameOld,
                            "userId": "146575108",
                            "displayName": channelNameOld,
                            "displayColor": "#FF69B4",
                            "badges": [
                                {
                                    "type": "broadcaster",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                                    "description": "Broadcaster"
                                },
                                {
                                    "type": "subscriber",
                                    "version": "0",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                    "description": "Subscriber"
                                }
                            ],
                            "channel": channelNameOld,
                            "text": "@Redo_7 Did you know a penguin achieved knighthood? A penguin living in the Edinburgh Zoo was granted knighthood in 2008. The penguin, named Nils Olav III, is the mascot of the King of Norway's Guard, making it a special figure for the country's military, and the knighting ceremony, was an opportunity to celebrate the relations between Norway and Scotland.",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "649535f8-cc0e-4dec-a708-4dcaa3ce5d74"
                        },
                        "renderedText": "@Redo_7 Did you know a penguin achieved knighthood? A penguin living in the Edinburgh Zoo was granted knighthood in 2008. The penguin, named Nils Olav III, is the mascot of the King of Norway's Guard, making it a special figure for the country's military, and the knighting ceremony, was an opportunity to celebrate the relations between Norway and Scotland."
                    }
                }
            });
            window.dispatchEvent(emulated);
              setTimeout(() => {
                window.dispatchEvent(emulated2);
            }, 1500);
        }
        return;
    }
});