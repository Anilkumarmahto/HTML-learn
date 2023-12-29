<?php

 $fruit = ['orange', 'banane', 'apple','grapes'];

 $veggie = ['carrot','pea'];

 $color = ['red','green','blue'];

 $newArray = array_replace($fruit, $veggie, $color);

 echo "<pre>";
 print_r($newArray);
 echo "</pre>";
 ?>
