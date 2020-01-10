$(document).ready(function () {

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

  $('#burger-btn').click(function () {
    $('#mob-menu').toggleClass('active');
    $('#close-nav').click(function () {
      $('#mob-menu').removeClass('active');
    })
  });


  PopUpHide();

 
  
});


 
function PopUpShow() {
  $("#popup-tel").show();
}

function PopUpHide() {
  $("#popup-tel").hide();
}




 
