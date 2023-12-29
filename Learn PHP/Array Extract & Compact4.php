<?php
  $a = "orange";
    $color = array('a' => 'red', 'b' => 'green', 'c' => 'blue');

    extract($color, EXTR_PREFIX_ALL, "test");

    echo "Value of a : $a <br>";
      echo "Value of a : $test_a <br>";
    echo "Value of b : $test_b <br>";
    echo "Value of c : $test_c <br>";
 ?>
