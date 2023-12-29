<?php
    function compare($a, $b){
      if ($a === $b) {
        return 0;
      }
      return ($a > $b)? 1 : -1;
    }
    $a1 = array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");

    $a2 = array("a"=>"red","f"=>"green","d"=>"purple");


    $newArray = array_diff_uassoc($a1, $a2, "compare");

    echo "<pre>";
    print_r($newArray);
    echo "</pre>";
 ?>
