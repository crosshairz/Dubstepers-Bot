//this is the bot script for the new last plug API

var version = " Dubsteper's BOT V2 1.1 Alpha";
var numCommandsEx = 0;//Number of Commands Executed



//300000 Ignore
Startup = function(versionrun){

    Randomize = Math.floor((Math.random() * 10) + 1);
	vermessage = (" _________________________ Running Version: " + versionrun);
	
		switch(Randomize){
			/*case 1:
				API.sendChat('/me Dubsteper\'s bot is now at your service' + vermessage);
				break;
			case 2:
				API.sendChat('/me I\'m up and running!' + vermessage);
				break;
			case 3:
				API.sendChat('/me I may not be Jarvis, but I sure am one hell of a bot!' + vermessage);
				break;
			case 4:
				API.sendChat('/me Bot is now online!' + vermessage);
				break;
			case 5:
				API.sendChat('/me I am simply one hell of a bot!' + vermessage);
				break;
		/*	case 6:
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
		*/
			default:
				API.sendChat('/me Merry Christmas everyone. Welcome to Dubsteper's.' + vermessage);
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
            numCommandsEx++;//Number of Commands Executed
            API.moderateDeleteChat(data.cid);
			switch(command[0].toLowerCase()){
                    
                case "ping":
                        API.sendChat("@"+data.un+" PONG");
                break;//PING END
                
                case "info":
                case "status":
                        API.sendChat("Status: " + "Number of Commands Executed : " + numCommandsEx + " : ");//Number of commands Executed, Time since bot loaded, etc.
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
                
                case "logdata":
                	console.log(data);
                break;
                
                case "help":
                case "rules":
                case "theme":
                case "op":
                case "oplist":
                case "rankup":
                	API.sendChat('Rules , Theme , OP songs - http://goo.gl/knlFMW');
                break;
                
        }//End of Commands
        
        
}});//COMMAND FUNCTION END!!!!




//Main Lines
Startup(version);
