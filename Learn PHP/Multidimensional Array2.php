<?php

    $emp = [
      [1,"Krishna","Manager",50000],
        [2,"Salman","Salesman",20000],
          [3,"Mohan","Computer Operator",12000],
            [4,"Amir","Driver",5000],
    ];

    for ($row = 0; $row < 4; $row++) {
      for ($coloum = 0; $coloum < 4; $coloum ++) {
        echo $emp[$row][$coloum] . " ";
      }
      echo "<br>";
    }

 ?>
