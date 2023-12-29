<?php
  function myFunction($n, $m){
    return $n . "-" . $m;
  }
  $a = ['Orange', 'banana', 'apple'];

  $newArray =  array_reduce($a, 'myFunction', 20);
  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

 ?>
