$(document).ready(function() {
      $('.left').animate({
          left: '120px'
      });
      $('.logo').delay(300).animate({
          left: '0px'
      });
      $('.right').animate({
          right: '120px'
      });
      $('.close').click(function() {
        $('.left').animate({
            left: '-700px'
        });
        $('.logo').animate({
            left: '-700px'
        });
        $('.right').animate({right: '-700px',});
          setTimeout(function()
            { $('.right').css('display','none'); },200)
      });
});

