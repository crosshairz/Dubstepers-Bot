//AUTO WELCOME!!!

message = prompt("Message here the username will go at the end");

API.on(API.USER_JOIN, function(data){

if(message == ""){
API.sendChat("Welcome to Dubstepers @" + data.username);
} else {
API.sendChat(message + " @" + data.username);

}
});
