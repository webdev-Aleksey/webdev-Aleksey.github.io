$(document).ready(function(){new SimpleBar($(".scrollbar-vert")[0],{autoHide:!1}),new SimpleBar($(".scrollbar-hor")[0],{autoHide:!1,direction:"ltr"}),$(".card").on("click",function(t){$("iframe").attr("src",$(this).data("value")),console.log($(this).data("value"))}),$(".yourSum").on("change",function(){$(this).val()?$(this).parent().find($(".result")).text((.04*$(this).val()).toFixed(2)):$(this).parent().find($(".result")).text("кешбэк")}),$(".card-calc").on("click",function(t){t.stopPropagation()}),$(".switch-mode").on("click",function(t){$(this).hasClass("switch-mode-1")?($(".switch-container-btn").toggleClass("toRight"),$(".switch-mode-1").toggleClass("toggleBlack"),$(".switch-mode-1").toggleClass("toggleWhite"),$(".switch-mode-2").toggleClass("toggleWhite")):($(".switch-container-btn").toggleClass("toRight"),$(".switch-mode-2").toggleClass("toggleBlack"),$(".switch-mode-2").toggleClass("toggleWhite"),$(".switch-mode-1").toggleClass("toggleWhite")),$(".partnersCoords__content-cards").toggleClass("hide"),$(".partnersCoords__content-table").toggleClass("hide"),t.preventDefault()}),$(function(){$.widget("custom.iconselectmenu",$.ui.selectmenu,{_renderItem:function(t,e){var a=$("<li>"),s=$("<div>",{text:e.label});return e.disabled&&a.addClass("ui-state-disabled"),$("<span>",{style:e.element.attr("data-style"),class:"ui-icon "+e.element.attr("data-class")}).appendTo(s),a.append(s).appendTo(t)}}),$("#city").selectmenu().selectmenu("menuWidget").addClass("ui-menu-icons avatar"),$("#category").iconselectmenu().iconselectmenu("menuWidget").addClass("ui-menu-icons avatar")}),$(window).resize(function(){$("#city").each(function(){"true"==$(this).next().attr("aria-expanded")&&$(this).selectmenu("close")}),$("#category").each(function(){"true"==$(this).next().attr("aria-expanded")&&$(this).iconselectmenu("close")})})});