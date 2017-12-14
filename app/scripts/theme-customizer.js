/**
 * This file adds some LIVE to the Theme Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 */
( function( $ ) {

	// Update the site title in real time...
	wp.customize( 'default-image', function( value ) { value.bind( function( newval ) { $( '#mainLogo' ).html( newval ); } ); } );
	wp.customize( 'title_tagline', function( value ) { value.bind( function( newval ) { $( '#title_tagline' ).html( newval ); } ); } );
	wp.customize( 'contact_direccion', function( value ) { value.bind( function( newval ) { $( '#contact_direccion' ).html( newval ); } ); } );
	wp.customize( 'contact_telefono', function( value ) { value.bind( function( newval ) { $( '#contact_telefono' ).html( newval ); } ); } );
	wp.customize( 'contact_telefono_2', function( value ) { value.bind( function( newval ) { $( '#contact_telefono_2' ).attr("href","tel: " + newval).html( newval ); } ); } );
	wp.customize( 'contact_contact_email', function( value ) { value.bind( function( newval ) { $( '#contact_contact_email' ).attr("href","mailto: " + newval).html( newval ); } ); } );
	wp.customize( 'logo_footer', function( value ) { value.bind( function( newval ) { $( '#logo_footer' ).attr("src", newval); } ); } );
	wp.customize( 'style_css_control', function( value ) { value.bind( function( newval ) { $( '#main_style-css' ).attr("href", newval); } ); } );

} )( jQuery );
