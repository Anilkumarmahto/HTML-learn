<?php

  $str = 'Hello I am Yahoo Baba';
  echo $str. "<br>";

  $newStr = addcslashes($str, "A..Z");

  echo $newStr;

//  echo stripslashes($newStr);

 ?>
