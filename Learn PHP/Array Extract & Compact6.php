<?php
  $firstname = "Anil";
  $lastname = "Kumar";
  $age = "20";
  $gender = "Male";
  $country = "India";

  $extra = ["gender", "country"];

  $newArray = compact("firstname", "lastname", "age", $extra);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";
 ?>
