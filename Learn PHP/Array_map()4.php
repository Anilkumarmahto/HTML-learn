<?php
  function square($n, $m)
  {
    return [$n => $m];
  }
  $a = [1, 2, 3, 4, 5];
  $b = ['lemon', 'orange', 'banana', 'apple', 'guava'];
  $newArray = array_map(null, $a, $b);

  echo "<pre>";
  print_r($newArray);
  echo "<\pre>";
 ?>
