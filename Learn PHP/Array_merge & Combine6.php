<?php

 $name = array("Ram", "Mohan", "Salman");
 $age = array("25", "37", "43");


   $newArray = array_combine($name, $age);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

 ?>
