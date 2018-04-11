
(function($) {
	
	$(document).ready(function() {

		$(".cosmo-tab-inner").tabs();
		
		$(".cosmo-toggle").each( function () {
			if($(this).attr('data-id') == 'closed') {
				$(this).accordion({ header: '.cosmo-toggle-title', collapsible: true, active: false, heightStyle: "content"  });
			} else {
				$(this).accordion({ header: '.cosmo-toggle-title', collapsible: true, heightStyle: "content"});
			}
		});
		
		
	});
	
})( jQuery );

function cosmo_send_mail( form, container){
	jQuery('#cosmo-name').removeClass('invalid'); 
    jQuery('#cosmo-email').removeClass('invalid'); 
    
    jQuery(container).html('');

	jQuery.ajax({
	    url: ajaxurl,
	    data: '&action=cosmo_send_contact&'+jQuery( form ).serialize(),
	    type: 'POST',
	    dataType: "json",
	    cache: false,
	      success: function (json) {

	      	if(json.contact_name ){
	      		jQuery('#cosmo-name').addClass('invalid'); 
	      		jQuery(container).append(json.contact_name);
	      	}

	      	if(json.contact_email ){
	      		jQuery('#cosmo-email').addClass('invalid'); 
	      		jQuery(container).append(json.contact_email);
	      	}

	      	if(json.message ){
	      		jQuery(container).append(json.message);
	      	}
	        

	        
	    }
    });
    
}
