<?php
  $color = array("a" =>"red","b" =>"green","c" =>"blue","d" =>"yellow");

  $newArray = array_rand($color,2);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

//  echo $color[$newArray[0]] . "<br>";
//  echo $color[$newArray[1]];
 ?>
