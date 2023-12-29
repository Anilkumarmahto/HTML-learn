<?php

  $str = 'Hello I am Yahoo Baba';
  echo $str. "<br>";

  $newStr = addcslashes($str, "a..z");

  echo $newStr;

//  echo stripslashes($newStr);

 ?>
