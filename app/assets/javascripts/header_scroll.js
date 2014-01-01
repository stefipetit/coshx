/* trigger when page is ready */
$(document).ready(function (){

    
   
    // the stickem script to make header fixed when scroll to top
	$(document).ready(function() {
		//sticky Nav
		// grab the initial top offset of the navigation -use .front-header to only call header bar on homepage

		if ($('.sticky-header').length > 0)
			var sticky_navigation_offset_top = $('.sticky-header').offset().top;
		else
			var sticky_navigation_offset_top = 500;
		
		// our function that decides weather the navigation bar should have "fixed" css position or not.
		var sticky_navigation = function(){
			var scroll_top = $(window).scrollTop(); // our current vertical position from the top
			
			// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
			if (scroll_top > sticky_navigation_offset_top) { 
				$('.sticky-header').css({ 'position': 'fixed', 'top':0, 'left':0 });
				$('#map-container').css({ 'z-index':1})
			} else {
				$('.sticky-header').css({ 'position': 'absolute', 'bottom':0, 'top':'auto' });
				$('#map-container').css({ 'z-index':-1})
 
			}   
		};
		
		scroller();
		window.onresize = scroller;
		
		
		sticky_navigation();
		$(window).scroll(function() {
			 sticky_navigation();
		});
	});
	var counter;
	var slideTime = 3000;

	
	function filterPath(string) {
		  return string
		    .replace(/^\//,'')
		    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		    .replace(/\/$/,'');
		  }
		  
    function scroller(){
		  var locationPath = filterPath(location.pathname);
		  $('a[href*=#]').each(function() {
		    var thisPath = filterPath(this.pathname) || locationPath;
		    if (  locationPath == thisPath
		    && (location.hostname == this.hostname || !this.hostname)
		    && this.hash.replace(/#/,'') ) {
		      var $target = $(this.hash), target = this.hash;
		      if (target) {
		        var targetOffset = $target.offset().top - $('.sticky-header').height();
		        $(this).click(function(event) {
		          event.preventDefault();
		          $('html, body').animate({scrollTop: targetOffset}, 400, function() {
		            location.hash = target;
		          });
		        });
		      }
		    }
		    });
	} // end stickem function

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/