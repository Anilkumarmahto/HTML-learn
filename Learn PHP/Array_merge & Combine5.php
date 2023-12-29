<?php

  $fruit = ['a' => "orange", 'b' => "banana", 'c' => "grapes"];

  $veggie = ['b' => ['color' =>['red', 'blue', 'red']],
              'e' => 'pea',
               55,
                58
              ];


   $newArray = array_merge_recursive($fruit, $veggie,);

  echo "<pre>";
  print_r($newArray);
  echo "</pre>";

 ?>
