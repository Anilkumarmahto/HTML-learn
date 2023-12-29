<?php

   $food = array('orange', 'banane', 'apple','grapes');



  /*  $food = array (
      'fruits' => array('orange', 'banane', 'apple'),
      'veggie' => array('carrot', 'collard', 'pea')
    );  */

    $len = count($food);

    for ($i = 0; $i < $len; $i++) {
      echo $food[$i] . "<br>";
    }

 ?>
