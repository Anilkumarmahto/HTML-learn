<?php

 $fruit = ['orange', 'banane', 'apple','grapes'];

 $veggie = ['a' =>'carrot','b' =>'pea'];

 $newArray = array_replace($fruit, $veggie);

 echo "<pre>";
 print_r($newArray);
 echo "</pre>";
 ?>
