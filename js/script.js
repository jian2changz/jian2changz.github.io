

$('.lazy').click(function() { 
  $('html').toggleClass("toggle");
  $('#lightbox-img').attr('src',$(this).prop('currentSrc'));
  $('.lightbox-caption').text($(this).next('figcaption').text());
  $('body').toggleClass("noscroll");
});
                              
$('.lightbox').click(function(){
  $('html').removeClass("toggle");
  $('#lightbox-img').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
  $('body').removeClass("noscroll");
});



$('#button-return-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$(function() {
        $('.lazy').Lazy({
          effect: 'fadeIn',
        effectTime: 1200,
        threshold: 50});
    });

$(window).scroll(function(){
    if ($(window).scrollTop() >= 180) {
        $('#sticky').addClass('header-fix');
        
    }
    else {
        $('#sticky').removeClass('header-fix');
       
    }
});


var fixed = document.getElementById('lightbox-img');

fixed.addEventListener('touchmove', function(e) {

        e.preventDefault();

}, false);

