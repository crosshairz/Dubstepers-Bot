//this is the bot script for the new last plug API

version = " 0.7 Beta";


Startup = function(versionrun){

    Randomize = Math.floor((Math.random() * 10) + 1);
	vermessage = (" : Running Version: " + versionrun);
	
		switch(Randomize){
			case 1:
				API.sendChat('/me Dubsteper\'s bot is now at your service' + vermessage);
				break;
			case 2:
				API.sendChat('/me I\'m up and running!' + vermessage);
				break;
			case 3:
				API.sendChat('/me I may not be Jarvis, but I sure am one hell of an AI!' + vermessage);
				break;
			case 4:
				API.sendChat('/me Bot is now online!' + vermessage);
				break;
			case 5:
				API.sendChat('/me I am simply one hell of a bot!' + vermessage);
				break;
			case 6:
				API.sendChat('/me  6' + vermessage);
				break;
			case 7:
				API.sendChat('/me 7' + vermessage);
				break;
			case 8:
				API.sendChat('/me 8' + vermessage);
				break;
			case 9:
				API.sendChat('/me 9' + vermessage);
				break;
			default:
				API.sendChat('/me Dubsteper\'s room bot at your service!' + vermessage);
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
            var msg = data.message, from = data.un, fromID = data.uid;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            API.moderateDeleteChat(data.uid);
			switch(command[0].toLowerCase()){
                    
                case "ping":
                        API.sendChat("@"+data.un+" PONG");
                break;//PING END
                
                case "info":
                        API.sendChat("WORK IN PROGRESS COMMAND");
                break;//INFO END
                
                case "getid":
                        API.sendChat(data.uid); 
                break;//GETID END
                
                case "swapup":
                        if(data.uid == "5214f9e196fba51fda062ea7" || data.uid == "524c910696fba55077fdaa12"){
                                API.moderateMoveDJ(data.uid, posWait = API.getWaitListPosition(data.uid));
                        };
                break;//SWAPUP END
                
                case "swapdown":
                        if(data.uid == "5214f9e196fba51fda062ea7" || data.uid == "524c910696fba55077fdaa12"){
                                API.moderateMoveDJ(data.uid, posWait = API.getWaitListPosition(uid) + 2);
                        };
                break; //SWAPDOWN END
                
        }//End of Commands
        
        
}});//COMMAND FUNCTION END!!!!




//Main Lines
Startup(version);
