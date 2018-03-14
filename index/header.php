<!-- head and fixed-navigation provided by index/header.php (this file)-->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link href="https://fonts.googleapis.com/css?family=Boogaloo%7CMontserrat:400,700%7CSource+Serif+Pro:600" rel="stylesheet">
	<link rel="stylesheet" href="/~AdamN/index/Slidebars/dev/slidebars.css">
	<link rel="stylesheet" href="/~AdamN/index/main.css">
	<link rel="stylesheet" href="page.css">
	<link rel="stylesheet" media="(max-width: 640px) and (orientation: portrait)" href="/~AdamN/index/phone-styles.css">
	<?php
		echo "<title>$title</title>";
		$path = '/~AdamN/index/favicons';
		include $favicon;
	 ?>
</head>
<body>
	<div id="fixed-navigation" canvas="">
		<nav>
			<a id="menu-button" href="">
				<img src="/~AdamN/index/images/triple-bars.png" alt="menu icon">
				Menu
			</a>
			<a href="/~AdamN/">
				<h1>DUCK WIZARD STUDIOS</h1>
			</a>
		</nav>
	</div>
   <div canvas="container" id="container">
