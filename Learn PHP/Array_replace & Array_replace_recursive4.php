<?php

 $fruit = ['orange', 'banane', 'apple','grapes'];

 $veggie = ['a' =>'carrot',1 =>'pea'];

 $newArray = array_replace($fruit, $veggie);

 echo "<pre>";
 print_r($newArray);
 echo "</pre>";
 ?>
