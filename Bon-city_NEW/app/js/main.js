
$(document).ready(function () {


  // Адаптивный слайдер


  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


// Мобильное меню


  $('#burger-btn').click(function () {
    $('#mob-menu').toggleClass('active');
    $('#close-nav').click(function () {
      $('#mob-menu').removeClass('active');
    })
  });




  PopUpHide();



//Кнопка наверх


  var btn = $('#up-button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show-up-button');
    } else {
      btn.removeClass('show-up-button');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '1000');
  });
  


  // Аккордеон

  ! function(i) {
    var o, n;
    i(".questions_title").on("click", function() {
      o = i(this).parents(".accordion_item"),
      n = o.find(".questions_content"),
      o.hasClass("active_block") ? (o.removeClass("active_block"),
      n.slideUp(500)) : (o.addClass("active_block"),
      n.stop(!0, !0).slideDown(500),
      o.siblings(".active_block").removeClass("active_block").children(".questions_content").stop(!0, !0).slideUp(1000))
    })
  }(jQuery);



// анимация якоря

  $("#nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 600);
  });


  //Калькулятор

  $('#calc_btn').on('click', function(){
    let amount = $('#calc_amount').val();
    let percent = 0.04
    let cashback = Math.round(amount*percent);
    $('#calc_cashback').html(cashback+'р.');
  })



});

// Показать - скрыть попап окно
 
function PopUpShow() {
  $("#popup-tel").show();
}

function PopUpHide() {
  $("#popup-tel").hide();
}




 
