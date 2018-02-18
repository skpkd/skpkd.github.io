    //выносные капшны фоторамы
    $('.fotorama')
    .on('fotorama:show', function (e, fotorama) {    
        fotorama.$caption = fotorama.$caption || $(this).next('.fotorama-caption');
        fotorama.$caption.text(fotorama.activeFrame.caption);
    })
    .fotorama();


// START modal popup script

jQuery(document).ready(function($){
	var $form_modal = $('.cd-modal'),
		$main_nav = $('.modal');

	//open modal
	$main_nav.on('click', function(event){

		if( $(event.target).is($main_nav) ) {
			// on mobile open the submenu
			$(this).children('ul').toggleClass('is-visible');
		} else {
			// on mobile close submenu
			$main_nav.children('ul').removeClass('is-visible');
			//show modal layer
			$form_modal.addClass('is-visible');	
		}

	});

	//close modal
	$('.cd-modal').on('click', function(event){
		if( $(event.target).is($form_modal) || $(event.target).is('.close-modal') ) {
			$form_modal.removeClass('is-visible');
		}	
	});
	//close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$form_modal.removeClass('is-visible');
	    }
    });



});

// END modal popup


// START отключает скролл поверх карт
$('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});
// END отключает скролл поверх карт