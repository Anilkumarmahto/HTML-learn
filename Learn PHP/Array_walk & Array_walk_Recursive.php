<?php

  $fruits = array(
          "a" => "Lemon",
          "b" => "Orange",
          "c" => "Banana",
          "d" => "Apple"
  );

  array_walk($fruits, "myFunction");

  function myFunction($value, $key){
    echo "$key : $value <br>";
  }
 ?>
