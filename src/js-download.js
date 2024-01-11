

const stack = {
   some: "stuffs",
   alot: "of them!"
}

btnD.onclick = ( function() {
   let j = document.createElement("a")
   j.download = `stack_${ Date.now() }.json`;
   j.href = URL.createObjectURL( new Blob( [ JSON.stringify( stack, null, 2 ) ] ) );
   j.click();
} );

<button id="btnD">DOWNLOAD!</button>