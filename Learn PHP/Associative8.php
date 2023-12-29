<?php

  $age = [
    100 => "25",
    "bill" => 37.55,
    13 => 22
  ];

  $age["elon"] = 50;

  echo "<pre>";
  var_dump($age);
  echo "</pre>";

  echo $age[100]."<br>";
  echo $age["bill"]."<br>";
  echo $age[13]."<br>";


 ?>
