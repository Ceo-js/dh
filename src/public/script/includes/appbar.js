

"use strict";
/* [ global properties ]
    =========================================================================== */    
let pageHeader = document.createElement( "page-header" ),
	appbarTemplate = `
<appbar-home>
    <appbar-menu>
        <label sidebar-toggle>
            &equiv;
            <input type="checkbox">
        </label>
    </appbar-menu>
    <h1></h1>
    <appbar-menu></appbar-menu>
</appbar-home>
`;
/* --------------------------------------------------------------------------- */


/* [ app-bar template ]
============================================================================== */
class Appbar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = appbarTemplate;
		// this.attachShadow( { mode: "open" } );
		// this.shadowRoot.append( pageHeaderTemplate.content.cloneNode( true ) );
		// this.id = ( "appbar" );
	} 
	connectedCallback() {
		this.render();
		let pageHeader = $( "page-header" ),
			btnMenu = $( "h2#btn-mobile-nav-menu span" ),
			headerNavMobile = $( "nav#header-nav-mobile" );
	}
	render() {
	}
}
window.customElements.define( "page-header", Appbar );




window.addEventListener( "load", ev => {
    /* [ properties ]
    =================================== */
    var sidebarToggle = $( "[sidebar-toggle]" );
    console.log( `sidebarToggle: ${sidebarToggle}` );
    
} );

