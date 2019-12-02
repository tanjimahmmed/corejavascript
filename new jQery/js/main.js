(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $("button").click(function () {
            // $("#center p:first").hide();
            // $("div:first").hide();
            // $("div:not(#right, #center)").hide();
            // $("div:odd").hide();
            // $("p:contains('center')").hide();
            // $("div:has(b)").hide();
            // $("p:has(b)").hide();
            // $("ul li:nth-child(1)").hide();
            // $("body div:nth-child(3)").hide();
            // $("li:empty").hide();
            // $("li:first").css("color", "red");
            // $("#right").css("border", "3px solid red");
            // $("#right p").css("color", "red");
            // $("#right").css({"border" : "2px solid red" , "color" : "red"});
            // $("p").html("<p>Name: Tanjim<p/> ");
            // $("p").text("Twinkel Cats");
            // $("p").html("<h1>You sick</h1>");
            // $("h2").text("give the some text add");
            $("#left").css("color", "red").css("border", "1px solid #green").fadeOut("2000");
        });

    });

    jQuery(window).load(function () {

    });

}(jQuery));	