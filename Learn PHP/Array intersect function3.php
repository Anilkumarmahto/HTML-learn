<?php

  $a1 = array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");

  $a2 = array("a"=>"red","f"=>"green","d"=>"purple");

  $newArry = array_intersect_key($a1 ,$a2);

  echo "<pre>";
  print_r($newArry);
  echo "</pre>";

 ?>
