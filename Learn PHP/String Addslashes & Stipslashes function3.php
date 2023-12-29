<?php

  $str = 'Hello I am Yahoo Baba';
  echo $str. "<br>";

  $newStr = addcslashes($str, "Ya");

  echo $newStr;

//  echo stripslashes($newStr);

 ?>
