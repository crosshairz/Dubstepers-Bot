//this is the bot script for the new last plug API

var mubBot = {};
var ruleSkip = {};
mubBot.misc = {};
mubBot.settings = {};
mubBot.moderators = {};
mubBot.filters = {};
botMethods = {};
mubBot.pubVars = {};


version = " 0.1 Beta";


Startup = function(versionrun){

    Randomize = Math.floor((Math.random() * 10) + 1);
	vermessage = ("    Running Version: " + versionrun);
	
		switch(Randomize){
			case 1:
				API.sendChat('/me Dubsteper\'s bot is now at your service ' + vermessage);
				break;
			case 2:
				API.sendChat('/me I\'m up and running! ' + vermessage);
				break;
			case 3:
				API.sendChat('/me I may not be Jarvis, but I sure am one hell of an AI ' + vermessage);
				break;
			case 4:
				API.sendChat('/me Bot is now online! ' + vermessage);
				break;
			case 5:
				API.sendChat('/me I am simply one hell of a bot' + vermessage);
				break;
			case 6:
				API.sendChat('/me  6');
				break;
			case 7:
				API.sendChat('/me 7');
				break;
			case 8:
				API.sendChat('/me 8');
				break;
			case 9:
				API.sendChat('/me 9');
				break;
			default:
				API.sendChat('/me Dubsteper\'s room bot at your service')
				break;
		}
};

getID = function(username){
    var users = API.getUsers();
    var result = "";
    for(var i = 0; i < users.length; i++){
        if(users[i].username === username){
            result = users[i].id;
            return result;
        }
    }

    return "notFound";
}; 

//Commands
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
                break;//PING END
                
                case"info":
                        API.sendChat("WORK IN PROGRESS COMMAND");
                break;//INFO END
                
                case"getid":
                        API.sendChat(data.fromID); 
                break;//GETID END
                
                case"swapup":
                        if(data.fromID == "5214f9e196fba51fda062ea7" || data.fromID == "524c910696fba55077fdaa12"){
                                API.moderateMoveDJ(data.fromID, posWait = API.getWaitListPosition(data.fromID));
                        };
                break;
                
                case"swapdown":
                        if(data.fromID == "5214f9e196fba51fda062ea7" || data.fromID == "524c910696fba55077fdaa12")
                                API.moderateMoveDJ(data.fromID, posWait = API.getWaitListPosition(data.fromID) + 2);
                        };
                break;//
        
        }//End of Commands
});//COMMAND END!!!!




//Main Lines
Startup(version);
