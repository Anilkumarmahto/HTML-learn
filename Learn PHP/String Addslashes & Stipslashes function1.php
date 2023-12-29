<?php

  $str = 'Hello I am "Yahoo Baba"';
  echo $str. "<br>";

  $newStr = addslashes($str);

  echo stripslashes($newStr);

 ?>
