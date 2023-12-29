<?php
  $a = array(
    "Bill" =>10,
    "Joe" => 20,
    "Peter" => 30
  );

  $newArray = array_flip($a);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";
 ?>
