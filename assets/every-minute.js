$(document).ready(function() {
   // playing this can't be done with the jquery function
   var audioBox = document.getElementById("audioBox");
   var d;
   var played;

   $('.clock').click(function() {
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
          // if saturday and exactly at 8:59:29 (am or pm) and not played already
          // correct if statement:
          // d.getDay() == 6 && (d.getHours() == 9 || d.getHours() == 21) && d.getMinutes() == 0 && d.getSeconds() == 29 && !played
          if(d.getSeconds() == 29 && !played) {
             played = true;
             audioBox.play();
          }
       }, 20);
   });


});
