/*$(document).ready(function(){
*/


$(document).ready(function() {

    $(".toggle").click(function(i){
        $('.toggle').toggleClass('active')
        $('.overlay').toggleClass('active')
         $('.menu').toggleClass('active')
         $('.menu li a').click(function(){
        
         })
    });
    
    
        /*-----------------------------------------------------*/
    /* Navigation Menu
   -------------------------
    var toggleButton = $('.menu-toggle'),
        nav = $('.main-navigation');

    // toggle button
    toggleButton.on('click', function(e) {

        e.preventDefault();
        toggleButton.toggleClass('is-clicked');
        nav.slideToggle();

    });

    // nav items
    nav.find('li a').on("click", function() {

        // update the toggle button 		
        toggleButton.toggleClass('is-clicked');
        // fadeout the navigation panel
        nav.fadeOut();

    });
***/

    
    
    
    
    
    
    
    
    /* menu hidden
    $('.navbar-toggler').click(function(i){
            $('.list-nav li').click(function (){
                $(".list-nav").fadeToggle(); 
                
            });
	});
*/



$(function (){
	'use strict';
  //smoothly scroll to element 
 $('nav ul li a').click(function (e){
 	e.preventDefault();
 	$('html,body').animate({
 		scrollTop: $('#' + $(this).data('scroll')).offset().top
 	},1000);
 });

});

$(function (){
	'use strict';
  //smoothly scroll to element 
 $('.menu ul li a').click(function (e){
 	e.preventDefault();
 	$('html,body').animate({
 		scrollTop: $('#' + $(this).data('scroll')).offset().top
          
 	},1000);
 });

});


$(window).scroll(function() {
  if ($(document).scrollTop() > 750) {
    $('.navbar').addClass('color-change');
  } else {
    $('.navbar').removeClass('color-change');
  }
});

var scrollButton = $("#scroll-top");
$(window).scroll(function(){

	if($(this).scrollTop()>= 641)
	{
		scrollButton.show();
	}
	else{
		scrollButton.hide();
	}
	
	});

scrollButton.click(function()
	{
		$("html,body").animate({scrollTop:0},600);
	});


// nise scroll style and syntax 





  
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $(".loading-page .counter h1").html(c + "%");
       $(".loading-page .counter .hr").css("width", c + "%");
   //     $(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

    
   // $(".loading-page .counter h1.color").css("width", c + "%");
    
    counter++;
    c++;
      
    if(counter == 101) {
        clearInterval(i);
               $('.loading-page').fadeOut(1000);
    }
  }, 50);
    
    //wow javascript 
     new WOW().init();

});
