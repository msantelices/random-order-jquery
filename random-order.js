jQuery(function($) {

    var randomItem = $(".item");

    for( var i = 0; i < randomItem.length; i++ ){

        var targetItem  = Math.floor( Math.random() * randomItem.length -1 ) + 1;
        var targetItem2 = Math.floor( Math.random() * randomItem.length -1 ) + 1;

        randomItem.eq( targetItem ).before( randomItem.eq(targetItem2) );

    };

});

