<?php
  $firstname = "Anil";
  $lastname = "Kumar";
  $age = "20";

  $newArray = compact("firstname", "lastname", "age");

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";
 ?>
