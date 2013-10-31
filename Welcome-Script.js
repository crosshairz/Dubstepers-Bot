//Welcome a user upon joining/entering.
function join(user) { 

        //Print the message to chat.
    API.sendChat("FARTS" + " @" + user.username) 
} 

//Say good-bye to the user.
//The user leaving won't see this, as the listener only sees the user has left until they closed, reloaded or exited their window.
function leave(user) { 

    var leaveArray = [ 
        "@" + user.username + " left.",
        "Catch ya later, @" + user.username + ".",
        "Bye! @" + user.username];

    var randomN = Math.floor(Math.random() * leaveArray.length); 

        //Print the message to chat.
    API.sendChat(leaveArray[randomN])

}

//Function called on upon a new chat message.
function readChat(data) { 

        //Checks if a user tags your account in their message.
    if (data.message.indexOf("@" + API.getSelf().username) > -1) {

            var isChat = false; 

                //Checks if the user stated 'what time is it'
        if (data.message.indexOf('what time is it') != -1) {
                
                        isChat = true;
                        
            var currentTime = new Date() 
            var hours = currentTime.getHours() 
            var minutes = currentTime.getMinutes() 
            var ampm 
            if (hours > 11) { 
                ampm = ("PM") 
            } else { 
                ampm = ("AM") 
            } 
  
            hours = (hours > 12) ? hours - 12 : hours; 
            hours = (hours == '00') ? 12 : hours; 
            if (minutes < 10) { 
                minutes = "0" + minutes 
            } 
            var mytime = (hours + ":" + minutes + " " + ampm) 

                        //Prints the time in chat.
                        //The time is based off what time it is wherever your computer is located.
            API.sendChat("It's " + mytime + " somewhere in the cyberspace!");

        }
  
        //Where are you from? Where do you live? How are you doing?
                //These are to make the bot seem a bit smarter.
        if (data.message.toLowerCase().indexOf('where') != -1) {
                
                        isChat = true;
                
            if (data.message.toLowerCase().indexOf('are') != -1) {
  
                if (data.message.toLowerCase().indexOf('from') != -1) {
  
                    API.sendChat("I'm from the Internet.. Here, I'll send you a map, so you can visit me : http://xkcd.com/802/"); 
                } 
            } 
  
            if (data.message.toLowerCase().indexOf('do') != -1) {
                        
                if (data.message.toLowerCase().indexOf('live') != -1) {
  
                    API.sendChat("Right below the Blogosphere : http://xkcd.com/802/"); 
                } 
  
            } 
  
        }
                
        if (data.message.toLowerCase().indexOf('how') != -1) {
                
                        isChat = true;
                        
            if (data.message.toLowerCase().indexOf('are') != -1) {
  
                if (data.message.toLowerCase().indexOf('doing') != -1) {
  
                    var doingArray = [
                        "I'm just great, all systems are up and running!",
                        "I'm feeling a bit botty today",
                        "I'm doing fine, you? :) @" + data.from];
                                
                    var randomN = Math.floor(Math.random() * doingArray.length);
                                        
                    API.sendChat(doingArray[doingN]);
  
                }
            }
        }

                //If the message tagging your bot did not match any of the above.
        if (isChat != true) {
                
            var watArray = [
                "NO];
  
            var randomN = Math.floor(Math.random() * watArray.length); 
  
            API.sendChat(watArray[randomN]); 
        } 
    }}

//Calls the methods above when the listener is activated.
API.addEventListener(API.USER_JOIN, join);
API.addEventListener(API.USER_LEAVE, leave);
API.addEventListener(API.CHAT, readChat);
