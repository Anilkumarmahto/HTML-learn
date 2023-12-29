<?php

  $str = 'Hello I am Yahoo Baba';
  echo $str. "<br>";

  $newStr = addcslashes($str, "Y");

  echo $newStr;

//  echo stripslashes($newStr);

 ?>
