<?php

  $color = ["0" => "brown", "1" => "red","2" => "green","3" => "blue","4" => "yellow"];

  $newArray = array_slice($color, 1, 3,true);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

 ?>
