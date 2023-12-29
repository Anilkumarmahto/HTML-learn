<?php

  $color = [
              "first" => "red",
              "second" => "green",
              "third" => "blue",
              "fourth" => "yellow"
            ];

  $newArry = key_exists("second",$color);

  echo "<pre>";
  print_r($newArry);
    echo "</pre>";

    if ($newArry) {
        echo "key exists!";
    }else {
      echo "Key does not exis";
    }

 ?>
