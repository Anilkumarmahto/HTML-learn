<?php
  $color = array("red","green","blue","yellow","brown");

  $newArray = array_rand($color);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

  echo $color[$newArray];
 ?>
