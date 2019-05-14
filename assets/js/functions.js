$( document ).ready(function() {

  $('.symbolRowLeft').marquee({
    //speed in milliseconds of the marquee
    duration: 40000,
    //gap in pixels between the tickers
    gap: 60,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'right',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,

    startVisible: true,

  });

  $('.symbolRowRight').marquee({
    //speed in milliseconds of the marquee
    duration: 25000,
    //gap in pixels between the tickers
    gap: 60,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,

    startVisible: true
  });

  $('.toggle-overlay').click(function() {
      $('.about').toggleClass('open');
    });

    $(document).ready(function(){
              $("body").mousemove(function(event){
                  $(".cursor").css("left", event.pageX)
                  $(".cursor").css("top", event.pageY)
              })
          })

  $('a, .toggle-overlay').hover(function() {
      $('.cursor').toggleClass('hovering');
    });

    $('.lazy').Lazy({
       // your configuration goes here
       scrollDirection: 'vertical',
       effect: 'fadeIn',
       visibleOnly: true,
       onError: function(element) {
           console.log('error loading ' + element.data('src'));
       }
   });

});
