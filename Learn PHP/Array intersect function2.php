<?php

  $a1 = array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");

  $a2 = array("a"=>"red","f"=>"green","d"=>"purple");

  $a3 = array("a"=>"red","b"=>"black","h"=>"yellow");

  $newArry = array_intersect($a1 ,$a2, $a3);

  echo "<pre>";
  print_r($newArry);
  echo "</pre>";

 ?>
