<?php
  function myFunction($n, $m){
    return $n . "-" . $m;
  }
//  $a = ['Orange', 'banana', 'apple'];
  $a = [1, 2, 3, 4, 5];
  $newArray =  array_reduce($a, 'myFunction', 20);
  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

 ?>
