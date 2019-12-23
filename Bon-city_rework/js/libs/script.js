// var animationDone=!1,scroll=$(window).scrollTop();function animateJars(){scroll=$(window).scrollTop(),animationDone||(1300<=scroll&&(setTimeout(function(){$(".calc-img-1").addClass("calc-img-1-set")},0),setTimeout(function(){$(".calc-img-2").addClass("calc-img-2-set")},0),setTimeout(function(){$(".calc-img-3").addClass("calc-img-3-set")},0)),1500<=scroll&&(setTimeout(function(){$(".calc-img-full-1").addClass("calc-img-full-1-set")},0),setTimeout(function(){$(".calc-img-full-2").addClass("calc-img-full-2-set")},0),setTimeout(function(){$(".calc-img-full-3").addClass("calc-img-full-3-set")},0)),7e3<=scroll&&$(".flower").addClass("flower-set"))}document.getElementById("calc-input").onkeydown=function(c){return 48<=c.which&&c.which<=57||96<=c.which&&c.which<=105||8==c.which||37<=c.which&&c.which<=40||46==c.which},$("#calc-content-first").show(),$("#calc-content-first").css("left",0),$("#calc-content-second").hide(),$("#calc-content-second").css("left",6e3),$("#accordion").accordion({heightStyle:"content",collapsible:!0,active:!1,icons:{header:"iconOpen ",activeHeader:"iconClosed"}}),$("#how-it-works-button-click").click(function(){$("#calc-input").val()&&($("#calc-input"),$("#saving").text(.5*$("#calc-input").val()),$(".calculator__header").animate({left:"-6000"},1e3,"swing"),setTimeout(function(){$(".calc-img-full-1").removeClass("calc-img-full-1-set")},200),setTimeout(function(){$(".calc-img-full-2").removeClass("calc-img-full-2-set")},200),setTimeout(function(){$(".calc-img-full-3").removeClass("calc-img-full-3-set")},200),animationDone=!0,$(".calculator__header-2").animate({left:"5%"},2e3,"swing"),$(".calc-coins-left").animate({left:"0"},2e3,"swing"),$(".calc-coins-right").animate({right:"0"},2e3,"swing"),$("#calc-content-first").animate({left:"-6000"},1e3,"swing",function(){$("#calc-content-first").hide(),$("#calc-content-second").show(),$("#calc-content-second").animate({left:"0",display:"block"},1e3)}))}),$(document).ready(function(){animateJars()}),$(document).scroll(function(){animateJars()}),$("#how-it-works-button-back-click").click(function(){$(".calculator__header").animate({left:"0"},2e3,"swing"),$(".calculator__header-2").animate({left:"6000"},2e3,"swing"),setTimeout(function(){$(".calc-img-full-1").addClass("calc-img-full-1-set")},1e3),setTimeout(function(){$(".calc-img-full-2").addClass("calc-img-full-2-set")},1e3),setTimeout(function(){$(".calc-img-full-3").addClass("calc-img-full-3-set")},1e3),$(".calc-coins-left").animate({left:"-6000"},2e3,"swing"),$(".calc-coins-right").animate({right:"-6000"},2e3,"swing"),$("#calc-content-second").animate({left:"6000",display:"block"},1e3,"swing",function(){$("#calc-content-first").show(),$("#calc-content-second").hide(),$("#calc-content-first").animate({left:"0",display:"block"},1e3)})});var cerrentVal=5e3;$("#range").slider({range:"min",min:0,max:1e4,value:cerrentVal,slide:function(c,l){$("#calc-input").val(l.value)}}),$(".calc-input").val(cerrentVal);


var animationDone = !1,
    scroll = $(window).scrollTop();

