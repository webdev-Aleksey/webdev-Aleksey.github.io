
var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input){
  var label	 = input.nextElementSibling,
      labelVal = label.innerHTML;
  input.addEventListener('change', function(e){
    var fileName = '';
    if( this.files && this.files.length > 1 )
      fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    else
      fileName = e.target.value.split( '\\' ).pop();
		if( fileName )
      label.querySelector( 'span' ).innerHTML = fileName;
    else
      label.innerHTML = labelVal;
	});
});


// $(document).ready(function(){
//     PopUpHide();
// });
function PopUpShow(){
    $("#popup-1").show(500);
}
function PopUpHide(){
    $("#popup-1").hide(500);
}


$(window).scroll(function(){
  if ($(this).scrollTop() > 150) {
      $('.nav').addClass('fixed');
  } else {
      $('.nav').removeClass('fixed');
  }
});