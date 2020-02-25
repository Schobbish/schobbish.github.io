<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link href="https://fonts.googleapis.com/css?family=Boogaloo%7CMontserrat:400,700%7CSource+Serif+Pro:600" rel="stylesheet">
	<link rel="stylesheet" href="http://etch.wlwv.k12.or.us/~AdamN/index/main.css">
	<link rel="stylesheet" href="thanks.css">
   <title>Thank you!</title>
	<?php
		$path = 'http://etch.wlwv.k12.or.us/~AdamN/index/favicons';
		include '../index/favicon.php';
	 ?>
</head>
<body>
   <h2>Thank you.</h2>
   <p>Your response has been recorded.</p>
   <p>I don't know what I'd do without you.</p>
	<div id="buttons">
		<a href="http://etch.wlwv.k12.or.us/~AdamN/index.php" class="button">Go Back</a>
	</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="http://www.etch.wlwv.k12.or.us/~AdamN/index/jquery.color-2.1.2.min.js"></script>
<script>
	// make the back button actually go back if js is enabled
/*	$('.button').attr('href', '');
	$('.button').click(function() {
		window.history.back();
	});*/
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
</script>
</html>
