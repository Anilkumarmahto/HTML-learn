<?php

  $color = ["red", "green","blue", "yellow", "brown"];

  $newArray = array_slice($color, -2, 2,true);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

 ?>
