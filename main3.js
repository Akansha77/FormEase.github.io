$('.messages').animate({ scrollTop: $('.messages ul').height() }, "fast");




function newMessage() {



    
  var message = $('.message-input input').val();  
    if($.trim(message) == '') {
      message = $('.message-input .emoji-wysiwyg-editor').html();  
      if($.trim(message) == '') {
      return false;
      }
    }
  

	$('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
	$('.message-input input').val('');
  $('.message-input .emoji-wysiwyg-editor').html('');
  
	$('.messages').animate({ scrollTop: $('.messages ul').height() }, "fast");
};

$('.submit').click(function() {
  newMessage();
});

$('#framechat .content .message-input ').on('keydown', function(e) {
  if (e.which == 13) {
    newMessage();
    return false;
  }
});