
/// Счётчик Товаров///

$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


/// Анимация бургер-меню ///

    (function () {

        "use strict";

        var toggles = document.querySelectorAll(".toggle-hamburger");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener("click", function (e) {
                e.preventDefault();
                (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
            });
        }

    })();

/// Скрыть показать меню ///

    $('#toggle-hamburger').on('click', function(e){

        $("#nav").slideToggle('slow');
        
    });

});