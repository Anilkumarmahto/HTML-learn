<?php

  $color = ['a' => 'red','b' => 'green','42' => "blue",'d' => "yellow"];

  $newArray = array_slice($color, 1, 3,true);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

 ?>
