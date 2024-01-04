

var 
	n = document.querySelectorAll( "iframe[src*=docs\\.google]" )[0],    
	k = document.createElement( "a" )
; 

k.setAttribute( "href", n.getAttribute( "src" ) ); 
k.setAttribute( "target", "_blank" ); 
k.setAttribute( "style", "display:block" ); 
k.innerText = "Open Google Slides"; 
n.parentElement.insertBefore( k, n );

var       
	SVGs = document.getElementsByTagName( "svg" ),    
	// node = document.querySelectorAll( "[class$=\"" + "-caption" + "\"]" )[0],    
	node = document.querySelectorAll( "[class$=\"-caption\"]" )[0],    
	view = document.getElementsByClassName( "punch-viewer-content" )[0],    
	size = node.getAttribute( "aria-setsize" ),    
	data = "",     
	func = () => {       
		data += SVGs[0].outerHTML;      
		if( ( i = node.getAttribute( "aria-posinset" ) ) == size ) document.write( data );       
		else view.click(), setTimeout( func, 10 );     
	}
; 
func();