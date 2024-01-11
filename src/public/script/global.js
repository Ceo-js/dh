

"use strict";
/* [ properties ]
=================================== */
const $ = v => document.querySelector( v ),
    $$ = v => document.querySelectorAll( v ),
    log = v => console.log( v );

let appbar = document.createElement( "app-bar" ),
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



/* [ app-bar template ]
============================================================================== */
class Appbar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = appbarTemplate;
		// this.attachShadow( { mode: "open" } );
		// this.shadowRoot.append( appbarTemplate.content.cloneNode( true ) );
		// this.id = ( "appbar" );
	} 
	connectedCallback() {
		this.render();
		let appbar = $( "app-bar" ),
			btnMenu = $( "h2#btn-mobile-nav-menu span" ),
			headerNavMobile = $( "nav#header-nav-mobile" );
	}
	render() {
	}
}
window.customElements.define( "app-bar", Appbar );

/* [ page-sidebar template ]
============================================================================== */
class Sidebar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = sidebarTemplate;
		// this.attachShadow( { mode: "open" } );
		// this.shadowRoot.append( appbarTemplate.content.cloneNode( true ) );
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
    var links = $$( "*[link]" ),
        imgs = $$( "img" ),
        sidebar = $( "side-bar" ),
        drawer = $( "drawer" ),
        sidebarToggle = $( "[sidebar-toggle]" ),
        sidebarMenu = $( "sidebar menu" ),
        sidebarLinks = $$( "*[slink]" ),
        modulos = $$( "menu[modulos] > li > banner" ),
        iframesDisplay = $$( "iframe[display]" ),
        videoTags = $$( "video" ),
        homepage = $( "home-page" ),
        coloridos = $$( "[cor]" );

	/* [ events ]
    =================================== */
    
	/* links */
	links.forEach( link => link.addEventListener( "click", ev => {
		window.open( link.getAttribute( "link" ), "_blank" );
	} ) );

    sidebar.setAttribute( "active", "0" );

	/* imgs */
	imgs.forEach( img => img.addEventListener( "click", ev => {
		let i = document.createElement( "snap" );
		i.innerHTML = `<style>
    snap {
        display: grid;
        place-items: center;
        position: fixed;
        top: 0; left: 0;
        background: #0005;
        z-index: 99999;
    }
    img {
        width: 100%;
    }
</style>
<img src="${img.getAttribute( "src" )}">`;
		img.style.cursor = "pointer";
		// let snap = "document.createElement(\"\")";
		$( "body" ).append( i );
	} ) );

	/* sidebarLinks */
	sidebarLinks.forEach( slink => slink.addEventListener( "click", ev => {
		homepage.innerHTML = `<iframe src="${ slink.getAttribute( "src" ) }" frameborder="0"></iframe>`;
		// loadPageSection( `${ slink.getAttribute( "src" ) }`, "home-page", ( r, err ) => console.log( r, err ) );
	} ) );

	for( let modulo of modulos ) { 
		modulo.addEventListener( "click", ev => {
			// alert( modulo.nextElementSibling.getAttribute( "name" ) );
			if( modulo.nextElementSibling.style.height == "0px" || modulo.nextElementSibling.style.height == "" ) {
				modulo.nextElementSibling.style.filter = "opacity( 1 )";
				modulo.nextElementSibling.style.padding = "2ch";
				modulo.nextElementSibling.style.height = "fit-content";
				modulo.parentElement.style.background = "var( --ceo2 )";
			} else {
				modulo.nextElementSibling.style.height = "0px";
				modulo.nextElementSibling.style.padding = "0px";
				modulo.parentElement.style.background = "none";
				modulo.nextElementSibling.style.filter = "opacity( 0 )";
			}
		} );
	}

	for( let iframe of iframesDisplay ) {
        // let hvr = document.createElement( "hvr" );

        // iframe.addEventListener( "mouseover", ev => {
        //     hvr.innerHTML = "<hvr>Ver em tela cheia</hvr>";
        //     iframe.insertAdjacentElement( "afterend", hvr );
        // } );
        // iframe.addEventListener( "mouseleave", ev => {
        //     document.querySelectorAll( "hvr" ).forEach( h => h.remove() );
        // } );

		iframe.setAttribute( "frameborder", "0" );
		iframe.setAttribute( "allowfullscreen", "" );
		iframe.setAttribute( "webkitallowfullscreen", "true" );
        
        iframe.addEventListener( "click", ev => {

        } );
	}

	videoTags.forEach( videoTag => videoTag.setAttribute( "controls", "" ) );

    for( let cor of coloridos ) { cor.style.color = cor.getAttribute( "cor" ) };


    sidebarToggle.addEventListener( "click", ev => {
        if( sidebarToggle.getAttribute( "sidebar-toggle" ) != "1" ) {
            sidebarToggle.setAttribute( "sidebar-toggle", "1" );
        } else {
            sidebarToggle.setAttribute( "sidebar-toggle", "" );
        }
        if( sidebarToggle.getAttribute( "sidebar-toggle" ) != "1" ) {
            sidebarToggle.setAttribute( "sidebar-toggle", "1" );
            sidebar.style.width = "324px";
        } else {
            sidebarToggle.setAttribute( "sidebar-toggle", "" );
            sidebar.style.width = "var( --sidebar-width )";
        }
    } );

    log( `stoggle: ${sidebarToggle}` );

} );