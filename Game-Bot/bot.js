//GAMEBOT
power = true;

Version = "1.0.3";

API.sendChat("Running Dubsteper's-GameBot Script Version " + Version);

API.on(API.CHAT, function(data){
if(data.message.indexOf('.') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
  switch(command[0].toLowerCase()){        
case "on":
if(power == false){
power = true;
API.sendChat("GameBot is now ON");
}else{
API.sendChat("GameBot is already ON");
}
 break;         

case "off":
if(power == true){
power = false;
API.sendChat("GameBot is now OFF");
}else{
 API.sendChat("GameBot is already OFF");           
}    
break;
if(power){
            case "ping":
                        API.sendChat("@"+data.from+ " PONG!");
            break;
            
            
            
            
            
}//END OF COMMANDS THAT RUN ONLY WHEN ON
}}


})
