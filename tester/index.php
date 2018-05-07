<?php
   $code = $_GET['code'];
   if(!isset($code)) {
      ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>HTML Sandbox</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro%7CSource+Sans+Pro%7CSource+Serif+Pro" rel="stylesheet">
  <style>
    .top *, .top {
      margin: 0px;
      padding: 0px;
    }
    div.top {
      padding: 10px 5px 10px 5px;
      margin-top: 0;
    }
    .top textarea {
      width: 100%;
      max-width: 600px;
      height: 200px;
      font-family: "Source Code Pro", monospace;
      margin-bottom: 10px;
      padding: 2px;
    }
    .top h1, .top p {
      margin-bottom: 10px;
    }
    .top h1 {
      font-family: "Helvetica Neue", Helvetica, "Verdana", serif;
    }
    .top p {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .top input {
      margin-bottom: 5px;
    }
    #submit {
      margin-top: 10px;
    }
    .top hr {
      margin: 10px -10px 10px -10px;
    }
  </style>
</head>
<body>
  <div class="top">
    <h1>HTML Sandbox</h1>
    <p>Play with HTML elements for testing or for experimentation.</p>
    <p>Use ?code=[code] at the end of this page's URL to instantly display [code] without anything else.</p>
    <textarea placeholder="Type HTML code here. Use inline styles for CSS. &lt;script&gt; tags do work." id="html"></textarea><br>
    <!-- <textarea placeholder="CSS to add to code above" id="css"></textarea><br> -->
    <p>
      <input type="checkbox" id="inline"> Add onto the same line as previous<br>
      <input type="checkbox" id="hider"> Hide everything above your elements (no going back)<br>
      <input type="submit" id="submit" value="Add below!">
    </p>
    <hr>
  </div>
  <div class="content">
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script>
    $(document).ready(function() {
      $('#submit').click(function() {
        var cssToApply = $('#css').val();
        $('.content').append('<div>' + $('#html').val() + '</div>');
        if($('#inline').prop('checked') == true) {
          $('.content div').last().prev().css({
            "display": "inline"
          });
          $('.content div').last().css({
            "display": "inline"
          });
        };
        if($('#hider').prop('checked') == true) {
          $('.top').hide();
        }
      });
    });
  </script>
</body>
</html>
<?php
} else {
   echo $code;
}
?>
