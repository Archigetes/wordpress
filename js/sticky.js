jQuery( document ).ready(function( $ ) {
	
	if ( $( '.sgwindow_sidebar_nav' ).size() > 0 )
		return;
		
	var adm = 0;
	if(parseInt($('#wpadminbar')) != 'undefined')
		adm = parseInt($('#wpadminbar').css('height'));
		
	if ( isNaN( adm ) )
		adm = 0;
		
	$('.top-navigation')
	.addClass('original')
	.clone()
	.insertAfter('.top-navigation')
	.addClass('cloned')
	.css('position','fixed')
	.css('top','0')
	.css('margin-top',adm)
	.css('margin-left','0')
	.css('z-index','500')
	.removeClass('original')
	.hide();
	
	jQuery( '#page' ).find( '.header-hovered' ).removeClass( 'header-hovered' );
	jQuery( '#page' ).find( '.header-hovered-logo' ).removeClass( 'header-hovered-logo' );

	var logo = $( '.logo' );
	var title = $( '.site-title' );
	var description = $( '.site-description' );
	
	function update() {
		title.addClass( 'header-hovered-1' );
		description.addClass( 'header-hovered-1' );
	}
	
	function remove() {
		title.removeClass( 'header-hovered-1' );
		description.removeClass( 'header-hovered-1' );
	}
	
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
		   update();
	   } else {
		  remove();
	   }
	   lastScrollTop = st;
	   
		/* timer */
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			remove();
		}, 500));
		
	});
		
});

jQuery( window ).load( function( $ ) {
});