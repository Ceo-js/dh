

let 
   _ = ( ...v ) => console.log( ...v ),
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v )
;

addEventListener( "load", ev => {
   let 
      strings = [
         /'\\x3csvg version/gi,
         /\\\/svg\\x3e'/gi,
         /\\x3c/gi,
         /\\x3d/gi,
         /\\x22/gi,
         /\\\//gi,
         /\\x3e/gi,
      ],
      replacers = [
         `<svg version`,
         `/svg>`,
         "<",
         "=",
         '"',
         "/",
         ">",
      ],
      removers = "; SK_modelChunkLoadStart = new Date().getTime();"
   ;

   let 
      scriptTags = $$( "script" ),
      btn = $( "button" ),
      textList = [],
      formatedList = [],
      converted = []
   ;


   btn.addEventListener( "click", ev => {
      scriptTags.forEach( s => {
         textList.push( s.innerHTML );
      } );

      textList.forEach( s => {
         formatedList.push( s.replaceAll( strings[ 0 ], replacers[ 0 ] ) );
      } );
      
      textList = [];
      textList.push( ...formatedList );
      formatedList= [];
      textList.forEach( s => {
         formatedList.push( s.replaceAll( strings[ 1 ], replacers[ 1 ] ) );
      } );
      
      textList = [];
      textList.push( ...formatedList );
      formatedList= [];
      textList.forEach( s => {
         formatedList.push( s.replaceAll( strings[ 2 ], replacers[ 2 ] ) );
      } );
      
      textList = [];
      textList.push( ...formatedList );
      formatedList= [];
      textList.forEach( s => {
         formatedList.push( s.replaceAll( strings[ 3 ], replacers[ 3 ] ) );
      } );
      
      textList = [];
      textList.push( ...formatedList );
      formatedList= [];
      textList.forEach( s => {
         formatedList.push( s.replaceAll( strings[ 4 ], replacers[ 4 ] ) );
      } );
      
      textList = [];
      textList.push( ...formatedList );
      formatedList= [];
      textList.forEach( s => {
         formatedList.push( s.replaceAll( strings[ 5 ], replacers[ 5 ] ) );
      } );
      
      textList = [];
      textList.push( ...formatedList );
      formatedList= [];
      textList.forEach( s => {
         formatedList.push( s.replaceAll( strings[ 6 ], replacers[ 6 ] ) );
      } );


      formatedList.forEach( s => {
         let
            tempList = [],
            bkpList = []
         ;
         
         if( s.startsWith( "SK_svgData = <svg version" ) ) {
            converted.push( s.replaceAll( /SK_svgData = <svg version/gi, "<svg version" ) );
         }

         converted.forEach( c => {
            tempList.push( ...c.split( "; SK_modelChunkLoadStart = new Date().getTime();" ) );
         } );
         
         tempList.forEach( t => {
            if( t.startsWith( "<svg v" ) ) {
               bkpList.push( t );
            }
         } );
         
         document.write( "<body></body>" );
         
         document.body.innerHTML = bkpList;

      } );

   } );


   
} );