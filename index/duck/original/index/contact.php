<?php
   include 'db_connect.php';
   if(isset($_POST['name']) === true && isset($_POST['email']) === true && isset($_POST['subject']) === true && isset($_POST['message']) === true) {
      $name = $_POST['name'];
      $email = $_POST['email'];
      $subject = $_POST['subject'];
      $message = $_POST['message'];

      $sql = "INSERT INTO `adamn_contact` SET `name` = '$name', `email` = '$email', `subject` = '$subject', `message` = '$message'";
      $result = mysql_query($sql);
      header("Location: http://etch.wlwv.k12.or.us/~AdamN/contact/thanks.php");
   } else {
      header("Location: http://etch.wlwv.k12.or.us/~AdamN/contact/error.html");
   }
   //$mailto = "adamn@wlhs.wlwv.k12.or.us";
   /*$mailto = '';
   $subject = $_POST['subject'];

   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];

   $message = stripslashes($message);
   $header = "From: $name\nReply to: $email";
   mail($mailto, $subject, $message, $header);*/
?>
