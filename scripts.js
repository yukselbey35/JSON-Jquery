
        /*$(document).ready(function)  == $(function)
        The ready() method can only be used on the current document, so no selector is required:   
        How to use = $(selector).action()
        */
        $(document).ready(function(){
            $("p").click(function(){ //Select by tag name
                $(this).hide(); //where and Action
            });

            $("#head1").click(function(){  //Select by id
                $(this).hide();
            });

            $(".div1").click(function(){ //Select by class
                $(this).hide();
            });

            $("button").click(function(){ //Select by attribute
                $(".div1").hide(); //Where and action
            });

            $("#hideall").click(function(){ //Select all
                $("*").hide();
            });

            $("img").click(function(){ //Select this
                $(this).hide();
            });

            $("#hidePTag").click(function(){
                $("p:first").hide();
            });

            $("#hidefirstli").click(function(){
                $("ul li:first-child").hide();
            });

            $("#hideAllhref").click(function(){
                $('[href]').hide();
            });

            $("#changeColor").click(function(){
                $("tr:odd").css({ background: "#ccc", color: "red" });
            });

            $("#outer").mouseover(function(){
                $("#outer").css({ background: "#aaa", color: "aqua" });
            });
            $("#outer").mouseout(function(){
                $("#outer").css({ background: "white", color: "black" });
            }) 

            $(".changeRed").mouseover(function(){ //Select by class name: tag name is .changeRed
                $(".changeRed").css({ background: "red", color: "white" }); // Select and Action
            });
            $(".changeRed").mouseout(function(){
                $(".changeRed").css({ background: "white", color: "black" });
            });

            $(".changeBlue").mouseover(function(){
                $(".changeBlue").css({ background: "#00F", color: "white" });
            });
            $(".changeBlue").mouseout(function(){
                $(".changeBlue").css({ background: "white", color: "black" });
            });

            $( "li" ).hover(
                function() {
                  $( this ).append( $( "<span> ***</span>" ) );
                }, function() {
                  $( this ).find( "span" ).last().remove();
                }
              );
               
              $( "li.fade" ).hover(function() {
                $( this ).fadeOut( 100 );
                $( this ).fadeIn( 500 );
              });


        });
    