<?php

  function compare($a,$b){
    if ($a === $b) {
      return 0;
    }
    return ($a > $b)? 1 : -1;
  }

  $a1 = array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");

  $a2 = array("a"=>"red","f"=>"green","d"=>"purple");

  $newArry = array_intersect_uassoc($a1 ,$a2, "strcasecmp");

  echo "<pre>";
  print_r($newArry);
  echo "</pre>";

 ?>
