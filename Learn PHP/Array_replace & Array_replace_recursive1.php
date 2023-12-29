<?php

 $fruit = ['orange', 'banane', 'apple', 1 => 'grapes'];

 $veggie = ['carrot','pea'];

 $newArray = array_replace($fruit,$veggie);

 echo "<pre>";
 print_r($newArray);
 echo "</pre>";
 ?>