function animateJars() {
    scroll = $(window).scrollTop(), animationDone || (1300 <= scroll && (setTimeout(function() {
        $(".calc-img-1").addClass("calc-img-1-set")
    }, 0), setTimeout(function() {
        $(".calc-img-2").addClass("calc-img-2-set")
    }, 0), setTimeout(function() {
        $(".calc-img-3").addClass("calc-img-3-set")
    }, 0)), 1500 <= scroll && (setTimeout(function() {
        $(".calc-img-full-1").addClass("calc-img-full-1-set")
    }, 0), setTimeout(function() {
        $(".calc-img-full-2").addClass("calc-img-full-2-set")
    }, 0), setTimeout(function() {
        $(".calc-img-full-3").addClass("calc-img-full-3-set")
    }, 0)), 7e3 <= scroll && $(".flower").addClass("flower-set"))
}
// document.getElementById("calc-input").onkeydown = function(c) {
//     return 48 <= c.which && c.which <= 57 || 96 <= c.which && c.which <= 105 || 8 == c.which || 37 <= c.which && c.which <= 40 || 46 == c.which
// }, $("#calc-content-first").show(), $("#calc-content-first").css("left", 0), $("#calc-content-second").hide(), $("#calc-content-second").css("left", 6e3), $("#accordion").accordion({
//     heightStyle: "content",
//     collapsible: !0,
//     active: !1,
//     icons: {
//         header: "iconOpen ",
//         activeHeader: "iconClosed"
//     }
// }), $("#how-it-works-button-click").click(function() {
//     $("#calc-input").val() && ($("#calc-input"), $("#saving").text(.5 * $("#calc-input").val()), $(".calculator__header").animate({
//         left: "-6000"
//     }, 1e3, "swing"), setTimeout(function() {
//         $(".calc-img-full-1").removeClass("calc-img-full-1-set")
//     }, 200), setTimeout(function() {
//         $(".calc-img-full-2").removeClass("calc-img-full-2-set")
//     }, 200), setTimeout(function() {
//         $(".calc-img-full-3").removeClass("calc-img-full-3-set")
//     }, 200), animationDone = !0, $(".calculator__header-2").animate({
//         left: "5%"
//     }, 2e3, "swing"), $(".calc-coins-left").animate({
//         left: "0"
//     }, 2e3, "swing"), $(".calc-coins-right").animate({
//         right: "0"
//     }, 2e3, "swing"), $("#calc-content-first").animate({
//         left: "-6000"
//     }, 1e3, "swing", function() {
//         $("#calc-content-first").hide(), $("#calc-content-second").show(), $("#calc-content-second").animate({
//             left: "0",
//             display: "block"
//         }, 1e3)
//     }))
// }), 
$(document).ready(function() {
    animateJars()
}), $(document).scroll(function() {
    animateJars()
}), $("#how-it-works-button-back-click").click(function() {
    $(".calculator__header").animate({
        left: "0"
    }, 2e3, "swing"), $(".calculator__header-2").animate({
        left: "6000"
    }, 2e3, "swing"), setTimeout(function() {
        $(".calc-img-full-1").addClass("calc-img-full-1-set")
    }, 1e3), setTimeout(function() {
        $(".calc-img-full-2").addClass("calc-img-full-2-set")
    }, 1e3), setTimeout(function() {
        $(".calc-img-full-3").addClass("calc-img-full-3-set")
    }, 1e3), $(".calc-coins-left").animate({
        left: "-6000"
    }, 2e3, "swing"), $(".calc-coins-right").animate({
        right: "-6000"
    }, 2e3, "swing"), $("#calc-content-second").animate({
        left: "6000",
        display: "block"
    }, 1e3, "swing", function() {
        $("#calc-content-first").show(), $("#calc-content-second").hide(), $("#calc-content-first").animate({
            left: "0",
            display: "block"
        }, 1e3)
    })
});
var cerrentVal = 5e3;
$("#range").slider({
    range: "min",
    min: 0,
    max: 1e4,
    value: cerrentVal,
    slide: function(c, l) {
        $("#calc-input").val(l.value)
    }
}), $(".calc-input").val(cerrentVal);



$("#accordion").accordion({
        heightStyle: "content",
        collapsible: !0,
        active: !1,
        icons: {
            header: "iconOpen ",
            activeHeader: "iconClosed"
        }
    });