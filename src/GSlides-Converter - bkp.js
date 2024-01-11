javascript: var _ = ( ...v ) => console.log( ...v ),
   $ = ( v ) => document.querySelector( v ),
   $$ = ( v ) => document.querySelectorAll( v ),
   strings = [
      /'\\x3csvg version/gi,
      /\\\/svg\\x3e'/gi,
      /\\x3c/gi,
      /\\x3d/gi,
      /\\x22/gi,
      /\\\//gi,
      /\\x3e/gi,
      "; SK_modelChunkLoadStart = new Date().getTime(); _timingInstance.incrementTime( 'mp', SK_modelChunkLoadStart - SK_modelChunkParseStart); SK_viewerApp.",
      "setPageData('p0', SK_svgData, [])",
      "setPageData('p1', SK_svgData, [])",
      "setPageData('p2', SK_svgData, [])",
      "setPageData('p3', SK_svgData, [])",
      "setPageData('p4', SK_svgData, [])",
      "setPageData('p5', SK_svgData, [])",
      "setPageData('p6', SK_svgData, [])",
      "setPageData('p7', SK_svgData, [])",
      "setPageData('p8', SK_svgData, [])",
      "setPageData('p9', SK_svgData, [])",
      "setPageData('p10', SK_svgData, [])",
      "setPageData('p11', SK_svgData, [])",
      "setPageData('p12', SK_svgData, [])",
      "setPageData('p13', SK_svgData, [])",
      "setPageData('p14', SK_svgData, [])",
      "setPageData('p15', SK_svgData, [])",
      "setPageData('p16', SK_svgData, [])",
      "setPageData('p17', SK_svgData, [])",
      "setPageData('p18', SK_svgData, [])",
      "setPageData('p19', SK_svgData, [])",
      "setPageData('p20', SK_svgData, [])",
      "setPageData('p21', SK_svgData, [])",
      "setPageData('p22', SK_svgData, [])",
      "setPageData('p23', SK_svgData, [])",
      "setPageData('p24', SK_svgData, [])",
      "setPageData('p25', SK_svgData, [])",
      "setPageData('p26', SK_svgData, [])",
      "setPageData('p27', SK_svgData, [])",
      "setPageData('p28', SK_svgData, [])",
      "setPageData('p29', SK_svgData, [])",
      "setPageData('p30', SK_svgData, [])",
      "setPageData('p31', SK_svgData, [])",
      "setPageData('p32', SK_svgData, [])",
      "setPageData('p33', SK_svgData, [])",
      "setPageData('p34', SK_svgData, [])",
      "setPageData('p35', SK_svgData, [])",
      "setPageData('p36', SK_svgData, [])",
      "setPageData('p37', SK_svgData, [])",
      "setPageData('p38', SK_svgData, [])",
      "setPageData('p39', SK_svgData, [])",
      "setPageData('p40', SK_svgData, [])",
      "; _timingInstance.incrementTime( 'ml', new Date().getTime() - SK_modelChunkLoadStart); SK_svgData = undefined;",
   ],
   replacers = [
      `<svg version`, `/svg>`, "<", "=", '"', "/", ">",
      "", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
      " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
      " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
      " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
      " ", " ", " ",  
   ], 
   scriptTags = $$( "script" ),
   scriptTagsContents = [],
   formatedScriptsContents = [],
   fContents = [],
   fFContents = [],
   converted = [],
   page,
   bkpList = [],
   tag = [],
   clb = document.createElement( "clb" ),
   cop = [],
   a = document.createElement( "a" )
;

function download( content, mimeType, filename ) {
   var 
      blob = new Blob( [content], { type: mimeType } ),
      url = URL.createObjectURL( blob ),
      alvo = document.body.querySelector( "clb" ).querySelector( "a" )
   ;
   alvo.setAttribute( "href", url );
   alvo.setAttribute( "download", filename );
   alvo.click();
}

document.body.append( clb );

scriptTags.forEach( ( s ) => {
   scriptTagsContents.push( s.innerHTML );
} );

scriptTagsContents.forEach( ( s ) => {
   if( s.startsWith( "SK_svgData = '\\x3csvg version" ) ) {}
   formatedScriptsContents.push( s.replaceAll( /'\\x3csvg version/gi, `<svg version` ) );
} );

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 
36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49 ].forEach( ( idx ) => {
   scriptTagsContents = [];
   scriptTagsContents.push( ...formatedScriptsContents );
   formatedScriptsContents = [];
   scriptTagsContents.forEach( ( s ) => {
      formatedScriptsContents.push( s.replaceAll( strings[idx], replacers[idx] ) );
   } );
} );

formatedScriptsContents.forEach( ( s ) => {
   fContents.push( s.replaceAll( /SK_svgData = </gi, "<" ) );
} );



fContents.forEach( c => {
   if( c.startsWith( "<svg version" ) ) {
      var rep = c.replaceAll( /; SK_modelChunkLoadStart = new Date().getTime();/gi, "ceo" );
      fFContents.push( rep );
   }
} );

fFContents.forEach( c => {
   converted.push( c.replaceAll( "; SK_modelChunkLoadStart = new Date().getTime();", "" ) );
} );

_( converted );
clb.append( converted );





document.body.append( document.createElement( "ceo" ) );
document.querySelector( "ceo" ).append( document.createElement( "a" ) );
document.querySelector( "ceo" ).querySelector( "a" ).append( "Download" );
document.querySelector( "ceo" ).querySelector( "a" ).setAttribute( "download", "oi" );
document.querySelector( "ceo" ).querySelector( "a" ).style.zIndex = "999";
document.querySelector( "ceo" ).querySelector( "a" ).style.width = "15vw";
document.querySelector( "ceo" ).querySelector( "a" ).style.height = "8vh";
document.querySelector( "ceo" ).querySelector( "a" ).style.backgroundColor = "#27f";
document.querySelector( "ceo" ).querySelector( "a" ).style.color = "#eee";
document.querySelector( "ceo" ).querySelector( "a" ).style.position = "fixed";
document.querySelector( "ceo" ).querySelector( "a" ).style.top = "0";
document.querySelector( "ceo" ).querySelector( "a" ).style.left = "50%";
document.querySelector( "ceo" ).querySelector( "a" ).style.right = "50%";
document.querySelector( "ceo" ).querySelector( "a" ).style.borderRadius = "7px";
document.querySelector( "ceo" ).querySelector( "a" ).style.display = "grid";
document.querySelector( "ceo" ).querySelector( "a" ).style.placeItems = "center";
document.querySelector( "ceo" ).querySelector( "a" ).style.margin = "0 auto";
document.querySelector( "ceo" ).querySelector( "a" ).setAttribute(    
   "download", "Slide.html" 
);
document.querySelector( "ceo" ).querySelector( "a" ).innerText = "Download";
/* download( clb.innerText, 'text/plain', 'Hello.txt' ); */



let 
   blob = new Blob( [ converted.join( "" ) ], { type: 'text/plain' } ),
   url = URL.createObjectURL( blob )
;

document.querySelector( "ceo" ).querySelector( "a" ).setAttribute(    
   "href", url 
);
