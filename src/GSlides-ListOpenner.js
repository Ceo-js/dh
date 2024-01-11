

/* 
javascript:var n = document.querySelectorAll('iframe[src*=docs\\.google]')[0],    k = document.createElement("a");k.setAttribute("href",n.getAttribute("src"));k.setAttribute("target","_blank");k.setAttribute("style","display:block");k.innerText = "Open Google Slides";n.parentElement.insertBefore(k,n);
*/

// javascript: var n = document.querySelectorAll( "iframe[src*=docs\\.google]"),
// k = document.createElement("a");
// k.setAttribute("href", n.getAttribute("src"));
// k.setAttribute("target", "_blank");
// k.setAttribute("style", "display:block");
// k.innerText = "Open Google Slides";
// n.parentElement.insertBefore(k, n);

javascript: var 
tagsList = document.querySelectorAll( "iframe[src*=docs\\.google]");
for( var ind in tagsList ) {
   var 
      newItem = document.createElement( "a" ),
      style = `
      display: grid;
      background: #27f;
      color: #eee;
      padding: 15px 30px;
      font-size: 2em;
      clip-path: polygon( 0 15px, 15px 0, 100% 0, 100% calc( 100% - 15px ), calc( 100% - 15px ) 100%, 0 100% );
      `
   ;
   newItem.setAttribute( "href", tagsList[ind].getAttribute( "src" ) );
   newItem.setAttribute( "target", "_blank" );
   newItem.setAttribute( "style", style );
   newItem.setAttribute( "c-link", "" );
   newItem.innerText = "Open Google Slides";
   tagsList[ind].parentElement.insertBefore( newItem, tagsList[ind] );
}