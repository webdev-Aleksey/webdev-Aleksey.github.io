// /// Счётчик Товаров

// $(document).ready(function () {
//     $('.minus').click(function () {
//         var $input = $(this).parent().find('input');
//         var count = parseInt($input.val()) - 1;
//         count = count < 1 ? 1 : count;
//         $input.val(count);
//         $input.change();
//         return false;
//     });
//     $('.plus').click(function () {
//         var $input = $(this).parent().find('input');
//         $input.val(parseInt($input.val()) + 1);
//         $input.change();
//         return false;
//     });


//     /// Анимация бургер-меню

//     (function () {

//         "use strict";

//         var toggles = document.querySelectorAll(".toggle-hamburger");

//         for (var i = toggles.length - 1; i >= 0; i--) {
//             var toggle = toggles[i];
//             toggleHandler(toggle);
//         };

//         function toggleHandler(toggle) {
//             toggle.addEventListener("click", function (e) {
//                 e.preventDefault();
//                 (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
//             });
//         }

//     })();

//     /// Скрыть-показать меню 

//     $('#toggle-hamburger').on('click', function (e) {

//         $("#nav").slideToggle('slow');

//     });



//     // Пошаговая форма

//     var currentTab = 0; // Текущая вкладка установлена как первая вкладка (0)
//     showTab(currentTab); // Показать текущую вкладку

//     function showTab(n) {
//         // Эта функция отобразит указанную вкладку в форме ...
//         var x = document.getElementsByClassName("tab");
//         x[n].style.display = "block";
//         // ... и исправляем кнопки «Предыдущая / Следующая»:
//         if (n == 0) {
//             document.getElementById("prevBtn").style.display = "none";
//         } else {
//             document.getElementById("prevBtn").style.display = "inline";
//         }
//         if (n == (x.length - 1)) {
//             document.getElementById("nextBtn").innerHTML = "Submit";
//         } else {
//             document.getElementById("nextBtn").innerHTML = "Next";
//         }
//         // ... и запустить функцию, которая будет отображать правильный индикатор шага:
//         fixStepIndicator(n)
//     }

//     function nextPrev(n) {
//         // Эта функция определит, какую вкладку отображать
//         var x = document.getElementsByClassName("tab");
//         // Выход из функции, если какое-либо поле в текущей вкладке недопустимо:
//         if (n == 1 && !validateForm()) return false;
//         // Скрыть текущую вкладку:
//         x[currentTab].style.display = "none";
//         // Увеличить или уменьшить текущую вкладку на 1:
//         currentTab = currentTab + n;
//         // если вы достигли конца формы ...
//         if (currentTab >= x.length) {
//             // ... форма отправляется:
//             document.getElementById("form").submit();
//             return false;
//         }
//         // В противном случае отобразите правильную вкладку:
//         showTab(currentTab);
//     }

//     function validateForm() {
//         // Эта функция имеет дело с проверкой полей формы
//         var x, y, i, valid = true;
//         x = document.getElementsByClassName("tab");
//         y = x[currentTab].getElementsByTagName("input");
//         // Цикл, который проверяет каждое поле ввода в текущей вкладке:
//         for (i = 0; i < y.length; i++) {
//             // Если поле пустое ...
//             if (y[i].value == "") {
//                 // добавить недопустимый класс в поле:
//                 y[i].className += " invalid";
//                 // и устанавливаем текущий действительный статус в false
//                 valid = false;
//             }
//         }
//         // Если действительный статус равен true, пометить шаг как завершенный и действительный:
//         if (valid) {
//             document.getElementsByClassName("step")[currentTab].className += " finish";
//         }
//         return valid; // вернуть действительный статус
//     }

//     function fixStepIndicator(n) {
//         // Эта функция удаляет «активный» класс всех шагов ...
//         var i, x = document.getElementsByClassName("step");
//         for (i = 0; i < x.length; i++) {
//             x[i].className = x[i].className.replace(" active", "");
//         }
//         // ... и добавляет «активный» класс на текущий шаг:
//         x[n].className += " active";
//     }

// });


var currentTab = 0;// Текущая вкладка установлена как первая вкладка (0)
showTab(currentTab); // Показать текущую вкладку

function showTab(n) {
  // Эта функция отобразит указанную вкладку в форме ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
 // ... и исправляем кнопки «Предыдущая / Следующая»:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... и запустить функцию, которая будет отображать правильный индикатор шага:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // Эта функция определит, какую вкладку отображать
  var x = document.getElementsByClassName("tab");
  // Выход из функции, если какое-либо поле в текущей вкладке недопустимо:
  if (n == 1 && !validateForm()) return false;
  // Скрыть текущую вкладку:
  x[currentTab].style.display = "none";
  // Увеличить или уменьшить текущую вкладку на 1:
  currentTab = currentTab + n;
  // если вы достигли конца формы ...
  if (currentTab >= x.length) {
    // ... форма отправляется:
    document.getElementById("regForm").submit();
    return false;
  }
  // В противном случае отобразите правильную вкладку:
  showTab(currentTab);
}

function validateForm() {
 // Эта функция имеет дело с проверкой полей формы
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // Цикл, который проверяет каждое поле ввода в текущей вкладке:
  for (i = 0; i < y.length; i++) {
    // Если поле пустое ...
    if (y[i].value == "") {
      // добавить недопустимый класс в поле:
      y[i].className += " invalid";
      // и устанавливаем текущий действительный статус в false
      valid = false;
    }
  }
 // Если действительный статус равен true, пометить шаг как завершенный и действительный:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // вернуть действительный статус
}

function fixStepIndicator(n) {
  // Эта функция удаляет «активный» класс всех шагов ...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  // ... и добавляет «активный» класс на текущий шаг:
  x[n].className += " active";
}