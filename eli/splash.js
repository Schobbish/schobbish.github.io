$(document).scroll(function() {
    scrollDist = $(document).scrollTop();
    testForSwitch();
    console.log(scrollDist)
});
function testForSwitch(){
  if (scrollDist >= (160)){
      if ($('#nav-wrap').hasClass('nav-absolute')){
        $('#nav-wrap').removeClass("nav-absolute");
        $('#nav-wrap').addClass("nav-fixed");
      }
  } else {
    if (!$('#nav-wrap').hasClass('nav-absolute')){
      $('#nav-wrap').removeClass("nav-fixed");
      $('#nav-wrap').addClass("nav-absolute");
    }
  }
}