$(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('tada');
      }
    });
  });

if(window.matchMedia('(max-device-width: 568px)').matches)
{
   $("a").removeClass( "hvr-underline-from-left" );
}

if(window.matchMedia('(max-device-width: 1024px)').matches)
{
   $("a").removeClass( "hvr-underline-from-left" );
}

