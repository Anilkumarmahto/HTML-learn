<?php
  function myFunction($n, $m){
    $n += $m;
    return $n;
  }
//  $a = ['Orange', 'banana', 'apple'];
  $a = [1, 2, 3, 4, 5];
  $newArray =  array_reduce($a, 'myFunction',10);
  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

 ?>
