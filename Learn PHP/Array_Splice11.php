<?php

  $color = ["red","green","blue","yellow","brown"];

  $fruit = ["orange","Apple"];

  array_splice($color,count($color),0,$fruit);

  echo "<pre>";
  print_r($color);
  echo "<pre>";


 ?>
