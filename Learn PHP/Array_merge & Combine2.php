<?php

  $fruit = ['a' => "orange", 'b' => "banana", 'c' => "grapes"];

  $veggie = ['b' => 'carrot','e' => 'pea', 55, 58];


  $newArray = array_merge($fruit, $veggie,);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

 ?>
