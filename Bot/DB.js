
API.sendChat('/me : Running Dubsteper\'s Script Version 2.0.1');

Startup = function(version){
    Randomize = Math.floor((Math.random() * 10) + 1);
    
    switch(Randomize){
        case 1:
            return 'Dubsteper\'s Bot Is Now At Your Service '
        case 2:
            return 'I\'m Up And Running'
        case 3:
            return 'I May Not Be Jarvis But I Sure Am Hell Of An AI'
        case 4:
            return '4'
        case 5:
            return '5'
        case 6:
            return '6'
        case 7:
            return '7'
        case 8:
            return '8'
        case 9
            return '9'
        default:
            return 'Dubsteper\'s Room Bot At Your Service'
    }
}

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
});//COMMAND END!!!!
