<?php

  $age = [
    "bill" => 25,
    "steve" => 55,
    "elon" => 85
  ];
  echo "<ul>";
  foreach ($age as $key => $value) {
    echo "<li>$key = $value </li>";
  }
  echo "</ul>";

 ?>
