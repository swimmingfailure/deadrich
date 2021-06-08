$(document).ready(function() { 
    var height = $('.soundcloud').css('width');
    $('.soundcloud').css('height', height);
    
    $(window).resize(function() {
        var height = $('.soundcloud').css('width');
		$('.soundcloud').css('height', height);
	});
    
    $('.musicItem').hover(
        function() {
            $(this).css('color','magenta');
        },
        function(){
            $(this).css('color','lime');
        }
    );
    
    
    $('.musicImg').click(function() {
        var songId = "music/"+$(this).attr("id")+".mp3";
        if ($('#musicPlayer').attr("src") == songId && !$('#musicPlayer').get(0).paused) {
            $('#musicPlayer').get(0).pause();
        }
        else if ($('#musicPlayer').attr("src") == songId) {
            $('#musicPlayer').get(0).play();
        }
        else {
            $('#musicPlayer').attr("src", songId);
            $('#musicPlayer').get(0).play();
        }
        $('.musicImg').each(function () {
            $(this).attr("src","img/"+$(this).attr("id")+".jpg");
            $(this).removeClass("clicked");
        });

        //$(this).attr("src","img/"+$(this).attr("id")+"1.jpg");
        $(this).addClass("clicked");
    });
});