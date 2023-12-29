<?php

  $cars = ["Volovo","BMW","Toyota","Honda","Mercedes","opel"];

  $newArray = array_chunk($cars, 2);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";
 ?>
