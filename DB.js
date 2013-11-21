//this is the bot script for the new last plug API

var mubBot = {};
var ruleSkip = {};
mubBot.misc = {};
mubBot.settings = {};
mubBot.moderators = {};
mubBot.filters = {};
botMethods = {};
mubBot.pubVars = {};

var BootMessage

API.sendChat('/me : Running Dubstepers Script Version 2.0.1');



//COMMANDZ
API.on(API.CHAT, function(data){
        if(data.message.indexOf('!') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            
            API.moderateDeleteChat(data.chatID);
            
            switch(command[0].toLowerCase() ){
                    
                case"ping":
                        API.sendChat("@"+data.from+" PONG");
                break//PING END
                
                case"info":
                        API.sendChat("WORK IN PROGRESS COMMAND");
                break//INFO END
                
                case"getid":
                        API.sendChat(data.fromID); 
                break//GETID END
                
                case"swapup":
                        if(data.fromID == "5214f9e196fba51fda062ea7" || data.fromID == "524c910696fba55077fdaa12"){
                                API.moderateMoveDJ(data.fromID, posWait = API.getWaitListPosition(data.fromID));
                        };
                break
                
                case"swapdown":
                        if(data.fromID == "5214f9e196fba51fda062ea7" || data.fromID == "524c910696fba55077fdaa12")
                                API.moderateMoveDJ(data.fromID, posWait = API.getWaitListPosition(data.fromID) + 2);
                        };
                break//
        
        }//End of Commands
        }
});//COMMAND END!!!!
