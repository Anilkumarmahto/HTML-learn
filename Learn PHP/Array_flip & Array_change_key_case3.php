<?php
  $a = array(
    "BILL" =>10,
    "Joe" => 20,
    "Peter" => 30
  );

  $newArray = array_change_key_case($a, CASE_LOWER);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";
 ?>
