// final draft
$( document ).ready( function() {

  $( '.button' ).click( function() {

    var event = {
      "type": $( this ).attr( "type" ),
      "value": $( this ).attr( "value" )
    };
    $( '#status' ).html( event.type + " : " + event.value );
    console.log( "Button event", event );

    switch ( event.type ) {
      case "function":
        setFunction( event.value );
        break;
      case "operator":
        setOperator( event.value );
        break;
      case "number":
        setNumber( event.value );
        break;
    }

    function setFunction( str ) {
      switch ( str ) {
        case "ac":
          $( '#display #primary' ).addClass("active");
          $( '#display #primary' ).html( "0" );
          $( '#display #secondary' ).html( "" );
          break;
        case "ce":
          $( '#display #secondary' ).html( "" ); // change to erase last
          break;
        case "=":
          $( '#display #secondary' ).html( "" ); // change to erase last
          break;
      }
    }

    function setOperator( str ) {
      $( '#display #primary' ).removeClass("active");
    }

    function setNumber( str ) {
      var text = $( '#display #primary' ).text();
      if ( str === "." ){
        if ( !text.includes( "." ) ){
          text += str;
        }
      } else {
        if ( !text.includes( "." ) ){
          text = text.replace(/^0+/, '') + "" + str;
        } else {
          text += str;
        }
      }
      $( '#display #primary' ).html( text );
    }

  } );

} ); // end doc ready function
