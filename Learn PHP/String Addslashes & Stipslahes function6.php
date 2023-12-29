<?php

  $str = 'Hello \I am Yahoo \Baba';
  echo $str. "<br>";

  $newStr = addcslashes($str, "a..f");

//  echo $newStr;

  echo stripcslashes($str);

 ?>
