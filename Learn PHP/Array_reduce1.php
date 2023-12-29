<?php
  function myFunction($n, $m){
    return $n . "-" . $m;
  }
  $a = ['Orange', 'banana', 'apple'];

  $newArray =  array_reduce($a, 'myFunction', 'lemon');
  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

 ?>
