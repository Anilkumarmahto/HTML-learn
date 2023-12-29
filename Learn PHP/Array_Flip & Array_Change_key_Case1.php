<?php
  $a = array(
    "Bill" =>10,
    "Joe" => 20,
    "Peter" => 30
  );

  $newArray = array_change_key_case($a);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";
 ?>
