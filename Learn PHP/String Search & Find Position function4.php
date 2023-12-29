<?php
  $str = "Hello WORLD. The World is nice";

  echo "strpos : " . strpos($str, "world") . "<br>";
  echo "strrpos : " . strrpos($str, "world",) . "<br>";

  echo "stripos : " . stripos($str, "world", 10) . "<br>";
  echo "strripos : " . strripos($str, "world",) . "<br>";
 ?>
