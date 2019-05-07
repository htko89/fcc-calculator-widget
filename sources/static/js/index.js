// final draft
$( document ).ready( function() {

  var buffer = "0";
  var history = [];
  var historyType = [];
  var lastType = "number";

  $( '.button' ).click( function button() {
    // button event
    var event = {
      "type": $( this ).attr( "type" ),
      "value": $( this ).attr( "value" )
    };
    // case for event type
    switch ( event.type ) {
      case "function":
        console.log( "function" );
        switch ( event.value ) {
          case "ac":
            $( '#display #buffer' ).addClass( "active" );
            buffer = "0";
            history = [];
            historyType = [];
            lastType = "number";
            break;
          case "ce":
            if( history.length > 0 ){
              buffer = history[history.length-1];
              lastType = historyType[historyType.length-1];
              history.pop();
              historyType.pop();
            }
            break;
          case "=":
            if(lastType === "number"){
              $( '#display #buffer' ).addClass( "active" );
              buffer = eval(history.join( "" )+buffer).toString(10);
              history = [];
              historyType = [];
              lastType = "number";
            }
            break;
        }
        break;
      case "operator":
        console.log( "operator" );
        if ( lastType !== "operator" ) {
          $( '#display #buffer' ).removeClass( "active" );
          buffer = parseFloat(buffer).toString(10);
          history.push( buffer );
          historyType.push( lastType );
          lastType = "operator";
          buffer = event.value;
        } else {
          buffer = event.value;
        }
        break;
      case "number":
        console.log( "number" );
        if ( lastType !== "number" ) {
          history.push( buffer )
          historyType.push( lastType );
          lastType = "number";
          buffer = event.value;
        } else {
          if ( decimalSafe( event.value, buffer ) ) {
            buffer += event.value;
          }
        }
        if( buffer.slice(-1) !== "0" && buffer.slice(-1) !== "." ){
          buffer = parseFloat(buffer).toString(10);
        }
        break;
    }
    // render
    $( '#display #buffer' ).html( buffer );
    $( '#display #history' ).html( history.join( "" ) + buffer );
    console.log( history );
    console.log( historyType );
  } ); // end button function

  function decimalSafe( str, buffer ) {
    if ( str === "." ) {
      if ( !buffer.includes( "." ) ) {
        return true;
      }
    } else {
      return true;
    }
    return false;
  }
} ); // end doc ready
