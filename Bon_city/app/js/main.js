/// Анимация бургер-меню

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

  /// Скрыть-показать меню 

  $('#toggle-hamburger').on('click', function (e) {

    $("#nav").slideToggle();

  });

  // Калькулятор

$('#calc_btn').on('click', function(){
  let amount = $('#calc_amount').val();
  let percent = 0.04
  let cashback = Math.round(amount*percent);
  $('#calc_cashback').html(cashback);
})


