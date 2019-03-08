/*$(document).ready(function() {
   var forms = $('form');
   var form = forms[0];
   $('#contact-form').attr({onsubmit: 'return validateForm();'});
   console.log(form);
   $('#submit').click(function() {
      $('#contact-form').submit();
   });
});
var validateForm = function() {
   var spamProtection = false;
   var inputs = $('#contact-form').children();
   inputs.each(function() {
      if($(this).val() === '' || $(this).val() === null && spamProtection === false) {
         alert('One or more of your fields are empty. Please fix this.');
         spamProtection = true;
         $(this).focus();
         return false;
      }
   });
   if(spamProtection !== true) {
      console.log('validateForm was a success');
      return true;
   }
};*/
