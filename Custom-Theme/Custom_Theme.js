API.chatLog("You are running a custom background now. We hope that you like it! If not, just refresh the page. (some code by Dubstepers)", true);

$(".background").html("<img src=\"http://i.imgur.com/CflADad.png\" style=\"width: 921px; height: 285px; left: -218.5px;\">");
$('head').append('<link rel="stylesheet" type="text/css" href="http://www.gedankenwall.com/plugdj-chillroom-theme/2.css">');

//Script that shows a tooltip with the full song name when you hover over the song name at the top of the screen.

$('#now-playing-media').hover(function(){
	$('body').append('<div id="tooltip" style="top:0px;left:550px;"><span>' + API.getMedia().author + ' - ' + API.getMedia().title + '</span><div class="corner"></div></div>');
},function(){
	$('#tooltip').remove();
});

	
