<?php
  $food = array('orange', 'banana');
  $veggie = array('lemon', 'carrot');

  array_multisort($food, $veggie);

  echo "<pre>";
  print_r($food);
  echo "</pre>";

  echo "<pre>";
  print_r($veggie);
  echo "</pre>";

 ?>
