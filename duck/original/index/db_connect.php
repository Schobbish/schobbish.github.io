<?php
   // www.etch.wlwv.k12.or.us/~AdamN/php/db_connect.php

   // connect to wlhs server
   $connection = mysql_connect('localhost', 'wlhs', 'lions');
   if(!$connection) {
      exit("<p>unsuccessful connection to server</p>");
   }

   // connect to database
   $dbSelect = mysql_select_db('wlhs');
   if(!$dbSelect) {
      exit("<p>could not connect to database!</p>");
   }
?>
