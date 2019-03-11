$(document).ready(function() {
   // playing this can't be done with the jquery function
   var audioBox = document.getElementById("audioBox");
   var d;
   var played;
   audioBox.load();

   // this will run fifty times a second (for accuracy)
   setInterval(function() {
      d = new Date();
      $('.clock').html(d.toLocaleTimeString('en-us'));

      if(d.getDay() == 6) {
         $('.day').html('Today is Saturday');
      } else {
         $('.day').html('Today is Not Saturday');
      }
      // if saturday and exactly at 08:59:29 (am or pm) and not played already
      // correct if statement:
      // d.getDay() == 6 && (d.getHours() == 8 || d.getHours() == 20) && d.getMinutes() == 59 && d.getSeconds() == 29 && !played
      if(d.getDay() == 6 && (d.getHours() == 8 || d.getHours() == 20) && d.getMinutes() == 59 && d.getSeconds() == 29 && !played) {
         played = true;
         audioBox.play();
      }
   }, 20);
});
