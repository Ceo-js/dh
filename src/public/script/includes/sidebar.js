

"use strict";
/* [ properties ]
    =========================================================================== */    
let pageSidebar = document.createElement( "side-bar" ),
	sidebarTemplate = `
<sidebar-home>
    <icon>
        <icon-img class="material-icons">javascript</icon-img>
        <icon-name>Módulo 01</icon-name>
        <!-- <icon-name>Lógica de programação</icon-name> -->
    </icon>
    <icon>
        <icon-img class="material-icons">html</icon-img>
        <icon-name>Módulo 02</icon-name>
        <!-- <icon-name>Node e javascript</icon-name> -->
    </icon>
    <icon>
        <icon-img class="material-icons">html</icon-img>
        <icon-name>Módulo 03</icon-name>
        <!-- <icon-name>Metodologias de desenvolvimento</icon-name> -->
    </icon>
    <icon>
        <icon-img class="material-icons">html</icon-img>
        <icon-name>Módulo 04</icon-name>
        <!-- <icon-name>html & css</icon-name> -->
    </icon>
    <icon>
        <icon-img class="material-icons">html</icon-img>
        <icon-name>Módulo 05</icon-name>
        <!-- <icon-name>Javascript front</icon-name> -->
    </icon>
    <icon>
        <icon-img class="material-icons">html</icon-img>
        <icon-name>Módulo 06</icon-name>
        <!-- <icon-name>Express</icon-name> -->
    </icon>
    <icon>
        <icon-img class="material-icons">html</icon-img>
        <icon-name>Módulo 07</icon-name>
        <!-- <icon-name>Banco de dados</icon-name> -->
    </icon>
    <icon>
        <icon-img class="material-icons">html</icon-img>
        <icon-name>Módulo 08</icon-name>
        <!-- <icon-name>Api</icon-name> -->
    </icon>
    <icon>
        <icon-img class="material-icons">html</icon-img>
        <icon-name>Módulo 09</icon-name>
        <!-- <icon-name>React</icon-name> -->
    </icon>
    <icon>
        <icon-img class="material-icons">html</icon-img>
        <icon-name>Módulo 10</icon-name>
        <!-- <icon-name>Projeto integrador</icon-name> -->
    </icon>
</sidebar-home>
<drawer>

</drawer>
`;
/* --------------------------------------------------------------------------- */


/* [ page-sidebar template ]
============================================================================== */
class Sidebar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = sidebarTemplate;
		// this.attachShadow( { mode: "open" } );
		// this.shadowRoot.append( pageHeaderTemplate.content.cloneNode( true ) );
	} 
	connectedCallback() {
		this.render();
		let pageSidebar = $( "side-bar" );
	}
	render() {
	}
}
window.customElements.define( "side-bar", Sidebar );





window.addEventListener( "load", ev => {
/* [ properties ]
    =================================== */
    // let sidebar = $( "side-bar" );

    log( `Sidebar: ${sidebar}` );
    
} );

