//GAMEBOT
boolean power =false;

Version = "1.0.1";

API.sendChat("Running Derpsteper's-GameBot Script Version " + Version);

API.on(API.CHAT, function(data){
if(data.message.indexOf('G!') === 0){
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
 end           
case "off":
if(power == true){
power = false;
API.sendChat("GameBot is now OFF");
}else{
 API.sendChat("GameBot is already OFF");           
}    
end
}}


})
