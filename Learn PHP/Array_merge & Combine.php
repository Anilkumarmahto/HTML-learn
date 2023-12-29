<?php

  $fruit = ["orange", "banana", "grapes"];

  $veggie = ['carrot', 'pea'];

  $color = ['red','blue'];

  $newArray = array_merge($fruit, $veggie, $color);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

 ?>
