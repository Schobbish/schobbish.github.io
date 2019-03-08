$(document).ready(function() {
   // initialize slidebars
   var controller = new slidebars();
   controller.init();

   // #menu-button toggles slidebars
   $('#menu-button').click(function(event) {
      // stop default action and bubbling
      event.stopPropagation();
      event.preventDefault();
      // toggle menu
      controller.toggle('id-1');
   });

   // #container closes the menu
   $('#container').click(function(event) {
      // stop default action and bubbling (disabled due to links not working)
      /*event.stopPropagation();
      event.preventDefault();*/
      // toggle menu
      controller.close('id-1');
   });

   // the links inside the menu closes the menu then redirects
   $('.menu-links').click(function(event) {
      // stop default action and bubbling
      event.stopPropagation();
      event.preventDefault();
      // toggle menu
      controller.close('id-1');
      /* THEN go to the site (href needs to be defined outside because $(this)
         returns undefined otherwise) */
      var href = $(this).attr('href');
      window.setTimeout(function() {
         location.assign(href);
      }, 275);
   });

   // $('#container a').click(function() {
   //    if($(this).attr('id') !== 'menu-button') {
   //       /* creates an exception for the menu-button.
   //       And yes this is necessary because of Slidebars or something */
   //       location.assign($(this).attr('href'));
   //    }
   // });

   $('#menu-button').hover(
      function() {
         $(this).animate({
            backgroundColor: '#c1c1c1',
            color: '#202020'
         }, 200);
      }, function() {
         $(this).animate({
            backgroundColor: '#e1e1e1',
            color: '#282828'
         }, 200);
      }
   );
   $('nav a h1').hover(
      function() {
         $(this).animate({
            color: '#cf4242'
         }, 200);
      }, function() {
         $(this).animate({
            color: '#ff5252'
         }, 200);
      }
   );
   $('.button').hover(
      function() {
         $(this).animate({
            backgroundColor: '#383838',
            color: '#e1e1e1'
         }, 200);
      }, function() {
         $(this).animate({
            backgroundColor: '#e1e1e1',
            color: '#282828'
         }, 200);
      }
   );
   $('.menu-links').hover(
      function() {
         $(this).animate({
            backgroundColor: '#282828',
            color: '#e1e1e1'
         }, 100);
      }, function() {
         $(this).animate({
            backgroundColor: '#202020',
            color: '#e1e1e1'
         }, 100);
      }
   );
});
