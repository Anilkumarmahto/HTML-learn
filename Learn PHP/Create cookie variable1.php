<?php
  $cookie_name = "user";
  $cookie_value = "Anil Kumar";

  setcookie($cookie_name,$cookie_value,time() + (86400 + 30), "/");

 ?>

 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta charset="utf-8">
     <title></title>
   </head>
   <body>

     <?php
            if(!isset($_COOKIE[$cookie_name])){
              echo "Cookie is not set";
            }else {

            }

      ?>View Cookie.php
   </body>
 </html>
