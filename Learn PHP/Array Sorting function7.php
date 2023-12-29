<?php
//  $food = array('orange', 'banana', 'grapes', 'apple');
  $food = array (
    "d" => "lemon",
    "a" => "orange",
    "b" => "banana",
    "c" => "apple",

  );
  krsort($food);

  echo "<pre>";
  print_r($food);
  echo "</pre>";

 ?>
