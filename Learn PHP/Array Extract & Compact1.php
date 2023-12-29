<?php
    $color = array('a' => 'red', 'b' => 'green', 'c' => 'blue');

    extract($color, EXTR_OVERWRITE);

    echo "Value of a : $a <br>";
    echo "Value of b : $b <br>";
    echo "Value of c : $c <br>";
 ?>
