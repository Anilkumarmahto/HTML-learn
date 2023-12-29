<?php
  $str = "Hello world. The world is nice";

  $find = ["Hello", "WORLD"];
  $replace = ["Hi", "earth"];

  echo str_ireplace($find, $replace, $str);
 ?>
